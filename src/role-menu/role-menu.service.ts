import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RoleMenu } from './entities/role-menu.entity'
import { Repository } from 'typeorm'

@Injectable()
export class RoleMenuService {
  // 通过构造函数注入
  constructor(
    @InjectRepository(RoleMenu)
    private readonly roleMenuRepositroy: Repository<RoleMenu>
  ) {}

  /**
   *
   * @returns 列表查询
   */
  findByFlag(roleId: number) {
    return this.roleMenuRepositroy.find({ where: { role_id: roleId } })
  }
}
