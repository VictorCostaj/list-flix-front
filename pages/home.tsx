import { HeaderAuth } from "../src/components/common/headerAuth";
import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>FlixList - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
            </main>
        </>
    );
};
export default HomeAuth;