import { PLACES_END_POINT } from '@/constants/api';
import { http } from 'msw';
import { placeData } from '../data/place';

export const placeHandlers = [
  http.get(PLACES_END_POINT.PLACE_DETAIL('*'), () => {
    return Response.json(placeData);
  }),
];
