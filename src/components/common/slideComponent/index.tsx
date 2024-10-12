import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../slideCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CourseType } from "../../../services/courseService";

interface Props {
    course: CourseType[];
}

const SlideComponent = function ({ course }: Props) {

    return (
        <>
            <div className="d-flex flex-column align-items-center py-4">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        width: 1200,
                        pagination: false,
                        breakpoints: {
                            1200: {
                                perPage: 2,
                                width: 600,
                            },
                            600: {
                                perPage: 1,
                                width: 300,
                            },
                            500: {
                                width: 250,
                            },
                        },
                    }}
                >
                    {Array.isArray(course) && course.map((course) => (
                        <SplideSlide key={course.id}>
                            <SlideCard courseContent={course} course={{
                                id: 0,
                                name: "",
                                thumbnailUrl: "",
                                synopsis: "",
                                episodes: undefined
                            }} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    );
};

export default SlideComponent;
