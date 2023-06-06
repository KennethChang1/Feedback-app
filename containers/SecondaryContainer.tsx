const SecondaryContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="bg-white rounded-lg p-6 text-sm mb-4">
      <h2 className="text-main-text font-bold text-lg mb-6">{title}</h2>
      {children}
    </div>
  );
};

export default SecondaryContainer;
