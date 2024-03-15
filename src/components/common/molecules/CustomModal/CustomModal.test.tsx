import React from "react";
import CustomModal from "./CustomModal";
import { render, cleanup, waitFor } from "@testing-library/react";
import { vitest, afterEach, beforeEach, test } from "vitest";
import { CustomModalProps } from "../../../../core/interfaces/props";

afterEach(cleanup);

let component: (props: CustomModalProps) => JSX.Element;

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
            onClose: vitest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                subtitle: "",
                body: "",
                site: "",
                source: ""
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
            onClose: vitest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                site: "google.com",
                subtitle: "",
                body: "",
                source: ""
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
            onClose: vitest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                site: "",
                subtitle: "",
                body: "",
                source: ""
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
            onClose: vitest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                source: "google.com",
                subtitle: "",
                body: "",
                site: ""
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
            onClose: vitest.fn(),
            content: {
                title: "My test modal title",
                images: [],
                source: "",
                subtitle: "",
                body: "",
                site: ""
            },
        })
    );

    const sourceButtonElement = queryByTestId("source-button");

    expect(sourceButtonElement).toBeNull();
});
