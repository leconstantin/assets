import { Component, useContext } from "react";
import LightDarkMode from "../light-dark/lightDark";
import TicTacToe from "../tictacToe/tictacToe";
import RandomColor from "../randomColor";
import Accordian from "../accordian";
import TreeView from "../trreeView/treeView";
import TabTest from "../tabss/tab-test";
import { FeatureFlagsContext } from "./context/contextt";
import menus from "../../data/treeview";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;
  return (
    <div className="">
      <h1>Feature flag</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
