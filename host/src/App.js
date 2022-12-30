import React from "react";
import ErrorBoundary from "./ErrorBoundary.js";
const RemoteApp1 = React.lazy(() => import("RemoteOne/App"));
const RemoteApp2 = React.lazy(() => import("RemoteTwo/App"));

const RemoteWrapper = ({ children, pepe }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <RemoteWrapper
      children={<RemoteApp1 />}
    />
    <RemoteWrapper>
      <RemoteApp2 />
    </RemoteWrapper>
  </div>
);
export default App;