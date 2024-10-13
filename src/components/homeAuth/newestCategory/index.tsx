import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/sildeComponent";
import styles from "../../../../styles/slideCategory.module.scss";

const NewestCategory = function () {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

    if (error) return error;
    if (!data)
        return (
            <>
                <p>Loading</p>
            </>
        );

    return (
        <div>
            <p className={styles.titleCategory}>Lançamentos</p>
            <SlideComponent course={data.data} />
        </div>
    )
};
export default NewestCategory;