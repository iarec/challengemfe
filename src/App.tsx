import './App.css';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <Filters />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
