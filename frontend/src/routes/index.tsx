import {Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
function RoutesApp() {
    return (
          <Routes>
            <Route path='/' element={ <Home title="All Tasks" param=""/>}/>
            <Route path='/task/done' element={ <Home title="Done" param="done"/>}/>
            <Route path='/task/todo' element={ <Home title="To-do" param="todo"/>}/>
          </Routes>
    )
}

export {RoutesApp}
