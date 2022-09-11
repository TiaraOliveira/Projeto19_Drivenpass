import { card } from '@prisma/client';

export type TypeCardData = Omit<card, 'id'| 'userId'>;
export type TypeCardCriptedlData = Omit<card, 'id' | 'userId'| 'password'>;