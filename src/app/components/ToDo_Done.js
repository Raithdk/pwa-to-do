import { Button, ListGroup} from 'react-bootstrap';
import { useToDoContext } from './ToDoProvider';
export default function ToDo_Done(){
    const {doneList, deleteToDone} = useToDoContext();
    return(
        <div>
        <p>Done Screen</p>
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