import { createContext, useEffect, useState } from 'react';
import TodoItem from '../ts/interfaces/TodoItem';
import { Filter } from '../ts/enums/Filter';

const LOCAL_STORAGE_KEY = 'todo-items';

interface ContextProps {
  todos: TodoItem[];
  filter: Filter;
  changeFilter: (filter: Filter) => void;
  addTodo: (todo: string) => void;
  toggleComplete: (todo: TodoItem) => void;
}

export const TodoContext = createContext<ContextProps | undefined>(undefined);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, SetFilter] = useState<Filter>(Filter.ALL);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setTodos([]);
    }

    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      const initial = data !== null ? JSON.parse(data) : [];
      setTodos(initial);
    } catch {
      setTodos([]);
    }
  }, []);

  const addTodo = (newTodo: string) => {
    if (newTodo) {
      const newTodoItem: TodoItem = {
        id: crypto.randomUUID(),
        text: newTodo,
        completed: false,
      };
      const data = [...todos, newTodoItem];
      setTodos(data);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  };

  const toggleComplete = (todo: TodoItem) => {
    const data = todos.map((i) =>
      i.id === todo.id ? { ...i, completed: !i.completed } : i
    );
    setTodos(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  const changeFilter = (filter: Filter) => {
    SetFilter(filter);
  };

  return (
    <TodoContext.Provider
      value={{ todos, filter, changeFilter, addTodo, toggleComplete }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
