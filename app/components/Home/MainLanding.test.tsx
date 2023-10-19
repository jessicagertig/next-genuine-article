import { render, screen } from "@/testUtils/testUtilsWithTheme";
import MainLanding from "@/app/components/Home/MainLanding";

test("renders background image and text", () => {
  render(
    <MainLanding windowHeight={100} />
  );

  // Test for background image
  const backgroundImage = screen.getByRole("img");
  expect(backgroundImage).toHaveAttribute(
    "src",
    expect.stringContaining("blueRoseDress1800")
  );

  // Test for header text
  const headerText = screen.getByText("A Digital Collection");
  expect(headerText).toBeInTheDocument();

  // Test for text content
  const textContent = screen.getByText(
    "Genuine articles of clothing from the 19th century"
  );
  expect(textContent).toBeInTheDocument();
});