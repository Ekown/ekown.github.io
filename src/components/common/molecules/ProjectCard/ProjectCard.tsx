import { useState } from "react";
import styles from "./ProjectCard.module.scss";
import CustomModal from "../CustomModal/CustomModal";
import { ModalContent } from "../../../../core/interfaces/modal-content";
import { ProjectCardProps } from "../../../../core/interfaces/props";

const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const modalContent: ModalContent = {
        title: project.name,
        subtitle: project.type,
        body: project.description,
        images: project.photos,
        site: project.site,
        source: project.source,
    };

    return (
        <div
            className={styles.projectcard + " col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4"}
            data-testid="project-card"
        >
            <div>
                <div
                    className="project-img"
                    style={{
                        background: `url(${project.photos[0]}) center center/cover`,
                    }}
                ></div>
                <div className="card-text overlay">
                    <div>
                        <strong data-testid="project-card-name">{project.name}</strong>
                    </div>
                    <span data-testid="project-card-stack">{project.stack.join(" / ")}</span>
                </div>
                <div className="card-button overlay" onClick={openModal}>
                    SEE MORE
                </div>
            </div>
            <CustomModal isOpen={isOpen} onClose={closeModal} content={modalContent} />
        </div>
    );
};

export default ProjectCard;
