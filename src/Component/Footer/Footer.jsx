import useValidation from 'src/Hooks/useValidation'
import Box from '../UI/Box'
import styles from './footer.module.scss'
import InputField from '../UI/InputField'
import { useState } from 'react'
import Spinner from '../UI/Spinner'

const Footer = () => {

    const [isLoad, setIsLoad] = useState(false)

    const {
        value: name,
        isTouched: isNameTouched,
        setValue: setName,
        setIsTouched: setIsNameTouched,
        inputHasError: nameHasError,
      } = useValidation((value) => value !== '');
    
      const {
        value: email,
        isTouched: isEmailTouched,
        setValue: setEmail,
        setIsTouched: setIsEmailTouched,
        inputHasError: emailHasError,
      } = useValidation((value) => value.includes('@') && value.includes('.'));
    
      const {
        value: message,
        isTouched: isMessageTouched,
        setValue: setMessage,
        setIsTouched: setIsMessageTouched,
        inputHasError: messageHasError,
      } = useValidation((value) => value.length >= 30);

      const isFormTouched = isNameTouched && isEmailTouched && isMessageTouched;
      const isFormValid =
        !nameHasError &&
        !emailHasError &&
        !messageHasError &&
        isFormTouched &&
        !isLoad

      const submitForm = async (e) => {
            e.preventDefault();

            setIsLoad(true);
      }

    return(
       <footer className={styles['footer-wrapper']}>
        <div className={styles.footer}>
            <div className={styles.box}>
                <Box text="contato"/>
            </div>
            <h2>Entre em contato</h2>
            <form onSubmit={submitForm}>
                <InputField
                id='name'
                onChange={setName}
                onBlur={setIsNameTouched}
                hasError={nameHasError}
                label={'Qual é o seu nome?'}
                errorMessage='Ops! Falta digitar o nome'
                placeholder='Digite seu nome'
                />
                <InputField
                id='email'
                onChange={setEmail}
                onBlur={setIsEmailTouched}
                hasError={emailHasError}
                label={'Qual o seu e-mail'}
                errorMessage='Ops! Falta digitar o e-mail ou está faltando um "@" ou um "."'
                placeholder='Ex.: email@empresa.com'
                />
                <InputField
                id='message'
                onChange={setMessage}
                onBlur={setIsMessageTouched}
                hasError={messageHasError}
                label={'Digite sua mensagem'}
                isTextArea={true}
                errorMessage='Ops! Falta digitar a mensagem ou inserir no mínimo 30 caracteres'
                placeholder='Digite sua mensagem'
                />
                <button className={"btn btn-primary"} disabled={!isFormValid}>{isLoad ? <Spinner/> : 'Enviar'}</button>
            </form>
            <span className={styles.copy}>Todos os direitos reservados</span>
        </div>
       </footer>
    )
}

export default Footer