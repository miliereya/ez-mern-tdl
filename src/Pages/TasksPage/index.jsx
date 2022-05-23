import { useEffect, useState } from 'react'
import { tasksAPI, userAPI } from '../../api'
import s from './TasksPage.module.css'
import { NavLink } from "react-router-dom"

export const TasksPage = () => {
    const [task, setTask] = useState({})
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [err, setErr] = useState('')
    const [username, setUserName] = useState('')
    const [tasks, setTasks] = useState([])
    const [deleteTask, setDeleteTask] = useState('')

    useEffect(() => {
        if(taskName!==''&&description!==''&&date!==setDate){
            const fetchData = async () => {
                try {
                    const data = await tasksAPI.createTask(task)
                    console.log(data)
                } catch (e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[task])

    useEffect(() => {
        if(deleteTask!==''){
            const fetchData = async () => {
                try {
                    await tasksAPI.deleteTask(deleteTask)
                    setDeleteTask('')
                } catch (e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[deleteTask])

    useEffect(() => {
        const hash = localStorage.getItem("userHash")
        if(hash!==''){
            const fetchData = async () => {
                try {
                    const data = await userAPI.logByHash(hash)
                    if(data[0]) {
                        setUserName(data[0].username)
                    }
                } catch(e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[])

    useEffect(() => {
        if(username!==''){
            const fetchData = async () => {
                try {
                    const data = await tasksAPI.getTasks(username)
                    setTasks(data)
                } catch(e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[username, deleteTask])

    const createTaskHandler = () => {
        if(taskName!==''&&description!==''&&date!==setDate){
            setTask({
                username: username,
                task: taskName,
                description: description, 
                date: date
            })
            console.log(task)
            setErr('')
        } else {
            setErr('All fields required!')
        }
    }

    useEffect(() => {
        if(username!==''){
            const fetchData = async () => {
                try {
                    const data = await tasksAPI.getTasks(username)
                    setTasks(data)
                } catch(e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[username])

    useEffect(() => {
        if(username!==''){
            const fetchData = async () => {
                try {
                    const data = await tasksAPI.getTasks(username)
                    setTasks(data)
                } catch(e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[username])

        return (
            <div>
                {username === '' ? (
                    <div>
                        <h3>Sing up / in first</h3>
                        <NavLink 
                            to="../sign">
                                press here
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <h2>Create some tasks here!</h2>
                        <form className={s.form}>
                            <input 
                                className={s.input}
                                type="text" 
                                value={taskName}
                                required
                                onChange={e => setTaskName(e.target.value)}
                                placeholder="Task name"
                            />
                            <input 
                                className={s.input}
                                type="text" 
                                value={date}
                                required
                                onChange={e => setDate(e.target.value)}
                                placeholder="Date"
                            />
                            <textarea
                                className={s.textarea}
                                type="password" 
                                value={description}
                                required
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Description"
                            />
                            <button onClick={createTaskHandler} className={s.btn}>Create Task</button>
                        </form>
                        <p className={s.errMsg}>{err}</p>
                        <h2 className={s.taskTable}>Task-table</h2>
                        <div className={s.taskContainer}>
                            {tasks.map(task_=>{
                                let {task,  description, date, _id} = task_

                                return (
                                    <div className={s.task} key={_id}>
                                        <p className={s.task_field}>{task}</p>
                                        <p className={s.description_field}>{description}</p>
                                        <p className={s.date_field}>Date: {date}</p>
                                        <button onClick={()=> setDeleteTask(_id)} className={s.btn_del}>Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        )
}