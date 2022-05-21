import { CollectionReference } from '@google-cloud/firestore'
import { Inject, Injectable } from '@nestjs/common'
import { IdParams } from 'src/dto/base.dto'
import { CreateUserDto, UpdateUserDto } from 'src/dto/users.dto'
import { UserModel } from './user.model'

@Injectable()
export class UserService {
  constructor(
    @Inject(UserModel.collectionName)
    private usersCollection: CollectionReference<UserModel>,
  ) {}

  async create(input: CreateUserDto): Promise<void> {
    await this.usersCollection.add(input)
  }

  async findAll(): Promise<UserModel[]> {
    const snapshot = await this.usersCollection.get()
    const users: UserModel[] = []
    snapshot.forEach(doc => users.push({ ...doc.data(), id: doc.id }))
    return users
  }

  async findById({ id }: IdParams): Promise<UserModel> {
    return { ...(await this.usersCollection.doc(id).get()).data(), id }
  }

  async update({ id }: IdParams, input: UpdateUserDto): Promise<void> {
    await this.usersCollection.doc(id).update(input)
  }

  async delete({ id }: IdParams): Promise<void> {
    await this.usersCollection.doc(id).delete()
  }
}
