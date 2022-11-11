
import React, {useState} from 'react';
import { Button, ListGroup, InputGroup, FormControl, Form} from 'react-bootstrap';

export default function ToDo(){
    const [toDolist, setList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [input, setInput] = useState([]);

    const addTodo = (todo) =>{
        if(todo == ""){
            return
        }
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
            id: todo[0].id,
            todo: todo[0].todo
        }
        setDoneList([...doneList, doneTodo]);

        deleteTodo(id)
    }

    const deleteToDone = (id) =>{
        const newList = doneList.filter((todo) => todo.id !== id);
        setDoneList(newList);
    }

    return(
        <div>
            <p>Todo Screen</p>
            
            <h2>ToDo</h2>
            <div className='mx-5'>
                <InputGroup>
                    <Form.Control
                    placeholder={input}
                    onChange={(e) => setInput(e.target.value)}/>
                    <Button onClick={() => addTodo(input)}>
                        Add
                    </Button>
                </InputGroup>
                
            </div>
            <ListGroup as="ul" className="mx-5 m-3">
                {toDolist.map((todo) => (
                    <ListGroup.Item as="li" key={todo.id}>
                        {todo.todo}
                        <Button className="mx-1" variant="success" onClick={() => addToDone(todo.id)}>✓</Button>
                        <Button className="mx-1" variant="danger" onClick={() => deleteTodo(todo.id)}>&times;</Button>    
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h2>DONE</h2>
            <ListGroup as="ul" className="mx-5 m-3">
                {doneList.map((todo) => (
                    <ListGroup.Item as="li" key={todo.id}>
                        {todo.todo}
                        <Button className="mx-1" variant="danger" onClick={() => deleteToDone(todo.id)}>&times;</Button>            
                    </ListGroup.Item>
                ))}
            </ListGroup>
        
            
        </div>
    );

}



