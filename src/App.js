import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { UserName } from "./utils/UserContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
    <UserContext.Provider value={{ user: userName, setUserName }}>
      <div className="app">
        <Header />
    <UserName.Provider value={'baba'}>
        <Outlet />
    </UserName.Provider>

      </div>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={appRouter} />);
