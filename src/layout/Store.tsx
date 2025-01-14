import { Outlet } from "react-router";
import { Header, Footer } from "../components";

/**
 * The main store layout component.
 *
 * This component is the main layout component for the store, and is the
 * top-level component rendered by the router.
 *
 * It renders a header, a footer, and an outlet for the main content of the
 * page.
 *
 * @returns The store layout component.
 */
export const Store = () => {
  return (
    <div className="bg-white">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
