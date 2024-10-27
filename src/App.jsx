import "./App.css";
import Accordian from "./components/accordian";
import ImgSlider from "./components/imgSlider";
import RandomColor from "./components/randomColor";
import StarRating from "./components/star-rating";
import "./App.css";
import LoadMore from "./components/loadMore";
import TreeView from "./components/trreeView/treeView";
import menus from "./data/treeview";
import QrCodeGenerator from "./components/qr-code/qrCode";
import LightDarkMode from "./components/light-dark/lightDark";
import ScrollIndicator from "./components/scroll-indicator/scrollIndicator";
import TabTest from "./components/tabss/tab-test";
import ModalTest from "./components/customModal/modal-test";
import GithubProfileFinder from "./components/githubProfile/gitHubProfile";
import SearchAutoComplete from "./components/autoComplete/autoComplete";
import TicTacToe from "./components/tictacToe/tictacToe";
import FeatureFlagGlobalState from "./components/featureFlag/context/contextt";
import FeatureFlags from "./components/featureFlag/featureFlagg";
import UseFetchHookTest from "./components/useFetchh/test";
import UseOnclickOutsideTest from "./components/useOutside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scrollTOPBOtt";
import ScrollToSection from "./components/scrollTOPBOtt/scrollToSection";
export default function App() {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating noFStars={10} />
      <ImgSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
      <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnclickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
    </>
  );
}
