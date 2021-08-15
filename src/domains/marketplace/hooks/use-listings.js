import * as React from "react";
import { useQuery } from "react-query";
import { getListingDetails, getListings } from "../marketplace.service";

export const useListings = () => {
  const [page, setPage] = React.useState(1);

  const query = useQuery(["listings", page], () => getListings(page));

  return {
    ...query,
    page,
    setPage,
  };
};

export const useListingDetails = (listingId) => {
  return useQuery(["listingDetails", listingId], () =>
    getListingDetails(listingId)
  );
};
