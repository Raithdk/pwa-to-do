import React, {useState, createContext, useContext} from "react";

const TodoContext = createContext();

const initialTodoListState = [{id: Math.random() ,todo:"Hello WOrld"}]

const ToDoProvider = ({ children }) =>{
    const [toDolist1, setToDoList] = useState(initialTodoListState);
    
    const addTodo = (todo) =>{
        if(todo == ""){
            return
        }
        const newTodo = {
            id: Math.random(),
            todo: todo
        }
        setToDoList([...toDolist1, newTodo]);
        
        
    };

    const deleteTodo = (id) =>{
        // Takes the list and adds every element that does not have an id equal to "id"
        const newList = toDolist1.filter((todo) => todo.id !== id);
        setToDoList(newList);
    }


    const contextValue = {
        toDolist1,
        addTodo,
        deleteTodo,
 

    };
    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    )
    
};

export const useToDoContext = () => useContext(TodoContext);

export default ToDoProvider;