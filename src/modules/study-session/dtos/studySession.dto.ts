interface ICreateStudySessionDTO {
  taskId: string;
  studySessions: {
    date: Date;
    duration: number;
  }[];
}

export { ICreateStudySessionDTO };
