import { userHandlers } from './user';
import { placeHandlers } from './place';

export const handlers = [...userHandlers, ...placeHandlers];
