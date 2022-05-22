import {useState } from 'react'
import s from './LogPage.module.css'
import { NavLink } from "react-router-dom"
import { userAPI }  from '../../api/'


export const SignPage = () => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [secPass, setSecPass] = useState('')
    const [err, setErr] = useState('')


    const userHandler = () => {
        if(username.length<3&&pass.length<3){
            console.log(username)
            setErr('You need to use 3 or more symbols for username and pass!')
        } else if(pass!==secPass){
            setErr('Different passwords')
        } else {
            setErr('')
            const fetchData = async () => {
                try {
                    const data = await userAPI.getUsers(username)
                    if(data.length !== 0) {
                        setErr('This username is already taken!')
                    } else {
                        const postData = async () => {
                            try {
                                await userAPI.createUser({
                                    username: username,
                                    password: pass
                                })
                                setErr('Success!')
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