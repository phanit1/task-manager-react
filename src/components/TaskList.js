import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/taskSlice";

const TaskList = () => {
    const tasks = useSelector((state) => {
        if (state.tasks.filter === "Completed") {
            return state.tasks.tasks.filter((task) => task.completed);
        } else if (state.tasks.filter === "Pending") {
            return state.tasks.tasks.filter((task) => !task.completed);
        }
        return state.tasks.tasks;
    });

    const dispatch = useDispatch();

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id}>
                    <span
                        onClick={() => dispatch(toggleTask(task.id))}
                        style={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                        {task.name}
                    </span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
