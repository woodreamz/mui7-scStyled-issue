import CustomButton from "../CustomButton.tsx";
import { render, screen } from "@testing-library/react";

describe("MyButton", () => {
  it("should render the MyButton", () => {
    render(<CustomButton>My Button</CustomButton>);
    screen.getByText("My Button");
  });
});
