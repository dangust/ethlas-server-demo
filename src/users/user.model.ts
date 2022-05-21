export class UserModel {
  static collectionName = 'users'

  id?: string
  title: string
  firstName: string
  lastName: string
  email: string
  role: string
  password: string
  dateCreated?: Date
  dateUpdated?: Date
}
