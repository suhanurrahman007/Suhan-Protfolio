export default function ContainerCU({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="container mx-auto max-w-7xl mt-7 px-4 flex-grow">
        {children}
      </div>
  );
}
