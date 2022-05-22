import { useLocation } from 'react-router-dom'
import s from './BreadCrumbs.module.css' 

export const BreadCrumbs = () => {
    let location = useLocation().pathname.slice(1)

    return (
        <div className={s.wrapper}>
            <h3>Path / {location}</h3>
        </div>
    )
}