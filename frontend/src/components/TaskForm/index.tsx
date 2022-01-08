import { FormEvent, useState,  } from 'react';
import { useModal } from '../../context/Modais';
import { Container, IconClose, Button, Form, Box } from './styles';


interface Itask{
  title: string,
  description: string,
}
const TaskForm = () => {

  const {toggleMenu,onSubmit, handleEdit ,handleTitle, title, description, handleDescription} = useModal()

  return (
    <Container>
      <Box>
          <IconClose onClick={toggleMenu}/>
          <Form onSubmit={onSubmit}>
                <label>
                  <h3>Title</h3>
                  <input type="text" value={title} maxLength={50} required onChange={handleTitle} placeholder='title' />
                </label>
                <label>
                  <p>Description</p>
                  <textarea name="description" maxLength={200} value={description} required id="description" onChange={handleDescription} placeholder='description'></textarea>
                </label>
             <Button type='submit'>
            Add
          </Button>
           
         
          </Form>
      </Box>
    </Container>
  );
};

export  {TaskForm};
