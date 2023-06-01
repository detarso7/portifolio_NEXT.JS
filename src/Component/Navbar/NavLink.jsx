import styles from './NavLink.module.scss'
import { Link } from 'next/link'

const NavLink = ({text}) => {
    return(
            <li className={styles.item}>
                <Link className='h6'>{text}</Link>
            </li>
    )
}

export default NavLink