import { IsEnum, IsNotEmpty, IsString } from 'class-validator'

export enum TitlesEnum {
  Mr = 'Mr',
  Mrs = 'Mrs',
  Miss = 'Miss',
  Ms = 'Ms',
}

export enum RolesEnum {
  User = 'User',
  Admin = 'Admin',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsEnum(TitlesEnum)
  @IsNotEmpty()
  title: TitlesEnum

  @IsString()
  @IsNotEmpty()
  email: string

  @IsEnum(RolesEnum)
  @IsNotEmpty()
  role: RolesEnum

  @IsString()
  @IsNotEmpty()
  password: string
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsEnum(TitlesEnum)
  @IsNotEmpty()
  title: TitlesEnum

  @IsString()
  @IsNotEmpty()
  email: string

  @IsEnum(RolesEnum)
  @IsNotEmpty()
  role: RolesEnum

  @IsString()
  @IsNotEmpty()
  password: string
}
