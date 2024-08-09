import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";
import FeaturedSection from "@/src/components/homeAuth/featuresSection";

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>FlixList - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
               <FeaturedSection/>
            </main>
        </>
    );
};
export default HomeAuth;