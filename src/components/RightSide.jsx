import React from "react";
import { useSelector } from "react-redux";
const RightSide = () => {
  const selectedMovie = useSelector((state) => state.allproduct.selectedMovie)[0]
  console.log("selectedMovie", selectedMovie);
  console.log(`https://www.themoviedb.org/t/p/w220_and_h330_face${selectedMovie?.poster_path}`);


  
  return (
   <> 
   
     <div className={`RightSideContainer ${selectedMovie && Object.keys(selectedMovie)?.length > 0 ? "" : "invisible"}`}>
        <div className="imagePoster">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${selectedMovie?.poster_path}`}
            alt={selectedMovie?.title}
            className="logo-poster"
          />
        </div>
        <div className="detail-Movie">
          <div className="movie-Logo">
          <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${selectedMovie?.backdrop_path}`}
              alt={selectedMovie?.title}
              className="logo-movie-1"
            />
          </div>
          <div className="movie-Name">
          <p>{selectedMovie?.title}</p>
          </div>
        </div>
        <div className="movie-Description">
          <p className="Language">Language:  {selectedMovie?.original_language}</p>
          <p className="Popularity">Popularity: {selectedMovie?.popularity}</p>
          <p className="Release_date">Release_date: {selectedMovie?.release_date}</p>
          <p className="Rating">Rating:{selectedMovie?.vote_average}</p>
          <p className="No.of_Rate">No.of_Rate:{selectedMovie?.vote_count}</p>
          <p className="Description">Description: {selectedMovie?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default RightSide;
