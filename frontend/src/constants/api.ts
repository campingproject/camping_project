export const END_POINT = {
  USER_DETAIL: (userId: string) => `api/user/${userId}`,
} as const;

export const PLACES_END_POINT = {
  PLACE_DETAIL: (placeId: string) => `/api/places/${placeId}`,
} as const;

export const WISH_PLACE_END_POINT = {
  WISH_PLACE: () => `/api/mypage/wish/places`,
} as const;

export const WISH_ITEM_END_POINT = {
  WISH_ITEM: () => `/api/mypage/wish/items`,
} as const;

export const PLACES_HISTORY_END_POINT = {
  PLACES_HISTORY: () => `/api/mypage/history/places`,
} as const;

export const ITEMS_HISTORY_END_POINT = {
  ITMES_PURCHASE_HISTORY: () => `/api/mypage/history/items`,
} as const;
