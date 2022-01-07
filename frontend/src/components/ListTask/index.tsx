import { Container } from './styles';
import { useEffect, useState } from 'react'
import {api} from '../../services'
import TaskCard from '../TaskCard';

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
  const [tasks, setTask] = useState<Itask[]>([]);

  useEffect(() => {
    showAllTask()
  }, []) 
  async function showAllTask(){
      const {data} = await api.get('/task/'+ param);
      setTask(data)
  }
  async function changeState(params: string){
     await api.patch('/task/' + params)
  }
  return (
    <Container>
       {
         tasks.map(task=>( 
           <TaskCard changeState={()=>changeState(task._id)} key={task._id}  description={task.description} title={task.title} state={task.state}/>
         ))
       }
    </Container>
  );
}

export {ListTask};
