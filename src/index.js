import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { ApplyJob } from "./pages/apply-job";
import { JobDetailsPage } from "./pages/job-details";
import { LoginPage } from "./pages/login";

import { ListingDetailsPage } from "./pages/listing-details";
import { MarketplacePublic } from "./pages/marketplace-public";
import { ShoppingCart } from "./pages/shopping-cart";
import { PageNotFound } from "./pages/404";
import { Career } from "./pages/career";
import { Marketplace } from "./pages/marketplace";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppShell>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/career/:jobId">
              <JobDetailsPage />
            </Route>
            <Route path="/career">
              <ApplyJob />
            </Route>
            <Route path="/career-admin">
              <Career />
            </Route>
            <Route path="/marketplace">
              <MarketplacePublic />
            </Route>
            <Route path="/listing/:listingId">
              <ListingDetailsPage />
            </Route>
            <Route path="/listing-admin">
              <Marketplace />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
            <Route path="/" exact>
              <div className="p-16">
                <h1 className="text-4xl">Home</h1>
              </div>
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </AppShell>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
