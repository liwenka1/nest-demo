import { Injectable } from '@nestjs/common'
import { Repository, EntityManager } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { UserDTO } from './dto/user.dto'
import * as crypto from 'crypto'
import { Menu } from '@/menu/entities/menu.entity'
import { RoleMenu } from '@/role-menu/entities/role-menu.entity'
import { Role } from '@/role/entities/role.entity'
@Injectable()
export class UserService {
  // 俩种注入方式
  // 通过构造函数注入
  constructor(
    @InjectRepository(User) private readonly userRepositroy: Repository<User>,
    @InjectRepository(Menu) private readonly menuRepositroy: Repository<Menu>,
    @InjectRepository(Role) private readonly roleRepositroy: Repository<Role>,
    @InjectRepository(RoleMenu)
    private readonly roleMenuRepositroy: Repository<RoleMenu>,
    private entityManager: EntityManager
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

  async login(userDTO: UserDTO) {
    const password = crypto
      .createHash('md5')
      .update(userDTO.password)
      .digest('hex')
    const userInfo = await this.userRepositroy.findOne({
      where: { username: userDTO.username, password: password }
    })
    const role = userInfo.role
    const roleId = (
      await this.roleRepositroy.findOne({ where: { flag: role } })
    ).id
    const menuItems = await this.entityManager
      .createQueryBuilder(RoleMenu, 'roleMenu')
      .select('roleMenu.menu_id', 'menu_id')
      .where('roleMenu.role_id = :roleId', { roleId })
      .getRawMany()

    const menuIds = menuItems.map((menuItem) => menuItem.menu_id)
    const menus = []
    for (const id of menuIds) {
      const menu = await this.menuRepositroy.findOne({ where: { id: id } })
      menus.push(menu)
    }
    return { ...userInfo, menus: menus }
  }
}
