import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hvuhatgjdflyzmrmherw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dWhhdGdqZGZseXptcm1oZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5Mjk3MDEsImV4cCI6MTk3NjUwNTcwMX0.gqb-bYuPt5LuTxznb_KORg6ztYSxDZBDuP4lLcaLeMs"
);
