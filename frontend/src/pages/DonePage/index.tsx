import { ListTask } from '../../components/ListTask';
import SubHeader from '../../components/SubHeader';
import { Container } from '../PagesStyle';

const DonePage = () => {
 
  return (
    <Container>
      <SubHeader title='Done'/>
      <ListTask param='done'/>
    </Container>
  );
};

export {DonePage};
