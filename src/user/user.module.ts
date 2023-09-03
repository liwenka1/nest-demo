import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from './entities/user.entity'
import { Menu } from '@/menu/entities/menu.entity'
import { Role } from '@/role/entities/role.entity'
import { RoleMenu } from '@/role-menu/entities/role-menu.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Menu]),
    TypeOrmModule.forFeature([Role]),
    TypeOrmModule.forFeature([RoleMenu])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
