// import { WISH } from '@/constants/api';
import { http } from 'msw';
import { itemWishListData } from '../data/itemWishListData';
import { WISH_ITEM_END_POINT } from '@/constants/api';

// export const wishItemListHandlers = [
//   http.get(`/api/mypage/wish/item`, () => {
//     return Response.json(itemWishListData);
//   }),
// ];

export const wishItemListHandlers = [
  http.get(WISH_ITEM_END_POINT.WISH_ITEM(), () => {
    return Response.json(itemWishListData);
  }),
];
