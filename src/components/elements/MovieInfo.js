import React from 'react'

import {StyledMovieInfo} from '../styles/StyledMovieInfo'

import {IMAGE_BASE_URL,POSTER_SIZE} from '../../config'
import NoImage from '../images/no_image.jpg'

import MovieThumb from './MovieThumb'

const MovieInfo=({backdrop,img,movieId,title,plot,rating,directors})=>(
    <StyledMovieInfo backdrop={backdrop}>
        {console.log(`${IMAGE_BASE_URL}${POSTER_SIZE}${img}`)}
        <div className="movieinfo-content">
            <div className="movieinfo-thumb">
                <MovieThumb 
                    image={
                        img
                        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${img}`
                        :NoImage
                    } 
                    movieId={movieId} 
                    clickable={false} 
                />
            </div>
            <div className="movieinfo-text">
                    <h1>{title}</h1>
                    <h3>PLOT</h3>
                    <p>{plot} </p>
            
            <div className="rating-director">
                <div>
                    
                    <h3>IMDB RATING</h3>
                    <div className="score">
                        {rating}
                    </div>
                </div>
                <div>
                    
                    <div className="director">
                        <h3>DIRECTOR{directors.length>1?'S':''}</h3>
                        {directors.map((director)=>(
                            <p key={director.id}>{director.name}</p>
                        ))}
                        
                    </div>
                </div>
            </div>
            </div>
        </div>

    </StyledMovieInfo>
)
export default MovieInfo;