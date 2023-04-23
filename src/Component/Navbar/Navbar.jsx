import Image from 'next/image'
import styles from './Navbar.module.scss'
import NavLink from './NavLink'

const Navbar = () => {
    return(
        <section className={ styles['navbar-wrapper']}>
            <div className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Image src='/logo.png' layout='fixed' width={42} height={27}/>
                </a>
                <nav>
                    <ul className={styles.list}>
                        <NavLink text='Sobre'/>
                        <NavLink text='Experiências'/>
                        <NavLink text='Projetos'/>
                        <NavLink text='Contato'/>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navbar