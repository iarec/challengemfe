import { useTodo } from '../hooks/useTodo';
import TodoItem from '../ts/interfaces/TodoItem';

interface Props {
  todo: TodoItem;
}

const TodoListItem = ({ todo }: Props) => {
  const { toggleComplete } = useTodo();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo)}
      />
      <span
        style={
          todo.completed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {todo.text}
      </span>
    </div>
  );
};
export default TodoListItem;
