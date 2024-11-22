import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-button";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

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
    
    </div>
    
  );
}

export default App;
