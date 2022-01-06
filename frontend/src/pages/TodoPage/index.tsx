import { ListTask } from '../../components/ListTask';
import { Container } from '../PagesStyle';

const TodoPage = () => {
  return (
    <Container>
      <h1>Todo</h1>
      <ListTask param='todo'/>
    </Container>
  );
};

export {TodoPage};
