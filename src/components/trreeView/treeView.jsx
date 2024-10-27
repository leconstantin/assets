import React from "react";
import MenuList from "./menu-list";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="px-7 py-5 bg-teal-300 ring-1 ring-teal-600 h-80 w-44 shadow-xl">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
