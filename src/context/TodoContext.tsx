// context/TodoContext.tsx
import React, { createContext, useContext, useState } from "react";

type TodoContextType = {
  todo: string[];
  setTodo: React.Dispatch<React.SetStateAction<string[]>>;
  done: string[];
  setDone: React.Dispatch<React.SetStateAction<string[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
  completeTodo: (index: number) => void;
  deleteDone: (index: number) => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todo, setTodo] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const completeTodo = (index: number) => {
    const task = todo[index];
    setTodo(todo.filter((_, i) => i !== index));
    setDone([...done, task]);
  };

  const deleteDone = (index: number) => {
    setDone(done.filter((_, i) => i !== index));
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, done, setDone, input, setInput, addTodo, completeTodo, deleteDone }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within TodoProvider");
  return context;
};

