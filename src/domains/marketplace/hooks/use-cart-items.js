import { useAuth } from "domains/auth";
import * as React from "react";
import { deleteCartItem, getCartItems } from "../marketplace.service";

export const useCartItems = () => {
  const [data, setData] = React.useState(undefined);
  const { accessToken } = useAuth();

  const loadData = ({ token, signal }) =>
    getCartItems({ signal, token }).then(setData);

  React.useEffect(() => {
    if (accessToken) {
      const ab = new AbortController();
      loadData({ signal: ab.signal, token: accessToken });

      return () => {
        ab.abort();
      };
    }
  }, [accessToken]);

  return {
    data,
    loadData: () => loadData({ token: accessToken }),
  };
};

export const useDeleteCartItems = () => {
  const { accessToken } = useAuth();

  return function run(listingId) {
    return deleteCartItem(listingId, { token: accessToken });
  };
};
