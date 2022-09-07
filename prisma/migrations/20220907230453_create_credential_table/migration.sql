/*
  Warnings:

  - Added the required column `createdDate` to the `safeNote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "safeNote" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "credential" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "credentialName" TEXT NOT NULL,

    CONSTRAINT "credential_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credential_userId_credentialName_key" ON "credential"("userId", "credentialName");

-- AddForeignKey
ALTER TABLE "credential" ADD CONSTRAINT "credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
