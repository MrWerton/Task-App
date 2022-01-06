import { Container, Wrapper, Title,
  Description, Content, Header,Btn, CheckBox 
} from './styles';
import {ImCheckboxUnchecked} from 'react-icons/im'
import {ImCheckboxChecked} from 'react-icons/im'
import {FiMoreVertical} from 'react-icons/fi'


interface Itask{
  title: string,
  description: string,
  state: boolean,
  
}

const TaskCard = ({description, state, title}:Itask) => {
 
  return (
    <Container>
      <Header>
         <Wrapper>
           <CheckBox>
           {state?<ImCheckboxChecked/>: <ImCheckboxUnchecked/>}
           </CheckBox>
           <Title>{title}</Title>
           </Wrapper>
         <Btn>
           <FiMoreVertical/>
         </Btn>
      </Header>
      <Content>
          <Description>{description}</Description>
      </Content>
     
    </Container>
  );
};

export default TaskCard;
