import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoLists = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const savedTask = JSON.parse(localStorage.getItem('taskList'));
        if (savedTask && savedTask.length > 0) {
            setTaskList(savedTask);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    const toggle = () => setModal(!modal);

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };
    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };
    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button
                    className="btn btn-primary mt-2"
                    onClick={() => setModal(true)}
                >
                    Create Task
                </button>
            </div>
            <div className="task-container">
                {taskList.map((task, index) => (
                    <Card
                        taskObj={task}
                        index={index}
                        deleteTask={deleteTask}
                        updateListArray={updateListArray}
                    />
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoLists;
