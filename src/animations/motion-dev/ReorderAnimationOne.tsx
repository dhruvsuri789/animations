"use client";

import GridComponent from "@/components/GridComponent";
import { animate, MotionValue, Reorder, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

interface Props {
  item: string;
}

const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
      <span>{item}</span>
    </Reorder.Item>
  );
};

export default function ReorderAnimationOne() {
  const [items, setItems] = useState(initialItems);

  return (
    <GridComponent animationName="Reorder Animation">
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </Reorder.Group>
      <StyleSheet />
    </GridComponent>
  );
}

function StyleSheet() {
  return (
    <style>
      {`
      ul,
      li {
        list-style: none;
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 24px;
      }

      ul {
        position: relative;
        width: 300px;
      }

      li {
        border-radius: 10px;
        margin-bottom: 10px;
        width: 100%;
        padding: 15px 18px;
        /* position: relative; */
        background: white;
        color: black;
        // border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        cursor: grab;
      }

      li svg {
        width: 18px;
        height: 18px;
        cursor: grab;
      }
    `}
    </style>
  );
}
