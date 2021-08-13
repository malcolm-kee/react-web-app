import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppShell } from "./app-shell";
import { AuthProvider } from "./domains/auth";
import "./index.css";
// import { ApplyJob } from "./pages/apply-job";
// import { JobDetailsPage } from "./pages/job-details";
// import { LoginPage } from "./pages/login";

// import { ListingDetailsPage } from "./pages/listing-details";
// import { MarketplacePublic } from "./pages/marketplace-public";
// import { ShoppingCart } from "./pages/shopping-cart";

ReactDOM.render(
  <AuthProvider>
    <AppShell>
      {/* should be shown at /login */}
      {/* <LoginPage /> */}
      {/* should be shown at /career */}
      {/* <ApplyJob /> */}
      {/* should be shown at /career/{jobId} */}
      {/* <JobDetailsPage /> */}
      {/* should be shown at /marketplace */}
      {/* <MarketplacePublic /> */}
      {/* should be shown at /listing/{listingId} */}
      {/* <ListingDetailsPage /> */}
      {/* should be in /shopping-cart */}
      {/* <ShoppingCart /> */}
    </AppShell>
  </AuthProvider>,
  document.querySelector("#root")
);
