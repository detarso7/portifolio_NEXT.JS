import Box from '../UI/Box'
import styles from './footer.module.scss'

const Footer = () => {
    return(
       <footer className={styles['footer-wrapper']}>
        <div className={styles.footer}>
            <div className={styles.box}>
                <Box text="contato"/>
            </div>
            <h2>Entre em contato</h2>
            <form>
                <div className="field">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className="field">
                    <label htmlFor="text">Mensagem</label>
                    <textarea id="name" name="name" rows={10}/>
                </div>
                <button className={"btn btn-primary"}>Enviar</button>
            </form>
            <span className={styles.copy}>Todos os direitos reservados</span>
        </div>
       </footer>
    )
}

export default Footer