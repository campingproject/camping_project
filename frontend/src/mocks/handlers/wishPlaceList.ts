import { http } from 'msw';
import { placeWishListData } from '../data/placeWishList';
import { WISH_PLACE_END_POINT } from '@/constants/api';

export const wishPlaceListHandlers = [
  http.get(WISH_PLACE_END_POINT.WISH_PLACE(), () => {
    return Response.json(placeWishListData);
  }),
];
