import User from '#models/user'

export type UserWithoutPassword = Omit<User, 'password'>
