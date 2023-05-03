import { StyledEngineProvider } from "@mui/material";
import React, { Suspense } from "react";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const LazyMUIDashboardPage = React.lazy(
  () => import("./perses/PersesDashboardPage")
);
const LazyPatternflyDashboardPage = React.lazy(
  () => import("./patternfly/PatternflyDashboardPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/mui",
        element: <LazyMUIDashboardPage />,
      },
      {
        path: "/patternfly",
        element: <LazyPatternflyDashboardPage />,
      },
    ],
  },
]);

function Layout() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/mui">MUI</Link>
          </li>
          <li>
            <Link to="/patternfly">Patternfly</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
}

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router}></RouterProvider>
    </StyledEngineProvider>
  );
}

export default App;
