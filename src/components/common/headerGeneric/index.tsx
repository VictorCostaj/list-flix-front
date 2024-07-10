import Link from "next/link";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";

interface props {
    logoUrl: string;
    btnUrl: string;
    btnContent: string;
}

const HeaderGeneric = function ({ btnContent, btnUrl, logoUrl }: props) {
    return <>
        <div className={styles.header}>
            <Container className={styles.headerContainer}>
                <Link href={logoUrl} >
                    <img src="/logo3.png" alt="LogoRegister" className={styles.headerLogo} />
                </Link>

                <Link href={btnUrl}>
                    <Button outline color="orange" className={styles.headerBtn}>{btnContent}</Button>{/*vai ser dinâmico por pros*/}
                </Link>
            </Container>
        </div>
    </>
};
export default HeaderGeneric