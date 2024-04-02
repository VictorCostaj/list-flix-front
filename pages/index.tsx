import Head from "next/head";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import styles from "@/styles/HomeNoAuth.module.scss"
import CardSections from "@/src/components/homeNoAuth/cardSections";

const HomeNoAuth = function () {
    return (
        <>
            <Head>
                <title>FlixList</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="Victorflix" key="title" />
                <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
            </Head>
            <main>
                <div className={styles.sectionBackground}>
                    <HeaderNoAuth />
                    <PresentationSection />
                </div>
                <CardSections />
            </main>
        </>
    );
};

export default HomeNoAuth;