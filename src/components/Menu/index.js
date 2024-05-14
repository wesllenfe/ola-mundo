import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu(){
  const localizacao = useLocation();

  return (
    <header>
      <nav className={styles.navegacao}>
        {/* Usando o link do react router dom é possível alternar a página sem que o navegador seja recarregado. (usa "to" no lugar de "href") SPA(Single Page Aplication) */}
        <Link to="/" className={styles.link}>
          Início
        </Link>
        <Link to="/sobremim" className={styles.link}>
          Sobre mim
        </Link>
      </nav>
    </header>
  )
}