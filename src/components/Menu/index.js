import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu(){

  return (
    <header>
      <nav className={styles.navegacao}>
        {/* Usando o link do react router dom é possível alternar a página sem que o navegador seja recarregado. (usa "to" no lugar de "href") SPA(Single Page Aplication) */}
        <MenuLink to={"/"}>
          Inicio
        </MenuLink>
        <MenuLink to={"/sobremim"}>
          Sobre mim
        </MenuLink>
      </nav>
    </header>
  )
}