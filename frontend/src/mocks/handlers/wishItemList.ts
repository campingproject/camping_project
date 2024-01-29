import { http } from 'msw';
import { itemWishListData } from '../data/itemWishList';
import { WISH_ITEM_END_POINT } from '@/constants/api';

export const wishItemListHandlers = [
  http.get(WISH_ITEM_END_POINT.WISH_ITEM(), () => {
    return Response.json(itemWishListData);
  }),
];
