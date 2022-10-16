export abstract class Abstract {
  protected tableName: string

  constructor (tableName: string) {
    this.tableName = tableName
  }

  getNotFoundMessage () {
    return `${this.tableName} not found`
  }

  getConflictMessage () {
    return `${this.tableName} already exist`
  }

  getUpdateMessage () {
    return `${this.tableName} successfully updated`
  }

  getDeleteMessage () {
    return `${this.tableName} successfully deleted`
  }
}
