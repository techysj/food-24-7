import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCKDATA from "../mocks/menuListMockData.json";
import RestroMenu from "../RestroMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKDATA);
    },
  });
});
test("Should add item to cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const menuItemHeader = screen.getByText("CHICKEN CHIZZA (5)");
  expect(menuItemHeader).toBeInTheDocument();
  fireEvent.click(menuItemHeader);
  const menuItem = screen.getAllByTestId("menuItem");
  expect(menuItem).toHaveLength(5);
  const addToCartBtn = screen.getAllByTestId("addToCartBtn");
  const cartItemsLoaded = screen.getByText("Cart-(0 items)");
  expect(cartItemsLoaded).toBeInTheDocument();
  fireEvent.click(addToCartBtn[0]);
  const cartItems = screen.getByText("Cart-(1 items)");
  expect(cartItems).toBeInTheDocument();
  fireEvent.click(cartItems);
  const cartPage = screen.getByText("Cart Page");
  expect(cartPage).toBeInTheDocument();
  const cartItem = screen.getAllByTestId("menuItem");
  expect(cartItem).toHaveLength(6);
});
