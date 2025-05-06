-- AlterTable
ALTER TABLE "event_logs" ADD COLUMN     "patient_id" INTEGER,
ADD COLUMN     "room_id" INTEGER;

-- AddForeignKey
ALTER TABLE "event_logs" ADD CONSTRAINT "event_logs_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_logs" ADD CONSTRAINT "event_logs_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
