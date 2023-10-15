import { render, screen } from "@testing-library/react";
import NavMenuItem from "@/app/components/Navigation/NavMenuItem";

test("creates a link and renders the name correctly", () => {
  const onClose = jest.fn();
  render(<NavMenuItem name="Jokes" href="/" onClose={onClose} />);
  const link = screen.getByRole("link", { name: /Jokes/ });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
