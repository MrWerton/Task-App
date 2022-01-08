import { TaskForm } from '../TaskForm';
import { Container } from './styles';
import { useModal } from '../../context/Modais';

interface ITitle{
  title: string
}
const SubHeader = ({title}:ITitle) => {
 const {toggleMenu, stateMenu}= useModal()
  return (
    <>
    <Container>
          <h1>{title}</h1>
          <button onClick={toggleMenu}>Add</button>
    </Container>
          {stateMenu&&
            <TaskForm />
          }
  </>
  );
};
export default SubHeader;
