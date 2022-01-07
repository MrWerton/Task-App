import { useState } from 'react';
import { ListTask } from '../../components/ListTask';
import { TaskForm } from '../../components/TaskForm';
import { Container, Header } from '../PagesStyle';

const DonePage = () => {
  const [modalForm, setModalForm] = useState(false)
  function showForm(){
    setModalForm(!modalForm)
  }
  return (
    <Container>
    <Header>
          <h1>Done</h1>
          <button onClick={()=>showForm()}>Add</button>
      </Header>
      {modalForm&&
        <TaskForm closeForm={()=>showForm()}/>
          
      }
      <ListTask param='done'/>
    </Container>
  );
};

export {DonePage};
