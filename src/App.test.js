import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { mount, configure, shallow, assert } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Bird from "./components/Bird"

configure({ adapter: new Adapter() });
//https://javascriptplayground.com/introduction-to-react-tests-enzyme/
describe('Testing react-table")', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bird />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("One rt-table for birds", () => {
    const wrapper = mount(<Bird />);
    expect(wrapper.find("div").find(".rt-tbody").length == 1).toBe(true);
  });
  it("20 Birds per table", () => {
    const wrapper = mount(<Bird />);
    expect(wrapper.find("div").find(".rt-tr-group").length == 20).toBe(true);
  });
  it("Five columns per table", () => {
    const wrapper = mount(<Bird />);
    expect(wrapper.find("div").find(".rt-td").length / 20 == 5).toBe(true);
  });
  it("First column name is Finnish", () => {
    const wrapper = mount(<Bird />);
    expect(
      wrapper
        .find(".rt-th")
        .first()
        .text() == "Finnish"
    ).toBe(true);
  });

  it("First name of the table is Kyhmyjoutsen", () => {
    const wrapper = mount(<Bird />);
    expect(
      wrapper
        .find("div")
        .find(".rt-td")
        .first()
        .text() === "Kyhmyjoutsen"
    ).toBe(true);
  });
});