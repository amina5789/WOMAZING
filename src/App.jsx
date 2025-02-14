import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "./styles/global.scss";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
