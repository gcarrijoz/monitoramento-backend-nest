/*
  Warnings:

  - A unique constraint covering the columns `[room_id]` on the table `patients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "patients_room_id_key" ON "patients"("room_id");
