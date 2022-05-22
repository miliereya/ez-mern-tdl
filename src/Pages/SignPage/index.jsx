import {useEffect, useState } from 'react'
import s from './SignPage.module.css'
import { NavLink, useNavigate } from "react-router-dom"
import { userAPI }  from '../../api'


export const SignPage = () => {
    const nav = useNavigate()
    const hash = localStorage.getItem("userHash")

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [secPass, setSecPass] = useState('')
    const [err, setErr] = useState('')
    const [user, setUser] = useState({})

    useEffect(()=> {
        if(hash){
            nav('../profile')
        }
    },[])
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const data = await userAPI.getUsers(username)
                if(data.length !== 0) {
                    setErr('This username is already taken!')
                } else {
                    const postData = async () => {
                        try {
                            const hash = await userAPI.createUser(user)
                            localStorage.setItem("userHash", hash)
                            nav('../tasks')
                            window.location.reload()
                            
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    postData()
                }
            } catch (e) {
                console.log(e)
            }
            
        }
        fetchData()
    },[user])

    const userHandler = () => {
        if(username.length<3&&pass.length<3){
            setErr('You need to use 3 or more symbols for username and pass!')
        } else if(pass!==secPass){
            setErr('Different passwords')
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
                    <input 
                        type="password" 
                        value={secPass}
                        required
                        onChange={e => setSecPass(e.target.value)}
                        placeholder="repeat password"
                    />
                </form>
                <button onClick={userHandler} className={s.btn}>Create</button>
                <p>{err}</p>
        </div>
    )
}