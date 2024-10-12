/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Container } from "reactstrap";
import styles from "./styles.module.scss"

const Footer = function () {
    return <>
        <Container className={styles.footer}>
            <img src="/logo2.png" alt="logoFooter" className={styles.footerLogo} />
            <a href="/" target={"blank"} className={styles.footerLink}>Flixlist</a>
        </Container>
    </>;
};

export default Footer

// Nós iremos fazer o footer dentro de um container, onde teremos uma imagem e um link. Nós não iremos usar o link do next, pois nós iremos usar ele apenas para navegação dentro do projeto, para fora do projeto usamos o link normal.