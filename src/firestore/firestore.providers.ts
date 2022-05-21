import { UserModel } from 'src/users/user.model'

export const FirestoreDatabaseProvider = 'firestoredb'
export const FirestoreOptionsProvider = 'firestoreOptions'
export const FirestoreCollectionProviders: string[] = [UserModel.collectionName]
