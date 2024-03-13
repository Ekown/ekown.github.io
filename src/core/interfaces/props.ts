import { ModalContent } from "./modal-content";
import { Project } from "./projects";

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