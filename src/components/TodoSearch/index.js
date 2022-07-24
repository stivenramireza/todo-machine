import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    
    return (
        <input 
            className='TodoSearch' 
            placeholder='Enter a word'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };
