import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const MyComponent = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/my-path",
      title: "Custom Title",
    });
  }, []);

  return <div>{/* Your component JSX */}</div>;
};

export default MyComponent;