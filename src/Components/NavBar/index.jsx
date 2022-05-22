import s from './NavBar.module.css'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'
import { userAPI } from '../../api'

export const NavBar = () => {
    const [username, setUsername] = useState('')

    const hash = localStorage.getItem("userHash")
    
    useEffect(() => {
        if(hash) {
            const fetchData = async () => {
                try {
                    const data = await userAPI.logByHash(hash)
                    setUsername(data[0].username)
                    
                } catch (e) {
                    console.log(e)
                }
            }
            fetchData()
        }
    },[])


    return (
        <div className={s.wrapper}>
            <div className={s.navbar}>
                <NavLink 
                    className={s.link}
                    to="tasks">
                    Tasks
                </NavLink>
                <NavLink 
                    className={s.link}
                    to={username!=='' ? "profile" : "sign"}>
                    {username!=='' ? 'Profile: ' + username  : 'Sign Up'}
                </NavLink>
                <NavLink 
                    className={s.link_me}
                    to="me">
                    Juice Wrld
                </NavLink>
            </div>
        </div>
    )
}