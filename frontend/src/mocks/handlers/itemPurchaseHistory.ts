import { http } from 'msw';
import { ITEMS_HISTORY_END_POINT } from '@/constants/api';
import { itemPurchaseHistory } from '../data/itemPurchaseHistory';

export const itemPurchaseHistoryHandlers = [
  http.get(ITEMS_HISTORY_END_POINT.ITMES_PURCHASE_HISTORY(), () => {
    return Response.json(itemPurchaseHistory);
  }),
];
