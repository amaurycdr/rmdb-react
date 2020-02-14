import React from 'react'


//Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import {useMovieFetch} from './hooks/useMovieFetch';
const Movie=({movieId})=> {
    const[movie,loading,error]=useMovieFetch(movieId);
    if(error)return <div>Something went wrong...</div>;
    if(loading) return <Spinner/>
    return(
        <React.Fragment>

            <Navigation movie={movie.original_title}/>
            <MovieInfo 
                backdrop={movie.backdrop_path} 
                movieId={movieId} 
                img={movie.poster_path}
                plot={movie.overview}  
                title={movie.original_title}
                rating={movie.vote_average}
                directors={movie.directors}
            />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid>
                {movie.actor.map((actor)=>(<Actor key={actor.cast_id} actor={actor}/>))}
            </Grid>

        </React.Fragment>
    )
};

export default Movie;