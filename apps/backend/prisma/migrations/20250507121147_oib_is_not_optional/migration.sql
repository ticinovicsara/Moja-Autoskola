/*
  Warnings:

  - A unique constraint covering the columns `[oib]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `oib` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "oib" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_oib_key" ON "User"("oib");
