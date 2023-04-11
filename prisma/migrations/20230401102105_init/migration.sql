/*
  Warnings:

  - Made the column `name` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dob` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "dob" SET NOT NULL;
