
import React, {useState} from 'react';

export default function ToDo(){
    const [toDolist, setList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [input, setInput] = useState([]);

    const addTodo = (todo) =>{
        const newTodo = {
            id: Math.random(),
            todo: todo
        }

        setList([...toDolist, newTodo]);
            
        // clear input box
        setInput("")
    };

    const deleteTodo = (id) =>{
        // Takes the list and adds every element that does not have an id equal to "id"
        const newList = toDolist.filter((todo) => todo.id !== id);

        setList(newList);
    }

    const addToDone = (id) => {
        // Get a done list ready
        const todo = toDolist.filter((todo) => todo.id === id)
        const doneTodo = {
            id: todo.id,
            todo: todo.todo
        }
        setDoneList([...doneList, doneTodo]);

        deleteTodo(id)
    }

    return(
        <div>
            <p>Todo</p>
            <ul>
                {doneList.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => addToDone(todo.id)}>&radic;</button>
                        <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                        
                    </li>
                ))}
            </ul>
            <div>
                <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
                <button onClick={() => addTodo(input)}>
                    Add
                </button>
            </div>
            
            <ul>
                {toDolist.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => addToDone(todo.id)}>&radic;</button>
                        <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                        
                    </li>
                ))}
            </ul>
            
        </div>
    );

}



// setTheArray([...theArray, newElement]) Puts the element into the already built array
