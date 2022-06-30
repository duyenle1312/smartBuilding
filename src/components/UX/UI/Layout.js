import React from "react";

const Layout = (props) => {
  if (props.page === "page1") {
    return (
      <a href={`/building/${props.id}`} className="p-3">
        {props.children}
      </a>
    );
  } else {
    return <div className="p-3">{props.children}</div>;
  }
};

export default Layout;
