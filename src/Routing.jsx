import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Common/Header";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Industries from "./Components/Pages/Industries";
import IndustryDetails from "./Components/Pages/IndustryDetails";
import OutSourcing from "./Components/Pages/OutSourcing";
import Career from "./Components/Pages/Career";
import ContactUs from "./Components/Pages/ContactUs";
import Services from "./Components/Pages/Services";
import ServiceDetails from "./Components/Pages/ServiceDetails";
import Footer from "./Components/Common/Footer";
import PageNotFound from "./Components/Pages/PageNotFound";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <div>
          <Header />
          <AboutUs />
          <Footer />
        </div>
      ),
    },
    {
      path: "/services",
      element: (
        <div>
          <Header />
          <Services />
          <Footer />
        </div>
      ),
    },
    {
      path: "/services/:serviceName",
      element: (
        <div>
          <Header />
          <ServiceDetails />
          <Footer />
        </div>
      ),
    },
    {
      path: "/industries",
      element: (
        <div>
          <Header />
          <Industries />
          <Footer />
        </div>
      ),
    },
    {
      path: "/industries/:industryName",
      element: (
        <div>
          <Header />
          <IndustryDetails />
          <Footer />
        </div>
      ),
    },
    {
      path: "/outsourcing",
      element: (
        <div>
          <Header />
          <OutSourcing />
          <Footer />
        </div>
      ),
    },
    {
      path: "/career",
      element: (
        <div>
          <Header />
          <Career />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contactUs",
      element: (
        <div>
          <Header />
          <ContactUs />
          <Footer />
        </div>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Routing;
