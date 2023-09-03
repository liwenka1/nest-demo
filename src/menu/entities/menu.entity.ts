import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('sys_menu')
export class Menu {
  @ApiProperty({ description: 'id' })
  @PrimaryColumn()
  id: number

  @ApiProperty({ description: '名称' })
  @Column({ nullable: true })
  name: string

  @ApiProperty({ description: '路径' })
  @Column({ nullable: true })
  path: string

  @ApiProperty({ description: '图标' })
  @Column({ nullable: true })
  icon: string

  @ApiProperty({ description: '描述' })
  @Column({ nullable: true })
  description: string

  // @ApiProperty({ description: '子菜单列表' })
  // @Column({ type: 'json', nullable: true })
  // children: Menu[]

  @ApiProperty({ description: '父级菜单id' })
  @Column({ nullable: true })
  pid: number

  @ApiProperty({ description: '页面路径' })
  @Column({ nullable: true })
  pagePath: string

  @ApiProperty({ description: '排序号码' })
  @Column({ nullable: true })
  sortNum: string
}
