import React from "react";
import Projects from "./Projects";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { afterEach, beforeEach, test } from "vitest";

afterEach(cleanup);

let component: JSX.Element;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <Projects />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^Projects$/i));

    expect(lazyElement).toBeInTheDocument();
});

test("should add active class to title when the component is in view", async () => {
    const { getByText } = render(component);

    mockAllIsIntersecting(true);

    const lazyElement = await waitFor(() => getByText(/^Projects$/i));

    expect(lazyElement.closest("div.underline")).toBeInTheDocument();
    expect(lazyElement.closest("div.underline")?.classList.contains("underline-active")).toBe(true);
});

test("should change title", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^Projects$/i));

    mockAllIsIntersecting(true);

    expect(lazyElement).toBeInTheDocument();
    expect(document.title).toBe("Eron Tancioco | Projects");
});

test("handles filter click", async () => {
    const { getAllByTestId, getByRole } = render(component);

    mockAllIsIntersecting(true);

    const reactFilterButton = await waitFor(() =>
        getByRole("button", {
            name: /^React$/i,
        })
    );

    expect(reactFilterButton).toBeInTheDocument();

    // Simulate a filter click
    fireEvent.click(reactFilterButton);

    const shownProjectCards = await waitFor(() => getAllByTestId("project-card-stack"));

    expect(shownProjectCards.length).toBeGreaterThan(0);

    // Check if all projectCardElements have the text "React"
    shownProjectCards.forEach((projectCard) => {
        expect(projectCard).toHaveTextContent("React");
    });
});
