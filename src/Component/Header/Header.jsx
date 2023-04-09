import styles from './Header.module.scss'
import {RiLinkedinFill, RiWhatsappFill} from 'react-icons/ri'
import {AiFillInstagram, AiOutlineArrowDown} from 'react-icons/ai'

const Header = () => {
    return (
    <header className={styles['header-wrapper']}>
        <div className={styles.header}>
            <div className={styles.image}>IMAGEM</div>
            <div className={styles.content}>
                <span>Olá, meu nome é Saulo de Tarso. Sou um...</span>
                <h1>Desenvolvedor Frontend</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique illo deleniti ea totam! Magni sequi est at commodi.
                </p>
            </div>
            <div className={styles.social}>
                <a href="#" className={styles.icon}><RiLinkedinFill/></a>
                <a href="#" className={styles.icon}><RiWhatsappFill/></a>
                <a href="#" className={styles.icon}><AiFillInstagram/></a>              
            </div>
            <a href="#" className={styles.arrow}>
                <AiOutlineArrowDown className={styles.icon}/>
            </a>
        </div>
    </header>)
}

export default Header