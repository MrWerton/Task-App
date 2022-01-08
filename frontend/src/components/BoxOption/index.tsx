import { useModal } from '../../context/Modais';
import { api } from '../../services';
import { TaskForm } from '../TaskForm';
import { Container, IconDelete, IconEdit, Arrow } from './styles';

async function removeTask(params: string){
  console.log(params)
  await api.delete('/task/' + params)
}
interface Iparams{
  params: string,
  title: string,
  description: string,
  id: string
}

const BoxOption = ({params,id, description, title}:Iparams) => {
  const {stateMenu, handleEdit} = useModal()
  return (
    <>
      <Container>
          <IconDelete onClick={()=>removeTask(params)}/>
          <IconEdit onClick={()=>handleEdit(id, title,description)}/>
          <Arrow/>
      </Container>
      {stateMenu&&
      <TaskForm/>
      }
    </>
  );
};

export {BoxOption};
