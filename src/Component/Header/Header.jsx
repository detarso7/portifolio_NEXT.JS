import styles from './Header.module.scss'
import {RiLinkedinFill, RiWhatsappFill} from 'react-icons/ri'
import {AiFillInstagram, AiOutlineArrowDown} from 'react-icons/ai'

const Header = ({header}) => {

const {image, name, ocupation, summary} = header

    return (
    <header className={styles['header-wrapper']}>
        <div className={styles.header}>
            <div className={styles.image}>IMAGEM</div>
            <div className={styles.content}>
                <span>Olá, meu nome é {name}. Sou um...</span>
                <h1>{ocupation}</h1>
                <p>{summary}
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