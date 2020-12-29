import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import routes from "../../router";

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const token = localStorage.getItem("token");
    return (
      <div>
        <Header token={token} {...this.props} />
        <>
          <Suspense fallback={"Loading..."}>
            <Switch>
              {routes.map((route, id) => {
                return route.component ? (
                  <Route
                    key={id}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <route.component {...props} {...this.props} />
                    )}
                  />
                ) : null;
              })}
            </Switch>
          </Suspense>
        </>
        <Footer />
      </div>
    );
  }
}


export default DefaultLayout;