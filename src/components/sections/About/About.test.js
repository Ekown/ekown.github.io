import React from "react";
import About from "./About";
import { render, cleanup, waitFor } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

afterEach(cleanup);

let component;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <About />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^About$/i));

    expect(lazyElement).toBeInTheDocument();
});

test("should add active class to title when the component is in view", async () => {
    const { getByText } = render(component);

    mockAllIsIntersecting(true);

    const lazyElement = await waitFor(() => getByText(/^About$/i));

    expect(lazyElement.closest("div.underline")).toBeInTheDocument();
    expect(lazyElement.closest("div.underline").classList.contains("underline-active")).toBe(true);
});

test("should change title", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^About$/i));

    mockAllIsIntersecting(true);

    expect(lazyElement).toBeInTheDocument();
    expect(document.title).toBe("Eron Tancioco | About");
});
