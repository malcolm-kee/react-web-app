import { Button } from "components/button";
import { useCartItems, useDeleteCartItems } from "../hooks/use-cart-items";

export const CartItems = () => {
  const { data, loadData } = useCartItems();
  const deleteItem = useDeleteCartItems();

  const subtotal = data
    ? data.reduce(
        (total, item) => total + item.listing.price * item.quantity,
        0
      )
    : 0;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {data &&
                data.map((item) => (
                  <li key={item._id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={item.listing.imageUrl}
                        alt=""
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <a
                              href={`/listing/${item.listing._id}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.listing.title}
                            </a>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            $ {item.listing.price * item.quantity}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.listing.description}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          x{item.quantity}
                        </p>
                      </div>

                      <div className="mt-4 flex-1 flex items-end justify-end">
                        <div className="ml-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-pink-600 hover:text-pink-500"
                            onClick={() =>
                              deleteItem(item.listing._id).then(() =>
                                loadData()
                              )
                            }
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            {data && data.length === 0 && (
              <div className="text-xl text-center text-gray-600">
                No item in your cart.
              </div>
            )}
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Subtotal
                  </dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">
                    ${subtotal}
                  </dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div className="mt-10">
              <Button className="w-full" variant="primary">
                CHECKOUT
              </Button>
            </div>

            <div className="mt-6 text-sm text-center">
              <p>
                or{" "}
                <a
                  href="/marketplace"
                  className="text-pink-600 font-medium hover:text-pink-500"
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
