import { useAuth, LogoutButton } from "domains/auth";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const AppShell = ({ children }) => {
  const { status } = useAuth();

  return (
    <>
      <header className="md:sticky md:top-0 bg-white md:z-10">
        <div className="px-4">
          <div className="flex justify-between items-center py-2 max-w-7xl mx-auto border-b border-gray-200">
            <nav className="flex items-center">
              <Link
                to="/"
                className="text-xl inline-block mr-4 font-bold text-pink-700 hover:text-pink-900"
              >
                React Lover
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="/marketplace"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Marketplace
                </Link>
                <Link
                  to="/career"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Career
                </Link>
              </div>
            </nav>
            {status === "authenticated" ? (
              <div className="flex gap-3">
                <Link
                  to="/shopping-cart"
                  className="group -m-2 p-2 flex items-center"
                >
                  <ShoppingBagIcon
                    className="flex-shink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">View cart</span>
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <Link href="/login" className="text-sm px-4 py-1 text-pink-500">
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
