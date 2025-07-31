export class StudySessionEntity {
  constructor(
    public readonly id: string,
    public readonly date: Date,
    public readonly duration: number,
  ) {}
}
