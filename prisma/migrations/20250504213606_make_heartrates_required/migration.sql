/*
  Warnings:

  - Made the column `min_heart_rate` on table `patients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_heart_rate` on table `patients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "patients" ALTER COLUMN "min_heart_rate" SET NOT NULL,
ALTER COLUMN "min_heart_rate" SET DEFAULT 60,
ALTER COLUMN "max_heart_rate" SET NOT NULL,
ALTER COLUMN "max_heart_rate" SET DEFAULT 100;
