export class TaskEntity {
  constructor(
    public readonly id: string,
    public name: string,
    public status: "NO_START" | "IN_PROGRESS" | "COMPLETED",
    public startAt: Date,
    public readonly userId: string,

    public readonly createdAt: Date,
    public readonly updatedAt: Date,

    public about?: string,
    public link?: string,

    public taskCategories?: {
      categoryId: string;
      category: {
        id: string;
        name: string;
      };
    }[],

    public studySessions?: {
      id: string;
      date: Date;
      duration: number;
    }[],
  ) {}
}
