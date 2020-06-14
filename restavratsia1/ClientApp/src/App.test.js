import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Footer from "./components/footer";
import request from "./components/Utils/RequestWrapper";
import ProfilePage from "./components/ProfilePage";

it("server interaction by getting orders", async () => {
  const result = await request({
    method: "get",
      url: "ads/get_all/5c76f2b1-7860-4166-8179-4bf6da0ed116c/",
  });
  expect(result.data.value).toBeTruthy();
});

it("correct component rendering", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("userOffice renders as expected", () => {
    let elem = create(<ProfilePage />);
    expect(elem).toMatchSnapshot();
});