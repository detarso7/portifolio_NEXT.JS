import styles from './NavLink.module.scss'
import { Link } from 'next/link'

const NavLink = ({text}) => {
    return(
             // eslint-disable-next-line @next/next/no-html-link-for-pages
            <li className={styles.item}>
                <Link className='h6'>{text}</Link>
            </li>
    )
}

export default NavLink