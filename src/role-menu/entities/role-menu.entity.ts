import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('sys_role_menu')
export class RoleMenu {
  @ApiProperty({ description: 'role_id' })
  @PrimaryColumn()
  role_id: number

  @ApiProperty({ description: 'menu_id' })
  @Column({ nullable: true })
  menu_id: number
}
