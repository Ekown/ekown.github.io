import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import ProjectFilters from "./ProjectFilters";

afterEach(cleanup);

let component;
const mockHandleFilterClick = jest.fn();
const mockSetShownProjects = jest.fn();

beforeEach(() => {
    component = (
        <React.Suspense fallback="loading">
            <ProjectFilters
                handleFilterClick={mockHandleFilterClick}
                setShownProjects={mockSetShownProjects}
            />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^All$/i));

    expect(lazyElement).toBeInTheDocument();
});

test("should handle filter click", async () => {
    const { getByText } = render(component);

    const lazyElement = await waitFor(() => getByText(/^React$/i));

    // Click on the React filter button
    fireEvent.click(lazyElement);

    expect(mockHandleFilterClick).toHaveBeenCalled();
    expect(mockSetShownProjects).toHaveBeenCalled();
});
