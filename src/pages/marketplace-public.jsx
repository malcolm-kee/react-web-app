import { ListingItem, useListings } from "domains/marketplace";

export const MarketplacePublic = () => {
  const { data: listings, isLoading } = useListings();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
          Marketplace
        </h1>
      </div>
      {listings && (
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
          {listings.map((item) => (
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
      )}{" "}
      {isLoading && <div className="p-12 text-center text-3xl">Loading...</div>}
    </div>
  );
};
