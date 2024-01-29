export type PlaceHistoryTypes = {
  id: string;
  name: string;
  address: string;
  host: string;
  thumbnail: string;
  checkInDate: string;
  checkOutDate: string;
  paymentMethod: string;
  cancledDate: string | '';
  isCancled: 'Y' | 'N';
};

export type ItemPurchaseHistoryTypes = {
  id: string;
  name: string;
  price: string;
  thumbnail: string;
  seller: string;
  paymentMethod: string;
  purchaseDate: string;
  cancledDate: string | '';
  isCancled: 'N' | 'Y';
};
