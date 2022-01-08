import { ListTask } from '../../components/ListTask';
import SubHeader from '../../components/SubHeader';
import { Container } from '../PagesStyle';

const TodoPage = () => {

  return (
    <Container>
      <SubHeader title='To-do'/>
      <ListTask param='todo'/>
    </Container>
  );
};

export {TodoPage};
