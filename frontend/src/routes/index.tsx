import {Routes, Route} from "react-router-dom";
import { DonePage } from "../pages/DonePage";
import { AllPage } from "../pages/AllPage";
import { TodoPage } from "../pages/TodoPage";
function RoutesApp() {
    return (
          <Routes>
            <Route path='/' element={ <AllPage/>}/>
            <Route path='/task/done' element={ <DonePage/>}/>
            <Route path='/task/todo' element={ <TodoPage/>}/>
          </Routes>
    )
}

export {RoutesApp}
