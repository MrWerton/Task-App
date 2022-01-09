import {ListTask} from '../../components/ListTask';
import SubHeader from '../../components/SubHeader';
import { Container } from './styles';

interface Iprops{
  title: string,
  param: string
}
const Home = ({title, param}:Iprops) => {
  return (
    <Container>
      <SubHeader title={title}/>
      <ListTask param={param}/>
    </Container>
  );
};


export {Home};