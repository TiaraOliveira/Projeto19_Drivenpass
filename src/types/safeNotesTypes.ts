import { safeNote } from '@prisma/client';

export type TypeCredentialData = Omit<safeNote, 'id'>;
export type TypeCredentiaCriptedlData = Omit<safeNote, 'id' | 'userId'>;