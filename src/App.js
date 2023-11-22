import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Shreyansh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ user: userName, setUserName }}>
        <div className="app relative">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:restroID",
        element: <RestroMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={appRouter} />);
