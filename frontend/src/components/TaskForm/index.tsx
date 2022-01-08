import { FormEvent, useState,  } from 'react';
import { api } from '../../services';
import { Container, IconClose, Button, Form, Box } from './styles';
interface IcloseForm{
  closeForm(): void
}
interface Itask{
  title: string,
  description: string,
}
const TaskForm = ({closeForm}:IcloseForm) => {
  const [task, setTask] = useState<Itask>({
    title: '', 
    description: ''
  })

  const postTask=(e:FormEvent)=>{
    e.preventDefault()
    api.post('/task', task)

    setTask({
      title: '',
      description: ''
    })    
  }
 
  return (
    <Container>
      <Box>
          <IconClose onClick={closeForm}/>
          <Form onSubmit={postTask}>
                <label>
                  <h3>Title</h3>
                  <input type="text" value={task.title} required onChange={(e)=>setTask({...task, title: e.target.value})} placeholder='title' />
                </label>
                <label>
                  <p>Description</p>
                  <textarea name="description" value={task.description} required id="description" onChange={(e)=>setTask({...task, description: e.target.value})} placeholder='description'></textarea>
                </label>
             
          <Button type='submit'>
            add
          </Button>
          </Form>
      </Box>
    </Container>
  );
};

export  {TaskForm};
