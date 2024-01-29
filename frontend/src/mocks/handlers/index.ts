import { userHandlers } from './user';
import { placeHandlers } from './place';
import { wishPlaceListHandlers } from './wishPlaceList';
import { wishItemListHandlers } from './wishItemList';
import { placeHistoryHandlers } from './placeHistory';
import { itemPurchaseHistoryHandlers } from './itemPurchaseHistory';

export const handlers = [
  ...userHandlers,
  ...placeHandlers,
  ...wishPlaceListHandlers,
  ...wishItemListHandlers,
  ...placeHistoryHandlers,
  ...itemPurchaseHistoryHandlers,
];
