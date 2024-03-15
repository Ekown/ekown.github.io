import styles from "./CustomModal.module.scss";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import CustomCarousel from "../../atoms/CustomCarousel/CustomCarousel";
import { CustomModalProps } from "../../../../core/interfaces/props";

const CustomModal = (props: CustomModalProps) => {
    const { isOpen, onClose, content } = props;

    return (
        <>
            <Modal dialogClassName={styles.CustomModal} show={isOpen} onHide={onClose} centered>
                <CustomCarousel images={content.images} />
                <Modal.Header closeButton>
                    <div>
                        <Modal.Title>{content.title}</Modal.Title>
                        <div className="tag">{content.subtitle}</div>
                    </div>
                </Modal.Header>
                <Modal.Body>{content.body}</Modal.Body>
                <Modal.Footer>
                    {!!content.site ? (
                        <Button
                            variant="primary"
                            href={content.site}
                            target="_blank"
                            data-testid="site-button"
                        >
                            View Site
                        </Button>
                    ) : null}
                    {!!content.source ? (
                        <Button
                            variant="primary"
                            href={content.source}
                            target="_blank"
                            data-testid="source-button"
                        >
                            View Source
                        </Button>
                    ) : null}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CustomModal;
