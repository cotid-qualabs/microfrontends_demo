import React from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const RemoteApp1 = React.lazy(() => import("RemoteOne/App"));
const RemoteApp2 = React.lazy(() => import("RemoteTwo/App"));

const RemoteWrapper = ({ children, pepe }) => (
  <div
    style={{
      border: "1px solid black",
      padding: "2em",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <Router>
    <div className="app">
      <h1>This is the Host</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/remote1">Remote 1</Link></li>
          <li><Link to="/remote2">Remote 2</Link></li>
        </ul>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remote1" element={<WrappedRemote1 />} />
          <Route path="/remote2" element={<WrappedRemote2 />} />
        </Routes>
      </React.Suspense>
    </div>
  </Router>
);
export default App;

function WrappedRemote1() {
  return  <RemoteWrapper children={<RemoteApp1 />}
  />;
}

function WrappedRemote2() {
  return <RemoteWrapper><RemoteApp2 /></RemoteWrapper>;
}

function Home() {
  return <h3>Home</h3>;
}