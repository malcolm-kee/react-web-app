import { BASE_URL } from "const";
import { ListingItem, useListings } from "domains/marketplace";
import * as React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Select } from "../components/select";
import { Textarea } from "../components/textarea";

const createListing = (data) =>
  fetch(`${BASE_URL}/marketplace`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const useCreateListingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createListing, {
    onSuccess: () => queryClient.invalidateQueries("listings"),
  });
};

const usePersistedState = (storageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    () => sessionStorage.getItem(storageKey) || defaultValue
  );

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};

export const Marketplace = () => {
  const { data: listings, page, setPage } = useListings();

  const [title, setTitle] = usePersistedState("title", "");

  const [price, setPrice] = usePersistedState("price", "");
  const [description, setDescription] = usePersistedState("description", "");
  const [condition, setCondition] = usePersistedState("condition", "new");
  const [availability, setAvailability] = usePersistedState(
    "availability",
    "in-stock"
  );
  const [numOfStock, setNumOfStock] = usePersistedState("numOfStock", "");

  const titleInputRef = React.useRef();

  const createListingMutation = useCreateListingMutation();

  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createListingMutation.mutate(
            {
              title,
              price: Number(price),
              description,
              condition,
              availability,
              numOfStock: Number(numOfStock),
            },
            {
              onSuccess: () => {
                setTitle("");
                setPrice("");
                setDescription("");
                setCondition("new");
                setAvailability("in-stock");
                setNumOfStock("");

                if (titleInputRef.current) {
                  titleInputRef.current.focus();
                }
              },
            }
          );
        }}
      >
        <div className="p-3">New Listing</div>
        <div className="space-y-5 p-3">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              required
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChangeValue={setDescription}
              required
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium">
              Condition
            </label>
            <Select
              id="condition"
              value={condition}
              onChangeValue={setCondition}
              required
            >
              <option value="new">New</option>
              <option value="used_like-new">Used (like new)</option>
              <option value="used_good">Used (good)</option>
              <option value="used_fair">Used (fair)</option>
            </Select>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium">
              Availability
            </label>
            <Select
              id="availability"
              value={availability}
              onChangeValue={setAvailability}
              required
            >
              <option value="in-stock">In Stock</option>
              <option value="single-item">Single Item</option>
            </Select>
          </div>
          <div>
            <label htmlFor="numOfStock" className="block text-sm font-medium">
              Number of Available Stock
            </label>
            <input
              type="number"
              id="numOfStock"
              value={numOfStock}
              onChange={(ev) => setNumOfStock(ev.target.value)}
              required
            />
          </div>
          <div>
            <button>ADD</button>
          </div>
        </div>
      </form>
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button type="button" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
          {listings &&
            listings.map((item) => (
              <ListingItem
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                price={item.price}
                availableStock={item.numOfStock}
                onlyOne={item.availability === "single-item"}
                listingId={item._id}
                key={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
