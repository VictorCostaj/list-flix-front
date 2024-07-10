import styles from '../styles/registerLogin.module.scss';
import Head from 'next/head';
import HeaderGeneric from '@/src/components/common/headerGeneric';

const Register = function () {
    return (
        <>
            <Head>
                <title>Flexlist - Registro</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <main>
                    <HeaderGeneric  logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
                </main>
            </Head>
        </>
    );
}
export default Register