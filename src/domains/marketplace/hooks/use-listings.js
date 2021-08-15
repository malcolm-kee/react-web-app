import * as React from "react";
import { useQuery } from "react-query";
import { getListingDetails, getListings } from "../marketplace.service";

export const useListings = () => {
  const [page, setPage] = React.useState(1);

  const query = useQuery(["listings", page], () => getListings(page), {
    staleTime: 3000,
  });

  return {
    ...query,
    page,
    setPage,
  };
};

export const useListingDetails = (listingId) => {
  return useQuery(
    ["listingDetails", listingId],
    () => getListingDetails(listingId),
    {
      staleTime: 3000,
    }
  );
};
