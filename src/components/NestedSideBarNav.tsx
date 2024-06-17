import React from "react";

type NestedSideBarNavProps = {
  children: React.ReactNode;
};

const NestedSideBarNav = ({ children }: NestedSideBarNavProps) => {
  return (
    <div className="ml-4">
      {React.Children.map(children, (child) => (
        <div className="mb-2">{child}</div>
      ))}
    </div>
  );
};

export default NestedSideBarNav;