import * as React from "react";
import { getListingDetails, getListings } from "../marketplace.service";

export const useListings = () => {
  const [listings, setListings] = React.useState(undefined);
  const [page, setPage] = React.useState(1);

  const loadListings = (pageNum, signal) =>
    getListings(pageNum, signal).then((data) => setListings(data));

  React.useEffect(() => {
    const ab = new AbortController();
    loadListings(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page]);

  return {
    listings,
    page,
    setPage,
    loadListings,
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
