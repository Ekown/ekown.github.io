import React from "react";
import Skills from "./Skills";
import { render, cleanup, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, test } from "vitest";

afterEach(cleanup);

let component: JSX.Element;

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
