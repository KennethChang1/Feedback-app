const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`bg-light_white pt-8 ${className}`}>{children}</div>;
};

export default MainContainer;
