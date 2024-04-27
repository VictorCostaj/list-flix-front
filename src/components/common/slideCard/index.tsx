import styles from "/style.module.scss"

const SlideCard = function () {
    return (
        <>
            <div className={styles.slide}>
                <img className={styles.slideImg} />
                <p className={styles.slideTitle}></p>
                <p className={styles.slideDescription}></p>
            </div>
        </>
    );
};

export default SlideCard;