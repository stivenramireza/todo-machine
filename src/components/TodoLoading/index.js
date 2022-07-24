import './TodoLoading.css';

const TodoLoading = () => {
    return (
        <div className='TodoLoading-container'>
            <span className='TodoLoading-completeIcon' />
            <p className='TodoLoading-text' />
            <span className='TodoLoading-deleteIcon' />
        </div>
    );
};

export { TodoLoading };
