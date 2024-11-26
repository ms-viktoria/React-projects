import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test.jsx";
import TabTest from "./components/custom-tabs/tab-test.jsx";
import GithubProfileFinder from "./components/github-profile-finder/index.jsx";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode/index.jsx";
import LoadMoreData from "./components/load-more-button";
import QrCodeGenerator from "./components/qr-code-generator/index.jsx";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator/index.jsx";
import SearchAutocomplete from "./components/search-autocomplete-wih-api/index.jsx";
import StarRating from "./components/star-rating";
import menus from "./components/tree-view/data.js";
import TreeView from "./components/tree-view/index.jsx";

function App() {
  return (
    <div className="App">
      <div className="project">
        {/* {Accordion component} */}
        <Accordion />
      </div>

      <div className="project">
        {/* {Random color component} */}
        <RandomColor />
      </div>

      <div className="project">
        {/* {Star rating component} */}
        <StarRating noOfStars={10} />
      </div>

      <div className="project">
        {/* {Image slider component} */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      </div>

      <div className="project">
        {/* {Load more products component} */}
        <LoadMoreData />
      </div>

      <div className="project">
        {/* {Tree view component/menu UI component} */}
        <TreeView menus={menus} />
      </div>

      <div className="project">
        {/* {Qr code generator} */}
        <QrCodeGenerator />
      </div>

      <div className="project">
        {/* {Light and dark mode} */}
        <LightDarkMode />
      </div>

      <div className="project">
        {/* {Scroll indicator component} */}
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      </div>

      <div className="project">
        {/* {Custom tabs component} */}
        <TabTest />
      </div>

      <div className="project">
        {/* {Custom modal component} */}
        <ModalTest />
      </div>

      <div className="project">
        {/* {Github profile finder} */}
        <GithubProfileFinder />
      </div>

      <div className="project">
        {/* {Search Autocomplete} */}
        <SearchAutocomplete />
      </div>
      
    </div>
  );
}

export default App;
