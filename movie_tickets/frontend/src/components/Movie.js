import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () =>{
    const [movie,setMovie] = useState({});
    let {id} = useParams();

    useEffect( () => {
        let myMovie = {
            id:1,
            title:"highlander",
            release_date: "1986-03-07",
            runtime:116,
            mpaa_rating:"R",
            description:"Some long discription",
        }
        setMovie(myMovie);
    },[id])
    return(
            <div>
                <h1>Movie {movie.title}</h1>
                <small><em>{movie.description}</em></small>
            </div>
    );
}

export default Movie;