import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <p>header</p>
      <main>
        <Outlet />
      </main>
      <p>footer</p>
    </>
  );
};

export default Layout;
