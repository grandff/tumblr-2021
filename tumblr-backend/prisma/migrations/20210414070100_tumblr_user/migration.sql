/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[blogUrl]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blogUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifyYn` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "blogUrl" TEXT NOT NULL,
ADD COLUMN     "verifyYn" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.blogUrl_unique" ON "User"("blogUrl");
