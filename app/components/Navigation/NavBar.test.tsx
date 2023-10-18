import { render, screen } from "@/testUtils/testUtilsWithTheme";
import NavBar from "@/app/components/Navigation/NavBar";

test("NavBar has correct styles", () => {
  render(<NavBar backgroundColor="white" shadow={true} />);
  const navBar = screen.getByTestId("navbar-container");

  expect(navBar).toHaveStyle("background: white");
  expect(navBar).toHaveStyle("box-shadow: 0 0px 15px rgba(211, 217, 229, 0.7)");
});

test("displays the small logo by default due to mobile first styles", () => {
  render(<NavBar />);
  
  const smallLogo = screen.getByAltText("bonnet logo");
  expect(smallLogo).toBeInTheDocument();
  const smallLogoContainer = screen.getByTestId("small-logo-container");
  expect(smallLogoContainer).toHaveStyle("display: block");
  const largeLogo = screen.getByAltText("bonnet and text logo")
  expect(largeLogo).toBeInTheDocument();
  const largeLogoContainer = screen.getByTestId("large-logo-container");
  expect(largeLogoContainer).toHaveStyle("display: none");
});

// test("renders the large logo on larger screens", () => {
//   // Mock window.matchMedia to simulate a small screen
//   window.matchMedia = jest.fn().mockImplementation(query => ({
//     matches: query === "(min-width: 768px)",
//     addListener: jest.fn(),
//     // removeListener: jest.fn(),
//   }));

//   const { debug } = render(<NavBar />);
  
//   debug(); 
  
//   const largeLogo = screen.getByAltText("bonnet and text logo")
//   expect(largeLogo).toBeInTheDocument();
//   const largeLogoContainer = screen.getByTestId("large-logo-container");
//   expect(largeLogoContainer).toHaveStyle("display: block");
// });