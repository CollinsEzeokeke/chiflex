-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TEXT,
ALTER COLUMN "role" SET DEFAULT 'BASIC_USER';
