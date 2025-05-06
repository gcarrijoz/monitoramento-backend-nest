-- CreateTable
CREATE TABLE "event_logs" (
    "id" SERIAL NOT NULL,
    "sensor_id" INTEGER NOT NULL,
    "event_description" TEXT NOT NULL,
    "event_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "event_logs" ADD CONSTRAINT "event_logs_sensor_id_fkey" FOREIGN KEY ("sensor_id") REFERENCES "devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
