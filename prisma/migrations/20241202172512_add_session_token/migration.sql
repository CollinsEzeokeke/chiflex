-- AlterTable
ALTER TABLE "account" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "session" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "emailVerified" SET DEFAULT false;
