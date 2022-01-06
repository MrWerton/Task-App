import {Header} from './components/Header';
import { RoutesApp } from './routes';
import {GlobalStyle} from './style/global'
function App() {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <RoutesApp/>
    </>
  );
}

export default App;
