-- DropForeignKey
ALTER TABLE "Publication" DROP CONSTRAINT "Publication_userId_fkey";

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
