import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <MovieDetails />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
