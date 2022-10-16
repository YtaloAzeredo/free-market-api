export interface IRepository {
  getNotFoundMessage(): string
  getConflictMessage(): string
  getUpdateMessage(): string
  getDeleteMessage(): string
}
