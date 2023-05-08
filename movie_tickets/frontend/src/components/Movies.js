import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () =>{
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        let moviesList = [
            {
                id:1,
                title:"highlander",
                release_date: "1986-03-07",
                runtime:116,
                mpaa_rating:"R",
                description:"Some long discription",
            },
            {
                id:2,
                title:"raiders of the lost ark",
                release_date: "1981-06-12",
                runtime:115,
                mpaa_rating:"PG-13",
                description:"Some long discription",
            },
        ];
        setMovies(moviesList);
    },[]);

    return(
            <div className="text-center">
                <h2> Movies</h2>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Release Date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((m)=>(
                            <tr key={m.id}>
                                <td>
                                    <Link to={`/movie/${m.id}`}>
                                        {m.title}
                                    </Link>
                                </td>
                                <td>
                                    {m.release_date}
                                </td>
                                <td>
                                    {m.mpaa_rating}
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <hr />
                
            </div>
    );
}

export default Movies;