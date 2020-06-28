import React, { Suspense, lazy, Fragment } from "react";
import { withSnackbar } from "notistack";
import { Button } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";

import "./assets/stylesheets/style.scss";
import Loading from "./component/loading/loading";

const Header = lazy(() => import("./component/header"));
const Home = lazy(() => import("./component/home"));
const AboutMe = lazy(() => import("./component/aboutMe"));
const Skills = lazy(() => import("./component/skills"));
const MyWork = lazy(() => import("./component/myWork"));
const Article = lazy(() => import("./component/article"));
const Contact = lazy(() => import("./component/contact"));
const Footer = lazy(() => import("./component/footer"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newVersionAvailable: false,
      waitingWorker: {},
    };
  }
  onServiceWorkerUpdate = (registration) => {
    this.setState({
      waitingWorker: registration && registration.waiting,
      newVersionAvailable: true,
    });
  };

  updateServiceWorker = () => {
    const { waitingWorker } = this.state;
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    this.setState({ newVersionAvailable: false });
    window.location.reload();
  };

  refreshAction = (key) => {
    //render the snackbar button
    return (
      <Fragment>
        <Button variant="success" size="sm" onClick={this.updateServiceWorker}>
          {"refresh"}
        </Button>
      </Fragment>
    );
  };
  componentDidMount = () => {
    const { enqueueSnackbar } = this.props;
    const { newVersionAvailable } = this.state;
    if (process.env.NODE_ENV === "production") {
      serviceWorker.register({ onUpdate: this.onServiceWorkerUpdate });
    }

    if (newVersionAvailable)
      //show snackbar with refresh button
      enqueueSnackbar("A new version was released", {
        persist: true,
        variant: "success",
        action: this.refreshAction(),
      });
  };
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Header />
          <Home />
          <AboutMe />
          <Skills />
          <MyWork />
          <Article />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    );
  }
}

export default withSnackbar(App);
