import { CheckIcon } from "@heroicons/react/solid";
import { useListingDetails } from "../hooks/use-listings";
import { Badge } from "components/badge";
import { Button } from "components/button";
import { useAuth } from "domains/auth";
import { addToCart } from "../marketplace.service";

export const ListingDetails = ({ listingId }) => {
  const { data } = useListingDetails(listingId);
  const { status, accessToken } = useAuth();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {data && data.title}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {data && `$ ${data.price}`}
              </p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                {data && data.description}
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
              {data && data.onlyOne && <Badge>Only One</Badge>}
            </div>
          </section>
        </div>

        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={data && data.imageUrl}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="mt-10">
            {status === "authenticated" ? (
              <Button
                onClick={() => addToCart(data._id, accessToken)}
                variant="primary"
                className="w-full"
              >
                ADD TO CART
              </Button>
            ) : (
              <Button
                variant="outline"
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                render={(bProps) => <a {...bProps} href="#test" />}
              >
                LOGIN
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
