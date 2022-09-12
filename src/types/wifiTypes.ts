import { wifi } from '@prisma/client';

export type TypeWifiData = Omit<wifi, 'id'>;
export type TypeWifiCriptedlData = Omit<wifi, 'id' | 'userId'| 'password'>;