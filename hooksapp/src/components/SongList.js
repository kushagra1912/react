import React, {useState, useEffect} from 'react';
import {v4} from 'uuid'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title:'Song 1', id:1},
        {title:'Song 2', id:2},
        {title:'Song 3', id:3}

    ]);
    const addSong = (title) =>{
        setSongs([...songs,{title:title, id:v4()}]);
    }
     useEffect(() => {
        console.log("Use Effect Fired");
    })
    return (  
        <div className="song-list">
            <ul>
                {
                    songs.map(songs => {
                        return(
                            <li key = {songs.id}>{songs.title}</li>
                        )
                    })
                }
            </ul>
            <NewSongForm addSong = {addSong}/>
        </div>
    );
}
 
export default SongList;