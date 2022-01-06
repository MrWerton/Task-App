import { Container, Title,
  Description  } from './styles';

interface Itask{
  title: string,
  description: string,
  state: boolean,
  
}

const TaskCard = ({description, state, title}:Itask) => {
 
  return (
    <Container>
      {state? <p>going</p>: <p>doing</p>}
      <input type="checkbox" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default TaskCard;
