import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// import.meta.env.BASE_URL matches the vite `base` option, so client-side routing
// keeps working when the site is hosted under a GitHub Pages repository path.
const basepath = import.meta.env.BASE_URL || "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
