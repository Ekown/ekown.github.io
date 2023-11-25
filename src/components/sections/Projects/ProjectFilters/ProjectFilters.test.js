import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import ProjectFilters from "./ProjectFilters";

afterEach(cleanup);

let component;

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <ProjectFilters handleFilterClick={jest.fn()} setShownProjects={jest.fn()} />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^All$/i));

    expect(lazyElement).toBeInTheDocument();
});