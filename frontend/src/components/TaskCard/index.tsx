import { Container, Wrapper, Title,
  Description, Content, Header,Option, CheckBox, IconMore 
} from './styles';
import {ImCheckboxUnchecked} from 'react-icons/im'
import {ImCheckboxChecked} from 'react-icons/im'
import { BoxOption } from '../BoxOption';
import { useState } from 'react';

interface Itask{
  _id: string,
  title: string,
  description: string,
  state: boolean,
  changeState(): void;
}
const TaskCard = ({description,_id, state, title, changeState}:Itask) => {
  const [miniModal, setMiniModal] = useState(false)
  
  return (
    <Container>
      <Header >
         <Wrapper>
           <CheckBox onClick={changeState}>
           {state?<ImCheckboxChecked className='checked'/>: <ImCheckboxUnchecked className='unCheked'/>}
           </CheckBox>
           <Title done={state}>{title}</Title>
           </Wrapper>
         <Option>
           <IconMore onClick={()=> setMiniModal(!miniModal)}/>
           {miniModal&&
             <BoxOption id={_id} title={title} description={description} params={_id}/>
           }
         </Option>
      </Header>
      <Content>
          <Description>{description}</Description>
      </Content>
     
    </Container>
  );
};

export default TaskCard;
