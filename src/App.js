import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

const App = () => {
    return (
        <div className="app-container">
            <h1>Task Manager</h1>
            <AddTaskForm />
            <Filter />
            <TaskList />
        </div>
    );
};

export default App;
