import React, {useContext, useState} from 'react'
import { BookContext } from '../Contexts/BookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch({type:"ADD_BOOK",book:{title, author}});
        setAuthor('');
        setTitle('');
    }
    return ( 
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder='Book Title' value={title} id=""
            onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder='Book Author' value={author} id=""
            onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default BookForm;