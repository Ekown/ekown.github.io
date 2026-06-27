import { ModalContent } from "./modal-content.interface";
import { Project } from "./projects.interface";

export interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: ModalContent;
}

export interface ProjectCardProps {
    project: Project;
}

export interface ProjectFiltersProps {
    handleFilterClick: () => void;
    setShownProjects: (newProjectsArray: Project[]) => void;
}