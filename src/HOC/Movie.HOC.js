import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/Movie.layout";


const MovieHOC = ({ component:Component ,...rest}) =>{
    //props -> path exact
    return(
        <div>
            <Route {...rest} 
            component={(props)=> (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )} 
            />
        </div>
    );
};

export default MovieHOC;