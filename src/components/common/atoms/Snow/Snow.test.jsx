import React from "react";
import ReactDOM from "react-dom";
import Snow from "./Snow";
import { render, cleanup, waitFor } from "@testing-library/react";
import { afterEach, test } from "vitest";

afterEach(cleanup);

test("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Snow />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test("it should render multiple snow particles", async () => {
    const { getAllByTestId } = render(<Snow />);

    const snowParticleElement = await waitFor(() => getAllByTestId("snow-particle"));
    
    expect(snowParticleElement.length).toBe(200);
});
