/*
  Warnings:

  - A unique constraint covering the columns `[floor,sector,number]` on the table `rooms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "rooms_floor_sector_number_key" ON "rooms"("floor", "sector", "number");
