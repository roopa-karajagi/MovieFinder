import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({MovieList,SelectedMovie}) => {
    return (
        <div className="container-fluid">
            <div className="row">
            {
                MovieList.map(movieItem=>{
                    return(
                        <div className="col-lg-2 col-md-4 col-sm-6">
                         <div 
                         className="card">
                            <MovieItem 
                            key={movieItem.imdbId}
                            movie={movieItem}
                            selectMovie={SelectedMovie}
                            />
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
export  default MovieList
