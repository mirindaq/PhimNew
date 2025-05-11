
import { PATH } from "@/constants/path";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "@/pages/User/Home/Home";
import { useRoutes } from "react-router";
const useRouteElements = () => {

  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: PATH.HOME,
          element: <Home />,
        },
      ],
    },
  ]);
};

export default useRouteElements;
