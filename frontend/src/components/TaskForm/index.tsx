import { Container, IconClose, Button, Form, Box } from './styles';
interface IcloseForm{
  closeForm(): void
}
const TaskForm = ({closeForm}:IcloseForm) => {
  return (
    <Container>
      <Box>
          <IconClose onClick={closeForm}/>
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
          <Button >
            add
          </Button>
      </Box>
    </Container>
  );
};

export  {TaskForm};
