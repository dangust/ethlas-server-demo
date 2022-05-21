import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { IdParams } from '../dto/base.dto'
import { CreateUserDto, UpdateUserDto } from '../dto/users.dto'
import { UserModel } from './user.model'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() input: CreateUserDto): Promise<void> {
    return this.userService.create(input)
  }

  @Get()
  getAllUsers(): Promise<UserModel[]> {
    return this.userService.findAll()
  }

  @Get('/:id')
  getUserById(@Param() params: IdParams): Promise<UserModel> {
    return this.userService.findById(params)
  }

  @Put('/:id')
  updateUser(@Param() params: IdParams, @Body() input: UpdateUserDto): Promise<void> {
    return this.userService.update(params, input)
  }

  @Delete('/:id')
  deleteUser(@Param() params: IdParams): Promise<void> {
    console.log(params)

    return this.userService.delete(params)
  }
}
