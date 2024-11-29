import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test.jsx";
import TabTest from "./components/custom-tabs/tab-test.jsx";
import FeatureFlags from "./components/feature-flag/index.jsx";
import GithubProfileFinder from "./components/github-profile-finder/index.jsx";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode/index.jsx";
import LoadMoreData from "./components/load-more-button";
import QrCodeGenerator from "./components/qr-code-generator/index.jsx";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator/index.jsx";
import SearchAutocomplete from "./components/search-autocomplete-wih-api/index.jsx";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe/index.jsx";
import menus from "./components/tree-view/data.js";
import TreeView from "./components/tree-view/index.jsx";
import FeatureFlagsGlobalState from "./components/feature-flag/context/index.jsx";
import UseFetchHookTest from "./components/use-fetch/test.jsx";
import UseOnclickOutsideTest from "./components/use-outside-click/test.jsx";
import UseWindowResizeTest from "./components/use-window-resize/test.jsx";

function App() {
  return (
    <div className="App">
      <div className="project">
        {/* {Accordion component} */}
        {/* <Accordion /> */}
      </div>

      <div className="project">
        {/* {Random color component} */}
        {/* <RandomColor /> */}
      </div>

      <div className="project">
        {/* {Star rating component} */}
        {/* <StarRating noOfStars={10} /> */}
      </div>

      <div className="project">
        {/* {Image slider component} */}
        {/* <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        /> */}
      </div>

      <div className="project">
        {/* {Load more products component} */}
        {/* <LoadMoreData /> */}
      </div>

      <div className="project">
        {/* {Tree view component/menu UI component} */}
        {/* <TreeView menus={menus} /> */}
      </div>

      <div className="project">
        {/* {Qr code generator} */}
        {/* <QrCodeGenerator /> */}
      </div>

      <div className="project">
        {/* {Light and dark mode} */}
        {/* <LightDarkMode /> */}
      </div>

      <div className="project">
        {/* {Scroll indicator component} */}
        {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      </div>

      <div className="project">
        {/* {Custom tabs component} */}
        {/* <TabTest /> */}
      </div>

      <div className="project">
        {/* {Custom modal component} */}
        {/* <ModalTest /> */}
      </div>

      <div className="project">
        {/* {Github profile finder} */}
        {/* <GithubProfileFinder /> */}
      </div>

      <div className="project">
        {/* {Search Autocomplete} */}
        {/* <SearchAutocomplete /> */}
      </div>

      <div className="project">
        {/* {Tic-tac-toe} */}
        {/* <TicTacToe /> */}
      </div>

      <div className="project">
        {/* {Feature Flags Implementation} */}
        {/* <FeatureFlagsGlobalState>
          <FeatureFlags />
        </FeatureFlagsGlobalState> */}
      </div>

      <div className="project">
        {/* {UseFetch - Custom Hook Test} */}
        {/* <UseFetchHookTest /> */}
      </div>

      <div className="project">
        {/* {Use Onclick Outside Hook Test} */}
        {/* <UseOnclickOutsideTest /> */}
      </div>

      <div className="project">
        {/* {Use Window Resize Hook Test} */}
        <UseWindowResizeTest />
      </div>

    </div>
  );
}

export default App;
