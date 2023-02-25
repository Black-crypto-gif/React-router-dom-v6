import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Help from "./layouts/Help";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CarsLayout from "./layouts/CarsLayout";
import Cars, { CarsLoader } from "./pages/cars/Cars";
import CarsDeta, { carsDetaLoader } from "./pages/cars/CarsDeta";
import CarsError from "./pages/cars/CarsError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="cars" element={<CarsLayout />} errorElement={<CarsError />}>
        <Route index element={<Cars />} loader={CarsLoader} />
        <Route path=":id" element={<CarsDeta />} loader={carsDetaLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
