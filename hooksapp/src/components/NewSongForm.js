import React,{useState} from 'react'

const NewSongForm = ({addSong}) => {
    const [title,setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Song Name:</label>
        <input type="text" required name="" id="" value ={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="submit" value="Add Form"/>
        </form>
     );
}
 
export default NewSongForm;