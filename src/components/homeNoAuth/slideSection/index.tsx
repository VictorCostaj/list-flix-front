import { CourseType } from "@/src/services/courseService";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/sildeComponent";
import Link from "next/link";
import styles from "./styles.module.scss";


interface props {
    newestCourses: CourseType[];
}

const SlideSection = function ({ newestCourses }: props) {
    return (
        <>
            <Container fluid className="d-flex flex-column align-items-center py-5">
                <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
                <SlideComponent course={newestCourses} />
                <Link href="/register">
                    <Button outline color="light" className={styles.slideSectionBtn}>Se Cadastre para acessar!</Button>
                </Link>
            </Container>
        </>
    )
}

export default SlideSection