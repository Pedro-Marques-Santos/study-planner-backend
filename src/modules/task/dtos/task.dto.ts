export interface ICreateTaskDTO {
  name: string;
  about?: string;
  link?: string;
  status: "NO_START" | "IN_PROGRESS" | "COMPLETED";
  startAt: Date;
  userId: string;
  categoryIds: string[];
  studySessions?: {
    date: Date;
    duration: number;
  }[];
}
