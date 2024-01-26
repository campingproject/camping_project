export const END_POINT = {
  USER_DETAIL: (userId: string) => `api/user/${userId}`,
} as const;

export const PLACES_END_POINT = {
  PLACE_DETAIL: (placeId: string) => `/api/places/${placeId}`,
} as const;

export const WISH_PLACE_END_POINT = {
  WISH_PLACE: () => `/api/mypage/wish/place`,
} as const;

export const WISH_ITEM_END_POINT = {
  WISH_ITEM: () => `/api/mypage/wish/item`,
} as const;

// export const WISH = {
//   WISH_PLACE: `/api/mypage/wish/place`,
//   WISH_ITEM: `/api/mypage/wish/item`,
// };
