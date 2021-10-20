import React  from "react";
import axios from "axios";
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import HomePage from "./pages/Home.pages";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import './style/main.css';
import './index.css';
//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </div>
  );
}

export default App;
