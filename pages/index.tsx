import Head from "next/head";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import styles from "@/styles/HomeNoAuth.module.scss"
import CardSections from "@/src/components/homeNoAuth/cardSections";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "@/src/services/courseService";
import { GetStaticProps } from "next/types";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/components/common/footer";
import AOS from 'aos'
import "aos/dist/aos.css"


interface IndexPageProps {
    children?: ReactNode
    course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head>
                <title>FlixList</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="Victorflix" key="title" />
                <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
            </Head>
            <main>
                <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
                    <HeaderNoAuth />
                    <PresentationSection />
                </div>
                <div data-aos="fade-right" data-aos-duration="1200">
                    <CardSections />
                </div>
                <div data-aos="fade-up" data-aos-duration="1350">
                    <SlideSection newestCourses={course} />
                </div>
                <Footer />
            </main>
        </>
    );
};
export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await courseService.getNewestCourses();
        return {
            props: {
                curso: res.data,
            },
            revalidate: 3600 * 24, // Revalidar a cada 24 horas
        };
    } catch (error) {
        console.error("Falha ao buscar os cursos mais recentes:", error);
        return {
            props: {
                curso: [],
            },
            revalidate: 3600 * 24, // Ainda revalidar a cada 24 horas
        };
    }
};



export default HomeNoAuth;