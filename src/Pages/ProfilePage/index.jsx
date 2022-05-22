import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAPI } from '../../api'
import s from './ProfilePage.module.css'

export const ProfilePage = () => {
    const [user, setUser] = useState({
        username: 'loading...',
        _id: 'loading...'
    }) 

    const nav = useNavigate()
    const hash = localStorage.getItem("userHash")
    
    useEffect(() => {
        if(hash) {
            const fetchData = async () => {
                try {
                    const data = await userAPI.logByHash(hash)
                    setUser(data[0])
                } catch (e) {
                    console.log(e)
                }
            }
            fetchData()
        } else {
            nav('../sign')
        }
    },[])

    const exitHandler = () => {
        localStorage.setItem("userHash", '')
        nav('../sign')
        window.location.reload()
    }

    return (
        <div>
            <p className={s.userInfo}>Username: <span>{user.username}</span></p>
            <p className={s.userInfo}>Id: <span>{user._id}</span></p>
            <button onClick={exitHandler} className={s.btn}>Exit</button>
        </div>
    )
}