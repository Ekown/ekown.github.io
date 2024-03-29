import React from "react";
import Experience from "./Experience";
import { render, cleanup, waitFor } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { afterEach, beforeEach, test } from "vitest";

afterEach(cleanup);

let component: JSX.Element;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <Experience />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^Experience$/i));

    expect(lazyElement).toBeInTheDocument();
});

test("should add active class to title when the component is in view", async () => {
    const { getByText } = render(component);

    mockAllIsIntersecting(true);

    const lazyElement = await waitFor(() => getByText(/^Experience$/i));

    expect(lazyElement.closest("div.underline")).toBeInTheDocument();
    expect(lazyElement.closest("div.underline")?.classList.contains("underline-active")).toBe(true);
});

test("should change title", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^Experience$/i));

    mockAllIsIntersecting(true);

    expect(lazyElement).toBeInTheDocument();
    expect(document.title).toBe("Eron Tancioco | Experience");
});
