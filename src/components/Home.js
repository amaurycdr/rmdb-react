import React, {useState} from 'react'
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL} from '../config';

//Components import
import HeroImages from './elements/HeroImage';
import Gird from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';
import SearchBar from './elements/SearchBar';

//Custom Hook
import {useHomeFetch} from './hooks/useHomeFetch'


import NoImage from './images/no_image.jpg';

const Home=()=>{

    const[
        {
            state:{movies,currentPage,totalPages,heroImage},
            loading,
            error
        },
        fetchMovies,
    ]=useHomeFetch();
    const[searchTerm,setSearchTerm]=useState('')

    const searchMovies=search=>{
        const endpoint= search ? SEARCH_BASE_URL+search:POPULAR_BASE_URL;
        setSearchTerm(search);
        fetchMovies(endpoint)
    }

    const loadMoreMovies=()=>{
        const searchEndPoint=`${SEARCH_BASE_URL}${searchTerm}&page=${currentPage+1}`;
        const popualEndPoint=`${POPULAR_BASE_URL}&page=${currentPage+1}`;
    
        const endpoint = searchTerm ? searchEndPoint :popualEndPoint;
        fetchMovies(endpoint)
    
    }

    if(error) return<div>Something went wrong....</div>;
    if(!movies[0])return<Spinner/>;

    return(   
        <React.Fragment>

            {!searchTerm?<HeroImages 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}    
            />:''}
            <SearchBar callback={searchMovies}/>
            <Gird header={searchTerm ? 'Search Result': 'Popular Movies'}>
                
                {movies.map(movie=>(
                    
                    <MovieThumb
                    key= {movie.id}
                    clickable
                    image={
                        movie.poster_path
                        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        :NoImage
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                    />
                ))

                }
            </Gird>
            {loading &&<Spinner/>}
            {currentPage<totalPages && !loading &&(
                <LoadMoreBtn
                text="Load More"
                callback={loadMoreMovies}
                />
            )
            }
        </React.Fragment>
    )
}

export default Home;