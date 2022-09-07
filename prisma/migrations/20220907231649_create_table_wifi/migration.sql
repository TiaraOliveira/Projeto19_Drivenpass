/*
  Warnings:

  - You are about to drop the column `createdDate` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `createdDate` on the `credential` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "card" DROP COLUMN "createdDate";

-- AlterTable
ALTER TABLE "credential" DROP COLUMN "createdDate";

-- CreateTable
CREATE TABLE "wifi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "networkName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "wifiTag" TEXT NOT NULL,

    CONSTRAINT "wifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
