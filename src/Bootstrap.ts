import 'dotenv/config'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'
import { UserController } from './User.controller'

/* --- Do this as last! --- */

// NOTE: Make sure to do a named export of your userController

const repository = new UserRepository()
const service = new UserService(repository)
export const userController = new UserController(service)
