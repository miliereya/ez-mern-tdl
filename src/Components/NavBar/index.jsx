import s from './NavBar.module.css'
import { NavLink } from "react-router-dom"

export const NavBar = () => {
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
                    to="sign">
                    Sign In / Up
                </NavLink>
                <NavLink 
                    className={s.link_me}
                    to="me">
                    What do I fill now?
                </NavLink>
            </div>
        </div>
    )
}