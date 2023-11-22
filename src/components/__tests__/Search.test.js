import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCKData from "../mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKData);
    },
  });
});
test("Should search the items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardBeforeSearch = screen.getAllByTestId("resCard");
  expect(resCardBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Burger" } });
  fireEvent.keyUp(searchInput, { key: "Enter", charCode: 13 });
  const resCardAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardAfterSearch.length).toBe(1);
});
