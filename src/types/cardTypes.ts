import { card } from '@prisma/client';

export type TypeCredentialData = Omit<card, 'id'>;
export type TypeCredentiaCriptedlData = Omit<card, 'id' | 'userId'| 'password'>;