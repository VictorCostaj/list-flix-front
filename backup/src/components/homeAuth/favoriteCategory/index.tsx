import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/sildeComponent";


const FavoritesCourses = function () {
    const { data, error } = useSWR("/newest", courseService.getNewestCourses);

    if (error) return error;
    if (!data) return (
        <>
            <p>Loading</p>
        </>
    )

    {
        data.data.courses?.length >= 1 ? (
            <SlideComponent course={data.data.courses} />
        ) : (
            <p className="h5 text-center pt-3">
                <strong>Você não tem nenhum curso na lista</strong>
            </p>
        )
    }
}

export default FavoritesCourses



