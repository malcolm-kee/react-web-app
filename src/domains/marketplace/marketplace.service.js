import { fetchJson } from "lib/fetch-json";
import { BASE_URL } from "const";

export const addToCart = (listingId, token) =>
  fetchJson(`${BASE_URL}/marketplace/cart/items`, {
    method: "POST",
    body: {
      quantity: 1,
      listingId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getCartItems = ({ token, signal }) =>
  fetchJson(`${BASE_URL}/marketplace/cart/items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  });

export const deleteCartItem = (listingId, { token }) =>
  fetchJson(`${BASE_URL}/marketplace/cart/items/${listingId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getListings = (page, signal) =>
  fetchJson(`${BASE_URL}/marketplace?page=${page}`, {
    signal,
  });

export const getListingDetails = (listingId, signal) =>
  fetchJson(`${BASE_URL}/marketplace/${listingId}`, {
    signal,
  });
