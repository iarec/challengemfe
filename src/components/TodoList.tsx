import { useTodo } from '../hooks/useTodo';
import { Filter } from '../ts/enums/Filter';
import TodoItem from '../ts/interfaces/TodoItem';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { todos, filter } = useTodo();

  const applyFilter = (todo: TodoItem) => {
    switch (filter) {
      case Filter.ALL:
        return true;
      case Filter.ACTIVE:
        return !todo.completed;
      case Filter.COMPLETED:
        return todo.completed;
      default:
        return false;
    }
  };

  return (
    <ul data-testid='list-section'>
      {todos.filter(applyFilter).map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
export default TodoList;
