import { render, screen } from "@testing-library/react";
import RestroContainer, { withPromotedLabel } from "../RestroContainer";
import MOCK_DATA from ".././mocks/restroContainerMockData.json";
import "@testing-library/jest-dom";

test("should return the name of the restaurent", () => {
  render(<RestroContainer resData={MOCK_DATA} />);
  const name = screen.getByText("Rollsking");
  expect(name).toBeInTheDocument();
});

test("should render RestaurantCard component with Veg Label", () => {
  const RestaurentCardVeg = withPromotedLabel(RestroContainer);
  render(<RestaurentCardVeg resData={MOCK_DATA} />);

  const label = screen.getByText("Veg");
  expect(label).toBeInTheDocument();
});
