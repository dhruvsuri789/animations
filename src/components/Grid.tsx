interface GridProps {
  children: React.ReactNode;
}

function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
      {children}
    </div>
  );
}

export default Grid;
