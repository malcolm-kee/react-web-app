import { ListingDetails } from "domains/marketplace";
import { useParams } from "react-router-dom";

export const ListingDetailsPage = () => {
  const params = useParams();
  return <ListingDetails listingId={params.listingId} />;
};
