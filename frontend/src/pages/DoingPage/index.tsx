import { ListTask } from '../../components/ListTask';
import { Container } from './styles';

const DoingPage = () => {
  const x = 'todo'
  return (
    <Container>
      <h1>Doing</h1>
      <ListTask param='doing'/>
    </Container>
  );
};

export {DoingPage};
