import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/sildeComponent";

const FavoriteCategory = function () {
    const { data, error } = useSWR("/newest", courseService.getFavCourses);

    if (error) return error;
    if (!data)
        return (
            <>
                <p>Loading</p>
            </>
        );

    return (
        <>
            <p className={styles.titleCategory}>Minha Lista</p>
            {data.data.courses.length >= 1 ? (
                <SlideComponent course={data.data.courses} />
            ) : (
                <p className="text-center pt-3 h5">
                    <strong>Você não tem nenhum curso na lista</strong></p>
            )}
        </>
    )
}
export default FavoriteCategory



