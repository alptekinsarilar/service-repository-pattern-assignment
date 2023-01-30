import { UserRequestDto } from './Database'
import { UserRepository } from './User.repository'

// NOTE: Make userRepo public and not private. This is required for the tests!
export class UserService {
  constructor(public readonly userRepo: UserRepository) {}

  async createUser(username: string) {
    return this.userRepo.createUser(username)
  }
}
