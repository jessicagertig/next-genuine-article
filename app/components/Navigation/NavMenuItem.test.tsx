import { render, screen } from "@testing-library/react";
import NavMenuItem from "@/app/components/Navigation/NavMenuItem";

test("creates a link and renders the name correctly", () => {
  const onClose = jest.fn;
  render(<NavMenuItem name="Jokes" href="/" onClose={onClose} />);
  expect(screen.getByRole("link", {name: /Jokes/})).toBeInTheDocument();
});
