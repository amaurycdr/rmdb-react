import React from 'react'
import {IMAGE_BASE_URL,POSTER_SIZE} from '../../config'
import {StyledActor} from '../styles/StyledActor';
import NoImage from '../images/no_image.jpg'
const Actor= ({actor})=> (
    <StyledActor>
        {<img src={actor.profile_path ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`:NoImage} alt="actor" />}
        <p className="actor-name">{actor.name} </p>
        <p className="actor-character">{actor.character}</p>
    </StyledActor>
)

export default Actor;