/*
  Warnings:

  - The primary key for the `CandidateInstructor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EnrollmentRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `InstructorSlot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `School` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SchoolUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SessionCandidate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TestResult` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId]` on the table `SchoolUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endTime` to the `InstructorSlot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CandidateInstructor" DROP CONSTRAINT "CandidateInstructor_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateInstructor" DROP CONSTRAINT "CandidateInstructor_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "EnrollmentRequest" DROP CONSTRAINT "EnrollmentRequest_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "EnrollmentRequest" DROP CONSTRAINT "EnrollmentRequest_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "InstructorSlot" DROP CONSTRAINT "InstructorSlot_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "SchoolUser" DROP CONSTRAINT "SchoolUser_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "SchoolUser" DROP CONSTRAINT "SchoolUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "SessionCandidate" DROP CONSTRAINT "SessionCandidate_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "SessionCandidate" DROP CONSTRAINT "SessionCandidate_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "TestResult" DROP CONSTRAINT "TestResult_candidateId_fkey";

-- AlterTable
ALTER TABLE "CandidateInstructor" DROP CONSTRAINT "CandidateInstructor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "instructorId" SET DATA TYPE TEXT,
ALTER COLUMN "candidateId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CandidateInstructor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CandidateInstructor_id_seq";

-- AlterTable
ALTER TABLE "EnrollmentRequest" DROP CONSTRAINT "EnrollmentRequest_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "candidateId" SET DATA TYPE TEXT,
ALTER COLUMN "schoolId" SET DATA TYPE TEXT,
ADD CONSTRAINT "EnrollmentRequest_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EnrollmentRequest_id_seq";

-- AlterTable
ALTER TABLE "InstructorSlot" DROP CONSTRAINT "InstructorSlot_pkey",
ADD COLUMN     "endTime" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "instructorId" SET DATA TYPE TEXT,
ALTER COLUMN "startTime" SET DATA TYPE TEXT,
ADD CONSTRAINT "InstructorSlot_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "InstructorSlot_id_seq";

-- AlterTable
ALTER TABLE "School" DROP CONSTRAINT "School_pkey",
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "websiteUrl" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "School_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "School_id_seq";

-- AlterTable
ALTER TABLE "SchoolUser" DROP CONSTRAINT "SchoolUser_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "schoolId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SchoolUser_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SchoolUser_id_seq";

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "schoolId" SET DATA TYPE TEXT,
ALTER COLUMN "instructorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Session_id_seq";

-- AlterTable
ALTER TABLE "SessionCandidate" DROP CONSTRAINT "SessionCandidate_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "sessionId" SET DATA TYPE TEXT,
ALTER COLUMN "candidateId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SessionCandidate_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SessionCandidate_id_seq";

-- AlterTable
ALTER TABLE "TestResult" DROP CONSTRAINT "TestResult_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "candidateId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TestResult_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TestResult_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "SchoolUser_userId_key" ON "SchoolUser"("userId");

-- AddForeignKey
ALTER TABLE "SchoolUser" ADD CONSTRAINT "SchoolUser_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolUser" ADD CONSTRAINT "SchoolUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionCandidate" ADD CONSTRAINT "SessionCandidate_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionCandidate" ADD CONSTRAINT "SessionCandidate_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateInstructor" ADD CONSTRAINT "CandidateInstructor_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateInstructor" ADD CONSTRAINT "CandidateInstructor_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstructorSlot" ADD CONSTRAINT "InstructorSlot_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrollmentRequest" ADD CONSTRAINT "EnrollmentRequest_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrollmentRequest" ADD CONSTRAINT "EnrollmentRequest_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
