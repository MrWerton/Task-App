import {ListTask} from '../../components/ListTask';
import { Container } from '../PagesStyle';

const HomePage = () => {
  const x = 'todo'
  return (
    <Container>
      <h1>Home</h1>
      <ListTask param=''/>
    </Container>
  );
};

export {HomePage};