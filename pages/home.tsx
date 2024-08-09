import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";
import FeaturedSection from "@/src/components/homeAuth/featuresSection";
import NewestCategory from "@/src/components/homeAuth/newestCategory";

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>FlixList - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
               <FeaturedSection/>
               <NewestCategory/>
            </main>
        </>
    );
};
export default HomeAuth;