import React  from "react";
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import HomePage from "./pages/Home.pages";
import Movie from "./pages/Movie.page";
import './style/main.css';
import './index.css';
//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
    </div>
  );
}

export default App;
