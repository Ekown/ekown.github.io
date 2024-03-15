import React from "react";
import ProjectCard from "./ProjectCard";
import { render, cleanup, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, test } from "vitest";
import { ProjectCardProps } from "../../../../core/interfaces/props";

afterEach(cleanup);

let component: () => JSX.Element;

beforeEach(() => {
    component = () => {
        const props: ProjectCardProps = {
            project: {
                name: "The Wastelander",
                photos: ["sdsd"],
                stack: ["C#", "Unity Engine"],
                description: "This is a test project",
                type: "",
                site: "",
                source: "",
            }
        };

        return (
            <React.Suspense fallback="loading">
                <ProjectCard {...props} />
            </React.Suspense>
        );
    };
});

test("should render the project card", async () => {
    const { getByTestId } = render(component());

    const projectCard = await waitFor(() => getByTestId("project-card"));

    expect(projectCard).toBeInTheDocument();
});

test("should render the project card's name", async () => {
    const { getByTestId } = render(component());

    const projectCardName = getByTestId("project-card-name");

    expect(projectCardName).toBeInTheDocument();
    expect(projectCardName).toHaveTextContent("The Wastelander");
});

test("should render the project card's stack", async () => {
    const { getByTestId } = render(component());

    const projectCardStack = getByTestId("project-card-stack");

    expect(projectCardStack).toBeInTheDocument();
    expect(projectCardStack).toHaveTextContent("C# / Unity Engine");
});

test("should render the project card's see more button", async () => {
    const { getByText } = render(component());

    const projectCardSeeMoreButton = getByText("SEE MORE");

    expect(projectCardSeeMoreButton).toBeInTheDocument();
});