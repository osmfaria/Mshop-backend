-- CreateEnum
CREATE TYPE "Account_Type" AS ENUM ('SELLER', 'BUYER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "account_type" "Account_Type" NOT NULL DEFAULT 'BUYER';
