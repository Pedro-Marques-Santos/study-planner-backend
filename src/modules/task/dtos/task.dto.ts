import { PeriodTypeTask } from "../utils/interfaces";

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

export interface IGetDateFilterByPeriodDTO {
  userId: string;
  period: PeriodTypeTask;
}
