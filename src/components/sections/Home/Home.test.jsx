import React from "react";
import Home from "./Home";
import { render, cleanup, waitFor } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { afterEach, beforeEach, test } from "vitest";

afterEach(cleanup);

let component;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <Home />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^Eron Tancioco$/i));

    expect(lazyElement).toBeInTheDocument();
});

test("should show the typewriter component", async () => {
    const { container } = render(component);

    expect(container.getElementsByClassName("typewrite").length).toBe(1);
});

test("should show see more button", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^See More$/i));

    expect(lazyElement).toBeInTheDocument();
    expect(lazyElement.getElementsByClassName("fa-arrow-right").length).toBe(1);
});

test("should change title", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^See More$/i));

    mockAllIsIntersecting(true);

    expect(lazyElement).toBeInTheDocument();
    expect(document.title).toBe("Eron Tancioco | Welcome");
});
