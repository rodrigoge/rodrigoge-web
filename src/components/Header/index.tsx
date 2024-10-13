import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header_container}>
      <Link href={'/'}>Logo</Link>
      <nav>
        <ul>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
