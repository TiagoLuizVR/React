import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer>

            <ul id={styles.lista}>
                <li className={styles.itensLista}><FaFacebook /></li>
                <li className={styles.itensLista}><FaInstagram /></li>
                <li className={styles.itensLista}><FaYoutube /></li>
            </ul>

        </footer>
    )
}