import clsx from "clsx";

const MainLayout = ({ children }) => {
  return <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden h-screen">{children}</main>;
};

MainLayout.column = ({ children, className }) => {
  return (
    <section className={clsx("w-full border-r overflow-hidden", className)}>
      {children}
    </section>
  );
};

export default MainLayout;
