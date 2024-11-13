/*
  Warnings:

  - Added the required column `expiresAt` to the `verification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "session" ADD COLUMN     "impersonatedBy" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "banExpires" TIMESTAMP(3),
ADD COLUMN     "banReason" TEXT,
ADD COLUMN     "banned" BOOLEAN;

-- AlterTable
ALTER TABLE "verification" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
