import { Container } from './styles';
import {Link} from 'react-router-dom' 
import { DoingPage } from '../../pages/DoingPage';
import { TodoPage } from '../../pages/TodoPage';

const Header = () => {
  return (
    <Container>
          <Link to='/task/todo'>Todo</Link>
          <Link to='/task/doing'>Doing</Link>
    </Container>
  );
};

export default Header;
