import styles from './Header.module.scss'

import {RiLinkedinFill, RiWhatsappFill} from 'react-icons/ri'
import {AiFillInstagram, AiOutlineArrowDown} from 'react-icons/ai'
import Image from 'next/image'

import useSanityImage from 'src/Hooks/useSanityImage'


const Header = ({header}) => {
console.log(header)
const {image, name, ocupation, summary} = header
const imageUrl = useSanityImage() 

    return (
    <header className={styles['header-wrapper']}>
        <div className={styles.header}>
            <div className={styles.image}>
                <Image src={imageUrl(image).url()} alt='Saulo de Tarso' layout='fill'/>
            </div>
            <div className={styles.content}>
                <span><span className={styles.span}>{name}</span></span>
                <h1>{ocupation}</h1>
                <p>{summary}</p>
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