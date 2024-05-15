import BotaoPrincipal from 'components/BotaoPrincipal'
import styles from './NaoEcontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {
  const navegar = useNavigate()

  return (
    <>
      <div className={styles.conteudoContainer}>
      <h1 className={styles.texto404}>404</h1>
      <h1 className={styles.titulo}>Ops! Página não encontrada</h1>

      <p className={styles.paragrafo}>
        Tem certeza de que era isso que você estava procurando?
        Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.
      </p>

      <div 
        className={styles.botaoContainer}
        onClick={() => navegar('/')}
      >
        <BotaoPrincipal tamanho={'lg'}>Voltar</BotaoPrincipal>
      </div>

      <img
        className={styles.imagemCachorro}
        src={erro404}
        alt='Cachorro de óculos e vestido como humano'
      />

    </div>

    <div className={styles.espacoEmBranco}></div>
    </>
    
  )
}