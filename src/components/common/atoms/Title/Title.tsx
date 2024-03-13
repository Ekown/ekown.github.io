import styles from "./Title.module.scss";

interface TitleProps {
    inView: boolean;
    content: string;
}

const Title = (props: TitleProps) => {
    return (
        <div className={styles.title + " underline " + (props.inView ? " underline-active " : "")}>
            <h2 className="pt-3 mb-5">{props.content}</h2>
        </div>
    );
};

export default Title;
