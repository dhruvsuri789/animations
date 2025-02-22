interface GridProps {
  children: React.ReactNode;
}

function GridOne({ children }: GridProps) {
  return <div className="grid grid-cols-1 gap-5">{children}</div>;
}

export default GridOne;
