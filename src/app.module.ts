import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { BaseExceptionFilter } from './common/exceptions/base.exception.filter'
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter'
import { UserModule } from './user/user.module'
import { getConfig } from './common/utils/ymlConfig'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { addTransactionalDataSource } from 'typeorm-transactional'
import { MenuModule } from './menu/menu.module'
import { RoleModule } from './role/role.module'
import { RoleMenuModule } from './role-menu/role-menu.module'

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [getConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          ...getConfig('MYSQL_CONFIG'),
          namingStrategy: new SnakeNamingStrategy()
        }
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed')
        }
        return addTransactionalDataSource(new DataSource(options))
      }
    }),
    MenuModule,
    RoleModule,
    RoleMenuModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // 全局拦截器
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    },
    {
      provide: APP_FILTER,
      useClass: BaseExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ]
})
export class AppModule {}
