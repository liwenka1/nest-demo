import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Role } from './entities/role.entity'
import { Repository } from 'typeorm'

@Injectable()
export class RoleService {
  // 通过构造函数注入
  constructor(
    @InjectRepository(Role) private readonly roleRepositroy: Repository<Role>
  ) {}

  /**
   *
   * @returns 列表查询
   */
  findByFlag(flag: string) {
    return this.roleRepositroy.find({ where: { flag: flag } })
  }
}
