// import { WISH } from '@/constants/api';
import { http } from 'msw';
import { placeWishListData } from '../data/placeWishListData';
import { WISH_PLACE_END_POINT } from '@/constants/api';

// export const wishPlaceListHandlers = [
//   http.get('/api/mypage/wish/place', () => {
//     return Response.json(placeWishListData);
//   }),
// ];

export const wishPlaceListHandlers = [
  http.get(WISH_PLACE_END_POINT.WISH_PLACE(), () => {
    return Response.json(placeWishListData);
  }),
];
