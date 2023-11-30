import { END_POINT } from '@/constants/api';
import { http } from 'msw';
import { user } from '../data/user';

export const userHandlers = [
  http.get(END_POINT.USER_DETAIL('*'), () => {
    return Response.json(user);
  }),
];
