/*
  Warnings:

  - You are about to drop the column `credentialName` on the `credential` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,credentialTag]` on the table `credential` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `credentialTag` to the `credential` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "credential_userId_credentialName_key";

-- AlterTable
ALTER TABLE "credential" DROP COLUMN "credentialName",
ADD COLUMN     "credentialTag" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cardNumber" INTEGER NOT NULL,
    "cardName" TEXT NOT NULL,
    "cvc" INTEGER NOT NULL,
    "expiratedDate" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "cardTag" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "card_userId_cardTag_key" ON "card"("userId", "cardTag");

-- CreateIndex
CREATE UNIQUE INDEX "credential_userId_credentialTag_key" ON "credential"("userId", "credentialTag");

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
