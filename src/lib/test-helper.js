import { AuthContext } from "domains/auth/auth.state";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

export const renderInApp = (ui, { isAuthenticated = true, url = "/" } = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[url]}>
        <AuthContext.Provider
          value={{
            status: isAuthenticated ? "authenticated" : "anonymous",
            accessToken: "mockToken",
            login: () => {},
            logout: () => {},
          }}
        >
          {ui}
        </AuthContext.Provider>
      </MemoryRouter>
    </QueryClientProvider>
  );
};
