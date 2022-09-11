import { safeNote } from '@prisma/client';

export type TypeSafeNoteData = Omit<safeNote, 'id' | 'userId'>;
