import React from "react";
import TreeView from "./treeView";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = React.useState({});
  function handleToggleChild(getCurrentLabel) {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [getCurrentLabel]: !displayCurrentChild[getCurrentLabel],
    });
  }
  console.log(displayCurrentChild);

  return (
    <li className="">
      <div className="flex gap-3">
        <p className="font-medium text-white">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            onClick={() => handleToggleChild(item.label)}
            className="cursor-pointer h-7 text-white"
          >
            {displayCurrentChild[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
