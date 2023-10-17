import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import NavDropDown from "@/app/components/Navigation/NavDropDown";
import userEvent from "@testing-library/user-event";

test("renders the IconButton", () => {
  render(<NavDropDown hasCurrentUser={false} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("Menu is not open by default", () => {
  render(<NavDropDown hasCurrentUser={false} />);
  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

test("Menu opens on IconButton click", async () => {
  render(<NavDropDown hasCurrentUser={false} />);
  userEvent.click(screen.getByRole("button"));
  const menu = await screen.findByRole("menu");
  expect(menu).toBeInTheDocument();
});

test("NavMenuItem components are present when Menu is open", async () => {
  render(<NavDropDown hasCurrentUser={false} />);
  fireEvent.click(screen.getByRole("button"));
  // jest.useFakeTimers(); //seems necessary due to Mui Ripple effect if using userEvent instead of fireEvent
  // consider this https://stackoverflow.com/questions/64782261/best-approach-to-wait-on-material-ui-ripples-to-complete-before-taking-snapshots
  expect(await screen.findByRole("menu")).toBeInTheDocument();
  const homeLink = await screen.findByRole("link", {name: "Home"})
  expect(homeLink).toHaveAttribute("href", "/");
  expect(homeLink).toBeInTheDocument();
  const garmentsLink = await screen.findByRole("link", {name: "Garments"})
  expect(garmentsLink).toBeInTheDocument();
  expect(garmentsLink).toHaveAttribute("href", "/garments");
  const searchLink = await screen.findByRole("link", {name: "Search"})
  expect(searchLink).toBeInTheDocument();
  expect(searchLink).toHaveAttribute("href", "/search");
});
// for some reason userEvent does not trigger the act warning if fireEvent has been used even if in prior test!??
test("Menu closes on NavMenuItem click", async () => {
  render(<NavDropDown hasCurrentUser={false} />);
  userEvent.click(screen.getByRole("button"));
  expect(await screen.findByRole("menu")).toBeInTheDocument();
  const garmentsLink = await screen.findByRole("link", {name: "Home"})
  userEvent.click(garmentsLink);
  await waitFor(() => expect(screen.queryByRole("menu")).not.toBeInTheDocument());
});