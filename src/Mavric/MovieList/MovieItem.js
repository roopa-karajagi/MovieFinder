import React, { Fragment } from 'react'

export const MovieItem = ({movie,selectMovie}) => {

    return (
               <Fragment>
                    <img
                      className="card-img-top"
                      src={`${movie.Poster}`}
                      alt="poster"
                      style={{ width: "100%" }}
                      onClick={()=>{selectMovie(movie.imdbID)}}
                    />
                    <p className="card-text">{movie.Title}</p>
                </Fragment>
              );
              }

export default MovieItem;