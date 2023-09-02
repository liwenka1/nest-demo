import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
@Injectable()
export class UserService {
  // 俩种注入方式
  // 通过构造函数注入
  constructor(
    @InjectRepository(User) private readonly userRepositroy: Repository<User>
  ) {}
  // 直接注入
  // @InjectRepository(User)
  // private userRepositroy: Repository<User>;

  /**
   *
   * @returns 列表查询
   */
  list() {
    return this.userRepositroy.find()
  }

  /**
   *
   * @param user
   * @returns 新增用户
   */
  save(user: User) {
    return this.userRepositroy.save(user)
  }

  /**
   *
   * @param user
   * @returns 更新
   */
  update(user: User) {
    return this.userRepositroy.update({ id: user.id }, user)
  }

  /**
   *
   * @param user
   * @returns 删除
   */
  delete(id: User['id']) {
    return this.userRepositroy.delete({ id })
  }
}
