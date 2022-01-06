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
const Test = [
  {
    _id: "1",
    title: "Test One",
    description: "test One description lorem ipson bla bla bla",
    state: false
  },
  {
    _id: "2",
    title: "Test two",
    description: "test two description lorem ipson bla bla bla",
    state: false
  },
  {
    _id: "5",
    title: "Test three",
    description: "test three description lorem ipson bla bla bla",
    state: true
  },
  {
    _id: "3",
    title: "Test One",
    description: "test One description lorem ipson bla bla bla",
    state: false
  },
  {
    _id: "4",
    title: "Test two",
    description: "test two description lorem ipson bla bla bla",
    state: true
  },
 

]

interface IParams{
  param: string;
}


const ListTask = ({param}:IParams) => {
  const [tasks, setTask] = useState<Itask[]>([]);

  useEffect(() => {
    showAllTask()
  }, []) 
  async function showAllTask(){
      const {data} = await api.get('task'+ param);
      setTask(data)
  }
  function changeState(){
    console.log("value")
    return false;
  }
  return (
    <Container>
       {
         Test.map(task=>( 
           <TaskCard changeState={()=>changeState()} key={task._id} description={task.description} title={task.title} state={task.state}/>
         ))
       }
    </Container>
  );
}

export {ListTask};
