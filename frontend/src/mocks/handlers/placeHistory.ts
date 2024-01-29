import { http } from 'msw';
import { PLACES_HISTORY_END_POINT } from '@/constants/api';
import { placeHistory } from '../data/placeHistory';

export const placeHistoryHandlers = [
  http.get(PLACES_HISTORY_END_POINT.PLACES_HISTORY(), () => {
    return Response.json(placeHistory);
  }),
];
