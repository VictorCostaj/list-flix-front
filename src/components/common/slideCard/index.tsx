/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "@/src/components/common/slideCard/styles.module.scss";
import { CourseType } from "@/src/services/courseService";

interface Props {
    course: CourseType;
}

const SlideCard = function ({ course }: Props) {
    const imageUrl = `${process.env.NEXT_PUBLIC_BASEURL}/uploads/thumbnails/${course.thumbnailUrl}`;
console.log("Image URL:", imageUrl);
    return (
        /* Envolvido em um link */
        <>
            <Link className={styles.link} href={`/courses/${course.id}`}>
                <div className={styles.slide}>
                    {/* Correção aqui */}
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASEURL}/uploads/${course.thumbnailUrl}`}
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