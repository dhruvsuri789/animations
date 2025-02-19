interface MainContainerProps {
  children: React.ReactNode;
}

function MainContainer({ children }: MainContainerProps) {
  return (
    <main className="bg-gray-900 min-h-screen w-full text-gray-300 p-10">
      {children}
    </main>
  );
}

export default MainContainer;
