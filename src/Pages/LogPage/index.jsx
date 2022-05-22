import {useEffect, useState } from 'react'
import s from './LogPage.module.css'
import { NavLink, useNavigate } from "react-router-dom"
import { userAPI }  from '../../api'


export const LogPage = () => {
    const nav = useNavigate()
    const hash = localStorage.getItem("userHash")

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const [user, setUser] = useState({})

    useEffect(()=> {
        if(hash){
            nav('../profile')
        }
    },[])

    useEffect(()=> {
        if(username.length>2&&pass.length>2){
            const fetchData = async () => {
                try {
                    const data = await userAPI.log(user)
                    const hash = data[0].lightHash
                    if(hash.length!==0){
                        localStorage.setItem("userHash", hash)
                        nav('../tasks')
                        window.location.reload()
                    } else {
                        setErr('Неверные данные!')
                    }
                } catch (e) {
                    console.log(e)
                }
                
            }
            fetchData()
        }
    },[user])

    const userHandler = () => {
        if(username.length<3&&pass.length<3){
            setErr('You need to use 3 or more symbols for username and pass!')
        } else {
            setErr('')
            setUser({
                username: username,
                password: pass
            })
        }
    }


    return (
        <div>
            <p className={s.link}>Already have an account?
                <NavLink
                    to="../log">
                    Log in
                </NavLink>
            </p>
                <form>
                    <input 
                        type="text" 
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                        placeholder="username"
                    />
                    <input 
                        type="password" 
                        value={pass}
                        required
                        onChange={e => setPass(e.target.value)}
                        placeholder="password"
                    />
                </form>
                <button onClick={userHandler} className={s.btn}>Log in</button>
                <p>{err}</p>
        </div>
    )
}