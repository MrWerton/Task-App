import {Header} from './components/Header';
import { TaskForm } from './components/TaskForm';
import { RoutesApp } from './routes';
import {GlobalStyle} from './style/global'
function App() {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <TaskForm/>
      <RoutesApp/>
    </>
  );
}

export default App;
