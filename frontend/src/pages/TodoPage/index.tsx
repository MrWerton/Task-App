import { ListTask } from '../../components/ListTask';
import { Container } from './styles';

const TodoPage = () => {
  return (
    <Container>
      <h1>Todo</h1>
      <ListTask param='todo'/>
    </Container>
  );
};

export {TodoPage};
