import styles from "../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/sildeComponent";

const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

    if (error) return error;

    return(
        <>
        <p className={styles.titleCategory}>EM DESTAQUE</p>
        <SlideComponent course={data?.data} />
        </>
    )
}



export default FeaturedCategory;