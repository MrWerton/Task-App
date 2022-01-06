import React from "react";
import {Routes, Route} from "react-router-dom";
import { DoingPage } from "../pages/DoingPage";
import { HomePage } from "../pages/HomePage";
import { TodoPage } from "../pages/TodoPage";
function RoutesApp() {
    return (
          <Routes>
            <Route path='/task' element={ <HomePage/>}/>
            <Route path='/task/doing' element={ <DoingPage/>}/>
            <Route path='/task/todo' element={ <TodoPage/>}/>
          </Routes>
    )
}

export {RoutesApp}
