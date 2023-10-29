import React from "react";
import ProjectCard from "./ProjectCard";
import { render, cleanup, waitFor } from "@testing-library/react";

afterEach(cleanup);

let component;

beforeEach(() => {
    component = (props) => (
        <React.Suspense fallback="loading">
            <ProjectCard {...props} />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(
        component({
            name: "The Wastelander",
            photos: ["sdsd"],
            stack: ["C#", "Unity Engine"],
        })
    );

    const lazyElement = await waitFor(() => getByText(/SEE MORE/i));

    expect(lazyElement).toBeInTheDocument();
});
