import React from "react";
import Skills from "./Skills";
import { render, cleanup, waitFor, getAllByText } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

afterEach(cleanup);

let component;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <Skills />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getAllByText } = render(component);

    const lazyElement = await waitFor(() =>
        getAllByText(/Programming Languages|Libraries & Frameworks|Tools & Platforms|Work Experience/i)
    );

    expect(lazyElement.length).toBeGreaterThanOrEqual(1);
});
