import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('sys_role')
export class Role {
  @ApiProperty({ description: 'id' })
  @PrimaryColumn()
  id: number

  @ApiProperty({ description: '名称' })
  @Column({ nullable: true })
  name: string

  @ApiProperty({ description: '描述' })
  @Column({ nullable: true })
  description: string

  @ApiProperty({ description: 'flag' })
  @Column({ nullable: true })
  flag: string
}
