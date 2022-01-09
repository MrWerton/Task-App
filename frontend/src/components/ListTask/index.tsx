import { Container } from './styles';
import TaskCard from '../TaskCard';
import { useEffect, useState } from 'react';
import { api } from '../../services';


interface Itask{
  title: string,
  description: string,
  state: boolean,
  _id: string,
}

interface IParams{
  param: string;
}


const ListTask = ({param}:IParams) => {
 const [task, setTask] = useState<Itask[]>([])
  useEffect(() => {
      getTask()
    
  }, [task])
async function getTask(){
    const {data} = await api.get(`task/${param}`)
    setTask(data.tasks)
  }
  
  return (
    <Container>
     {
         task.map((task:Itask)=>( 
           <TaskCard 
           _id={task._id} 
          key={task._id}  
          description={task.description} 
          title={task.title} state={task.state}/>
         ))
       } 
    </Container>
  );
}

export {ListTask};
