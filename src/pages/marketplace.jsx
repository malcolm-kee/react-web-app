import { BASE_URL } from "const";
import { ListingItem, useListings } from "domains/marketplace";
import { useFormik } from "formik";
import * as React from "react";
import { useMutation, useQueryClient } from "react-query";
import * as Yup from "yup";
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

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .required("Price is required")
    .moreThan(0, "Price must be more than 0"),
  description: Yup.string().required("Description is required"),
  condition: Yup.string().required("Condition is required"),
  availability: Yup.string().required("Availability is required"),
  numOfStock: Yup.number().required("Number of Available Stock is required"),
});

export const Marketplace = () => {
  const { data: listings, page, setPage } = useListings();

  const titleInputRef = React.useRef();

  const createListingMutation = useCreateListingMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      condition: "new",
      availability: "in-stock",
      numOfStock: "",
    },
    validationSchema,
    onSubmit: (values) => {
      createListingMutation.mutate(
        {
          ...values,
          price: Number(values.price),
          numOfStock: Number(values.numOfStock),
        },
        {
          onSuccess: () => {
            formik.resetForm();

            if (titleInputRef.current) {
              titleInputRef.current.focus();
            }
          },
        }
      );
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-3">New Listing</div>
        <div className="space-y-5 p-3">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={titleInputRef}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="block text-xs text-red-500">
                {formik.errors.title}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="block text-xs text-red-500">
                {formik.errors.price}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="block text-xs text-red-500">
                {formik.errors.description}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium">
              Condition
            </label>
            <Select
              id="condition"
              value={formik.values.condition}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="new">New</option>
              <option value="used_like-new">Used (like new)</option>
              <option value="used_good">Used (good)</option>
              <option value="used_fair">Used (fair)</option>
            </Select>
            {formik.touched.condition && formik.errors.condition && (
              <div className="block text-xs text-red-500">
                {formik.errors.condition}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium">
              Availability
            </label>
            <Select
              id="availability"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="in-stock">In Stock</option>
              <option value="single-item">Single Item</option>
            </Select>
            {formik.touched.availability && formik.errors.availability && (
              <div className="block text-xs text-red-500">
                {formik.errors.availability}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="numOfStock" className="block text-sm font-medium">
              Number of Available Stock
            </label>
            <input
              type="number"
              id="numOfStock"
              value={formik.values.numOfStock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.numOfStock && formik.errors.numOfStock && (
              <div className="block text-xs text-red-500">
                {formik.errors.numOfStock}
              </div>
            )}
          </div>
          <div>
            <button type="submit">ADD</button>
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
