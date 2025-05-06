-- DropForeignKey
ALTER TABLE "event_logs" DROP CONSTRAINT "event_logs_sensor_id_fkey";

-- AlterTable
ALTER TABLE "event_logs" ADD COLUMN     "mac_address" TEXT,
ALTER COLUMN "sensor_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "event_logs" ADD CONSTRAINT "event_logs_sensor_id_fkey" FOREIGN KEY ("sensor_id") REFERENCES "devices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
