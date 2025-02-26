import { cn } from "@/utils/cn";

interface GridComponentProps {
  children: React.ReactNode;
  animationName: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

function GridComponent({
  children,
  animationName,
  className = "min-h-[30rem]",
  ref,
}: GridComponentProps) {
  return (
    <div
      className={cn(
        "bg-gray-950 flex items-center justify-center p-5 border border-gray-800 rounded-2xl overflow-clip relative",
        className
      )}
      ref={ref}
    >
      <div className="absolute p-3 top-0 left-0 bg-gray-800 rounded-br-2xl">
        <p className="text-sm text-gray-400">{animationName}</p>
      </div>
      {children}
    </div>
  );
}

export default GridComponent;
