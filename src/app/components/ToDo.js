
import React, {useState} from 'react';
import { Button, ListGroup, InputGroup, Form} from 'react-bootstrap';
import ToDoForm from './ToDoForm';
import { useToDoContext } from './ToDoProvider';

export default function ToDo(){
    const { toDolist1 , deleteTodo} = useToDoContext();

    const [toDolist, setList] = useState([]);
    const [doneList, setDoneList] = useState([]);
   


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
            <ToDoForm/>
            
            <ListGroup as="ul" className="mx-5 m-3">
                {toDolist1.map((todo) => (
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



