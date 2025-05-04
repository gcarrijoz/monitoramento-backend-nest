-- AlterTable
ALTER TABLE "patients" ADD COLUMN     "room_id" INTEGER;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
