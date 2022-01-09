import { useModal } from '../../context/Modais';
import { TaskForm } from '../TaskForm';
import { Container, IconDelete, IconEdit, Arrow } from './styles';


interface Iparams{
  title: string,
  description: string,
  id: string
}

const BoxOption = ({id, description, title}:Iparams) => {
  const {stateMenu,deleteTask, handleEdit} = useModal()
  return (
    <>
      <Container>
          <IconDelete onClick={()=>deleteTask(id)}/>
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
