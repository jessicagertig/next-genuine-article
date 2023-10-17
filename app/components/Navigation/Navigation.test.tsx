import { render, screen } from "@/testUtils/testUtilsWithTheme";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Navigation from "@/app/components/Navigation/Navigation";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

test("renders navigation links", () => {
  render(<Navigation activeColor="#000" color="#fff" hasCurrentUser={false} />);

  const homeLink = screen.getByText("Home");
  const garmentsLink = screen.getByText("Garments");
  const searchLink = screen.getByText("Search");

  expect(homeLink).toBeInTheDocument();
  expect(garmentsLink).toBeInTheDocument();
  expect(searchLink).toBeInTheDocument();
});

test("navigates to the correct page when a link is clicked", () => {
  render(<Navigation activeColor="#000" color="#fff" hasCurrentUser={false} />);

  const homeLink = screen.getByText("Home");
  userEvent.click(homeLink);

  expect(window.location.pathname).toBe("/");
});


test("adds 'active' class to current navigation link", async () => {

  (usePathname as jest.Mock).mockReturnValue("/garments"); // Set the current path

  render(<Navigation activeColor="#000" color="#fff" hasCurrentUser={false} />);

  const activeLink = screen.getByRole("link", { name: "Garments", hidden: true });

  expect(activeLink.className).toBe("active");
});