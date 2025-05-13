/*
  Warnings:

  - You are about to drop the column `day` on the `InstructorSlot` table. All the data in the column will be lost.
  - Changed the type of `startTime` on the `InstructorSlot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `InstructorSlot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "InstructorSlot" DROP COLUMN "day",
DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;
