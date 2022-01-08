import {ListTask} from '../../components/ListTask';
import SubHeader from '../../components/SubHeader';
import { Container } from '../PagesStyle';

const AllPage = () => {
  return (
    <Container>
      <SubHeader title='All tasks'/>
      <ListTask param=''/>
    </Container>
  );
};


export {AllPage};