import React, { useState } from 'react';

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const assignTask = (task) => {
        setTasks([...tasks, task]);
    };

    const monitorProgress = (taskId, status) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, status} : task));
    };

    const handleTaskInput = (event) => {
        setNewTask(event.target.value);
    };

    const handleTaskSubmit = (event) => {
        event.preventDefault();
        assignTask({id: tasks.length + 1, name: newTask, status: 'Assigned'});
        setNewTask('');
    };

    return (
        <div id="taskManagement">
            <form onSubmit={handleTaskSubmit}>
                <input type="text" value={newTask} onChange={handleTaskInput} placeholder="New Task" required />
                <button type="submit">Assign Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.name}</span>
                        <span>{task.status}</span>
                        <button onClick={() => monitorProgress(task.id, 'In Progress')}>Start Task</button>
                        <button onClick={() => monitorProgress(task.id, 'Completed')}>Complete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManagement;