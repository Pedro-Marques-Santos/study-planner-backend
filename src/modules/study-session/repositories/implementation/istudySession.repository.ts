import { ICreateStudySessionDTO } from "../../dtos/studySession.dto";

export interface IStudySessionRepository {
  addStudySessions({
    taskId,
    studySessions,
  }: ICreateStudySessionDTO): Promise<void>;
}
