import * as React from "react";
import { useQuery } from "react-query";
import { getListingDetails, getListings } from "../marketplace.service";

export const useListings = () => {
  const [page, setPage] = React.useState(1);

  const query = useQuery("listings", () => getListings(page));

  return {
    ...query,
    page,
    setPage,
  };
};

export const useListingDetails = (listingId) => {
  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    const ab = new AbortController();
    getListingDetails(listingId, ab.signal).then(setData);

    return () => {
      ab.abort();
    };
  }, [listingId]);

  return {
    data,
  };
};
