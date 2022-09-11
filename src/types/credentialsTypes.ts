import { credential } from '@prisma/client';

export type TypeCredentialData = Omit<credential, 'id'| 'userId'>;
export type TypeCredentiaCriptedlData = Omit<credential, 'id' | 'userId'| 'password'>;