import Image from 'next/image'
import styles from './NavLink.module.scss'

const NavLink = ({text}) => {
    return(
            <li className={styles.item}>
                <a href="#" className='h6'>{text}</a>
            </li>
    )
}

export default NavLink