import { Container, Nav, Logo } from './styles';
import {Link} from 'react-router-dom' 
import LogoIcon from '../../assets/images/Logo.svg'


const Header = () => {
  return (
    <Container>
          <Logo>
              <img src={LogoIcon} alt="Icon Logo"/>
              <h1>Task</h1>
          </Logo>
          <Nav>
              <Link to='/'>All taks</Link>
              <Link to='/task/todo'>To do</Link>
              <Link to='/task/done'>Done</Link>
            
          </Nav>
    </Container>
  );
};

export {Header};
