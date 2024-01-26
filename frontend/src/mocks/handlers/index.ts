import { userHandlers } from './user';
import { placeHandlers } from './place';
import { wishPlaceListHandlers } from './wishPlaceListHandler';
import { wishItemListHandlers } from './wishItemListHandlers';

export const handlers = [
  ...userHandlers,
  ...placeHandlers,
  ...wishPlaceListHandlers,
  ...wishItemListHandlers,
];
