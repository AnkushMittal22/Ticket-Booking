import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import ShowTotal from "./Page/ShowTotal";
import BookTicket from "./Page/BookTicket";
import Layout from "./Component/Layout/Layout";
import About from "./Page/About";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/home"} />
          </Route>
          <Route path={"/home"} exact>
            <Home />
          </Route>
          <Route path={"/about"}>
            <About />
          </Route>
          <Route path={"/bookticket"} exact>
            <BookTicket />
          </Route>
          <Route path={"/bookticket/:showtotal/"}>
            <ShowTotal />
          </Route>
          <Route path={"*"} exact>
            <Redirect to={"/home"} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
