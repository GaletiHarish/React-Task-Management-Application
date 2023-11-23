import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from './components/tasklist';
import TaskDetails from './components/taskdetails';
import AddTask from './components/addtask';


function Routing(props) {
    return (
        <div>


        <BrowserRouter>
        <Routes>
        <Route path="/" element={<TaskList/>} />
        <Route path="/task/:id" element={<TaskDetails/>} />
        <Route path="/add-task" element={<AddTask/>} />
        
        </Routes>
      </BrowserRouter>

            
        </div>
    );
}

export default Routing;