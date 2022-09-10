import { wifi } from '@prisma/client';

export type TypeCredentialData = Omit<wifi, 'id'>;
export type TypeCredentiaCriptedlData = Omit<wifi, 'id' | 'userId'| 'password'>;