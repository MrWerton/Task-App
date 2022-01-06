import { Container } from './styles';
import { useEffect, useState } from 'react'
import {api} from '../services'
import TaskCard from '../TaskCard';

interface Itask{
  title: string,
  description: string,
  state: boolean,
  _id: string,
}
const ListTask = () => {
  const [tasks, setTask] = useState<Itask[]>([]);
  useEffect(() => {
    showAllTask()
}, []) 
async function showAllTask(){
    const {data} = await api.get("/task");
    setTask(data)
}
  return (
    <Container>
       {
         tasks.map(task=>(
           
           <TaskCard key={task._id} description={task.description} title={task.title} state={task.state}/>
         ))
       }
    </Container>
  );
}

export default ListTask;
