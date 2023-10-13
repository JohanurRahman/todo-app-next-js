const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
