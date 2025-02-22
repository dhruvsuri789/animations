interface GridProps {
  children: React.ReactNode;
}

function GridTwo({ children }: GridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">{children}</div>
  );
}

export default GridTwo;
