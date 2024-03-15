import { lazy, Suspense } from "react";
import { CustomModalProps } from "../../../../core/interfaces/props";

const LazyCustomModal = lazy(() => import("./CustomModal"));

const CustomModal = (props: CustomModalProps) => (
    <Suspense fallback={null}>
        <LazyCustomModal {...props} />
    </Suspense>
);

export default CustomModal;
