import * as React from "react";
import { render } from "react-dom";
import Root from "./home";
import { Provider } from "mobx-react";
import AppStore, { appStore } from "./store/AppStore";
import ViewStore from "./store/ViewStore";
import ProjectStore from "./store/ProjectStore";
import notification from "./store/NotificationStore";
import "semantic-ui-less/semantic.less";
import "./global.css";

const view = new ViewStore();
const project = new ProjectStore();

render(
  <Provider
    view={view}
    state={appStore}
    project={project}
    notification={notification}
  >
    <Root />
  </Provider>,
  document.getElementById("root")
);