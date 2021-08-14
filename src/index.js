import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { AppShell } from "./app-shell";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { ApplyJob } from "./pages/apply-job";
import { JobDetailsPage } from "./pages/job-details";
import { LoginPage } from "./pages/login";

import { ListingDetailsPage } from "./pages/listing-details";
import { MarketplacePublic } from "./pages/marketplace-public";
import { ShoppingCart } from "./pages/shopping-cart";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppShell>
        {/* should be shown at /login */}
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* should be shown at /career */}
        <Route path="/career">
          <ApplyJob />
        </Route>
        {/* should be shown at /career/{jobId} */}
        <Route path="/career/:jobId">
          <JobDetailsPage />
        </Route>
        {/* should be shown at /marketplace */}
        <Route path="/marketplace">
          <MarketplacePublic />
        </Route>
        {/* should be shown at /listing/{listingId} */}
        <Route path="/listing/:listingId">
          <ListingDetailsPage />
        </Route>
        {/* should be in /shopping-cart */}
        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>
      </AppShell>
    </AuthProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
