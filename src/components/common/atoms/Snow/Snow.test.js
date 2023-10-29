import React from "react";
import ReactDOM from "react-dom";
import Snow from "./Snow";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Snow />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test("it should render multiple snow particles", async () => {
    const { container } = render(<Snow />);
    expect(container.getElementsByClassName("snow").length).toBe(200);
});
