import { TodoIcon } from './';

const CompleteIcon = ({ completed, onComplete }) => {
    return (
        <TodoIcon 
            type='check'
            color={completed ? '4CAF50' : 'gray'}
            onClick={onComplete}
        />
    );
};

export { CompleteIcon };
