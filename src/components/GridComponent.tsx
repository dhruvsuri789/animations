interface GridComponentProps {
  children: React.ReactNode;
  animationName: string;
}

function GridComponent({ children, animationName }: GridComponentProps) {
  return (
    <div className="bg-gray-950 flex items-center justify-center p-5 min-h-[30rem] border border-gray-800 rounded-2xl overflow-hidden relative">
      <div className="absolute p-3 top-0 left-0 bg-gray-800 rounded-br-2xl">
        <p className="text-sm text-gray-400">{animationName}</p>
      </div>
      {children}
    </div>
  );
}

export default GridComponent;
