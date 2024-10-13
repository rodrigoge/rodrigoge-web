import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header_container}>
      <figure className={styles.logo_container}>
        <Link href={'/'} className={styles.logo_content} />
      </figure>
      <nav>
        <ul>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/works'}>Works</Link>
          </li>
          <li>
            <Link href={'/projects'}>Projects</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link href={'/language'}>Language</Link>
          </li>
          <li>
            <Link href={'/Theme'}>Theme</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
