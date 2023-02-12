import Header from "./Header";
import style from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div>
      <Header />

      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
