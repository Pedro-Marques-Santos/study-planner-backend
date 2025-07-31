import { IStudySessionRepository } from "./implementation/istudySession.repository";

import { prisma } from "../../../shared/infra/database/prisma.service";
import { ICreateStudySessionDTO } from "../dtos/studySession.dto";

export class StudySessionRepository implements IStudySessionRepository {
  async addStudySessions({
    taskId,
    studySessions,
  }: ICreateStudySessionDTO): Promise<void> {
    await prisma.studySession.createMany({
      data: studySessions.map((session) => ({
        taskId,
        date: session.date,
        duration: session.duration,
      })),
    });
  }
}
