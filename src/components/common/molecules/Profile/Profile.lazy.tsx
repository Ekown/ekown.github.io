import { lazy, Suspense } from "react";

const LazyProfile = lazy(() => import("./Profile"));

const Profile = () => (
    <Suspense fallback={null}>
        <LazyProfile />
    </Suspense>
);

export default Profile;
