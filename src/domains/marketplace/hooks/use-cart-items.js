import { useAuth } from "domains/auth";
import * as React from "react";
import { deleteCartItem, getCartItems } from "../marketplace.service";

export const useCartItems = () => {
  const [data, setData] = React.useState(undefined);
  const { accessToken } = useAuth();

  const loadData = (signal) =>
    getCartItems({ signal, token: accessToken }).then(setData);

  React.useEffect(() => {
    const ab = new AbortController();
    loadData(ab.signal);

    return () => {
      ab.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return {
    data,
    loadData,
  };
};

export const useDeleteCartItems = () => {
  const { accessToken } = useAuth();

  return function run(listingId) {
    return deleteCartItem(listingId, { token: accessToken });
  };
};
