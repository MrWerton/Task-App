import { Container } from './styles';
import {api} from '../../services'
import TaskCard from '../TaskCard';
import { useAxios } from '../../hooks/UseAxios';

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
  
  async function changeState(params: string){
     await api.patch('/task/' + params)
  }
   const {data} = useAxios<Itask[]>(`task/${param}`);
  if(!data){
      return <h1>Carregando...</h1>
  }
  return (
    <Container>
     {
         data.map((task:Itask)=>( 
           <TaskCard 
           _id={task._id}
          changeState={()=>changeState(task._id)} 
          key={task._id}  
          description={task.description} 
          title={task.title} state={task.state}/>
         ))
       }
    </Container>
  );
}

export {ListTask};
