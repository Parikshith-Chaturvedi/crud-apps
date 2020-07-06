export interface Booking {
  id: string;
  dates: Date;
  booked?: boolean;
  slots: Array<any>;
  state?: "booked" | "cancelled" | null;
}
