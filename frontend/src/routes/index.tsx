import React from "react";
import {Routes, Route} from "react-router-dom";
import { DoingPage } from "../pages/DoingPage";
import { AllPage } from "../pages/AllPage";
import { TodoPage } from "../pages/TodoPage";
function RoutesApp() {
    return (
          <Routes>
            <Route path='/' element={ <AllPage/>}/>
            <Route path='/task/doing' element={ <DoingPage/>}/>
            <Route path='/task/todo' element={ <TodoPage/>}/>
          </Routes>
    )
}

export {RoutesApp}
