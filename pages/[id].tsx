/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../styles/coursePage.module.scss";
import Head from "next/head";
import { HeaderAuth } from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "../src/services/courseService";
import { Button, Container } from "reactstrap";
import EpisodeList from "../src/components/episodeList";
import Footer from "../src/components/common/footer";
import watchEpisodeService from "../src/services/episodeService";
import PageSpinner from "../src/components/common/spinner";



const CoursePage = function () {
    const router = useRouter();
    const { id } = router.query;
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [course, setCourse] = useState<CourseType>();
    const [getEpisodeTime, setGetEpisodeTime] = useState(0);
    const [episodeTime, setEpisodeTime] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem("flixlist-token")) {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <PageSpinner />;
    }

    const getCourse = async function () {
        if (typeof id !== "string") return;

        const res = await courseService.getEpisodes(id);

        if (res.status === 200) {
            setCourse(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited)
        }
    };

    const handleGetEpisodeTime = async () => {
        const res = await watchEpisodeService.getWatchTime(0);
    };

    const handleLikeCourse = async () => {
        if (typeof id !== "string") return;
        if (liked === true) {
            await courseService.removeLike(id);
            setLiked(false);
        } else {
            await courseService.like(id);
            setLiked(true);
        }
    };

    const handleFavCourse = async () => {
        if (typeof id !== "string") return;
        if (favorited === true) {
            await courseService.removeFav(id);
            setFavorited(false);
        } else {
            await courseService.addToFav(id);
            setFavorited(true);
        }
    };

    useEffect(() => {
        getCourse();
    }, [id]);

    return (
        <>
            <Head>
                <title>FlixList - {course?.name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
	                    url(${process.env.NEXT_PUBLIC_BASEURL}/uploads/${course?.thumbnailUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "450px",
                    }}
                >
                    <HeaderAuth />
                    console.log(backgroundImageUrl); // Aqui você pode ver a URL gerada

                </div>

                <Container className={styles.courseInfo}>
                    <p className={styles.courseTitle}>{course?.name}</p>
                    <p className={styles.courseDescription}>{course?.synopsis}</p>
                    <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false} >
                        ASSISTIR AGORA!
                        <img
                            src="/buttonPlay.svg"
                            alt="buttonImg"
                            className={styles.buttonImg}
                        />
                    </Button>

                    <div className={styles.interactions}>
                        {liked === false ? (
                            <img
                                src="/course/iconLike.svg"
                                alt="likeImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                        ) : (
                            <img
                                src="/course/iconLiked.svg"
                                alt="likedImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                        )}
                        {favorited === false ? (
                            <img
                                onClick={handleFavCourse}
                                src="/course/iconAddFav.svg"
                                alt="addFav"
                                className={styles.interactionImages}
                            />
                        ) : (
                            <img
                                onClick={handleFavCourse}
                                src="/course/iconFavorited.svg"
                                alt="favorited"
                                className={styles.interactionImages}
                            />
                        )}
                    </div>
                </Container>

                <Container className={styles.episodeInfo}>
                    <p className={styles.episodeDivision}>EPISÓDIOS</p>
                    <p className={styles.episodeLength}>
                        {course?.episodes && course?.episodes.length} episódios
                    </p>
                    {course?.episodes?.length === 0 ? (
                        <p>
                            <strong>Não temos episódios ainda, volte outra hora! &#x1F606;&#x1F918;</strong>
                        </p>
                    ) : (
                        course?.episodes?.map((episode) => (
                            <EpisodeList key={episode.id} episode={episode} />
                        ))
                    )}
                </Container>
                <Footer />
            </main>
        </>
    );
};

export default CoursePage;