import { Container, IconClose, Button, Form, Box } from './styles';

const TaskForm = () => {
  return (
    <Container>
      <Box>
          <IconClose/>
          <Form>
                <label>
                  <h3>Title</h3>
                  <input type="text" placeholder='title' />
                </label>
                <label>
                  <p>Description</p>
                  <textarea name="description" id="description" placeholder='description'></textarea>
                </label>
             
          </Form>
          <Button>
            add
          </Button>
      </Box>
    </Container>
  );
};

export  {TaskForm};
