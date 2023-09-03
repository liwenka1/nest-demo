import { Menu } from '@/menu/entities/menu.entity'

export class UserDTO {
  id: number
  username: string
  password: string
  nickname: string
  avatarUrl: string
  token: string
  role: string
  menus: Menu[]
}
