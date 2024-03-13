import React from "react";
import Profile from "./Profile";
import { render, cleanup, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, test } from "vitest";

afterEach(cleanup);

let component: JSX.Element;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <Profile />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() =>
        getByText(
            /Hi! My name is Eron and I'm a software engineer with a passion for improving old ideas and creating new exciting stuff./i
        )
    );

    expect(lazyElement).toBeInTheDocument();
});
