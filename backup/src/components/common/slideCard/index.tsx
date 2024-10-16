/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./style.module.scss"
import { CourseType } from "@/src/services/courseService";

interface props {
    course: CourseType;
}

const SlideCard = function ({ course }: props) {
    return (
        /* Envolvido em um link */
        <>
            <Link href={`/courses/${course.id}`}> /
                <div className={styles.slide}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
                        alt={course.name}
                        className={styles.slideImg}
                    />
                    <p className={styles.slideTitle}>{course.name}</p>
                    <p className={styles.slideDescription}>{course.synopsis}</p>
                </div>
            </Link>
        </>
    );
};

export default SlideCard;