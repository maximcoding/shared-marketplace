export interface ISupportTicket {
  _id?: string;
  userId: string;
  message: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
