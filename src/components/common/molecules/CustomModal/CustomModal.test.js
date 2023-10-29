import React from "react";
import CustomModal from "./CustomModal";
import { render, cleanup, waitFor } from "@testing-library/react";

afterEach(cleanup);

let component;

beforeEach(() => {
    component = (props) => (
        <React.Suspense fallback="loading">
            <CustomModal {...props} />
        </React.Suspense>
    );
});

test("should render properly", async () => {
    const { getByText } = render(
        component({
            isOpen: true,
            onClose: jest.fn(),
            content: {
                title: "My test modal title",
                images: [],
            },
        })
    );

    const lazyElement = await waitFor(() => getByText(/My test modal title/i));

    expect(lazyElement).toBeInTheDocument();
});

test("should render site button if the project has a site", async () => {
    const { queryByTestId } = render(
        component({
            isOpen: true,
            onClose: jest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                site: "google.com",
            },
        })
    );

    const siteButtonElement = queryByTestId("site-button");

    expect(siteButtonElement).not.toBeNull();
});

test("should not render site button if the project has no site", async () => {
    const { queryByTestId } = render(
        component({
            isOpen: true,
            onClose: jest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                site: false,
            },
        })
    );

    const siteButtonElement = queryByTestId("site-button");

    expect(siteButtonElement).toBeNull();
});

test("should render source button if the project has a source", async () => {
    const { queryByTestId } = render(
        component({
            isOpen: true,
            onClose: jest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                source: "google.com",
            },
        })
    );

    const sourceButtonElement = queryByTestId("source-button");

    expect(sourceButtonElement).not.toBeNull();
});

test("should not render source button if the project has no source", async () => {
    const { queryByTestId } = render(
        component({
            isOpen: true,
            onClose: jest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                source: false,
            },
        })
    );

    const sourceButtonElement = queryByTestId("source-button");

    expect(sourceButtonElement).toBeNull();
});
