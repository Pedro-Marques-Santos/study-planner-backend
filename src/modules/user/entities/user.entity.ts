export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly idGoogle: string,
    public name: string,
    public email: string,
    public imgProfile?: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
