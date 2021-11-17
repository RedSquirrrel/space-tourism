// import Header from "./../Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="layout-container">{children}</div> */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
