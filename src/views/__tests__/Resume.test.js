import React from "react";
import { mount } from "enzyme";
import Resume from "../Resume";

jest.mock("react-markdown", () => "mock-markdown");
jest.mock("components/loading", () => "mock-loading");

describe("The Resume component", () => {
  const wrapper = mount(<Resume />);

  it("renders the loading component when no state is set ", () => {
    wrapper.setState({ resume: null });
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the markdown component when a state is set", () => {
    wrapper.setState({ resume: "# Markdown" });
    expect(wrapper).toMatchSnapshot();
  });
});
