-- CreateTable
CREATE TABLE "safeNote" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "safeNotetitle" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "safeNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "safeNote_safeNotetitle_key" ON "safeNote"("safeNotetitle");

-- CreateIndex
CREATE UNIQUE INDEX "safeNote_userId_safeNotetitle_key" ON "safeNote"("userId", "safeNotetitle");

-- AddForeignKey
ALTER TABLE "safeNote" ADD CONSTRAINT "safeNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
