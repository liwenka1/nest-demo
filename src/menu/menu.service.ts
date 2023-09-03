import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Menu } from './entities/menu.entity'
import { Repository } from 'typeorm'

@Injectable()
export class MenuService {
  // 通过构造函数注入
  constructor(
    @InjectRepository(Menu) private readonly menuRepositroy: Repository<Menu>
  ) {}

  /**
   *
   * @returns 列表查询
   */
  list() {
    return this.menuRepositroy.find()
  }
}
