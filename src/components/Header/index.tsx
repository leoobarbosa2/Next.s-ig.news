import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig news logo" />
                <nav>
                    <a href="#">
                        <a className={styles.active}>Home</a>
                        <a>Posts</a>
                    </a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}