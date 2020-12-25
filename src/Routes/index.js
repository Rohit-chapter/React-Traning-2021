import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// Pages
const DefaultLayout = React.lazy(() =>
  import("../Container/DefaultLayout")
);
// const Home = React.lazy(() =>
//   import("../Container/landingPage/home")
// );
// const Page404 = React.lazy(() => import("../Component/Common/page404"));

const Routes = [
  {
    exact: false,
    path: "/",
    name: "Main",
    component: DefaultLayout
  },
];

class AppRoutes extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Switch>
          {Routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                name={route.name}
                render={props => <route.component {...props} {...this.props} />}
              />
            );
          })}
        </Switch>
      </>
    );
  }
}
export default withRouter(AppRoutes)