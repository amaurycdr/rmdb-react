
import React,{useState,useRef} from 'react'
import FontAwesome from 'react-fontawesome';
import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar';

const SearchBar=({callback})=>{
    const [state, setstate] = useState('');
    const timeOut=useRef(null);

    const doSearch= event=>{
        const{value}=event.target
        clearTimeout(timeOut.current);
        setstate(value)

        timeOut.current=setTimeout(()=>{
            callback(value);
        },500)
    }
    const undoSearch=()=>{
        setstate('')
        callback('');
    }
    return(
        <StyledSearchBar>
            <StyledSearchBarContent>
                {!state?<FontAwesome className='fa-search' name="search" size="2x"/>:<FontAwesome className='fa-undo' name="search" size="2x" onClick={undoSearch}/>}
                <input
                type="text"
                placeholder="Search Movie"
                onChange={doSearch}
                value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}
export default SearchBar;