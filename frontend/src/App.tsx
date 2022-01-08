import {Header} from './components/Header';
import { ModalProvider } from './context/Modais';
import { RoutesApp } from './routes';
import {GlobalStyle} from './style/global'
function App() {
 
 
  return (
    
    <>
    <ModalProvider>
    <GlobalStyle/>
        <Header/>
      <RoutesApp/>
    </ModalProvider>
    </>
  );
}

export default App;
