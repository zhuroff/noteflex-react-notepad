import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Root } from "./root.component";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/primereact.min.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
