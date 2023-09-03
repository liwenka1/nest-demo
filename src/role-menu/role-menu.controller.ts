import { Controller } from '@nestjs/common'
import { RoleMenuService } from './role-menu.service'

@Controller('role-menu')
export class RoleMenuController {
  constructor(private readonly roleMenuService: RoleMenuService) {}
}
