import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/sildeComponent";

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
        <>
            <p>LANÇAMENTOS</p>
            <SlideComponent course={data.data} />
        </>
    )
};
export default NewestCategory;