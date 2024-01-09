export const END_POINT = {
  USER_DETAIL: (userId: string) => `api/user/${userId}`,
} as const;

export const PLACES_END_POINT = {
  PLACE_DETAIL: (placeId: string) => `/api/places/${placeId}`,
} as const;
