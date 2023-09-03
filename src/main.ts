import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { VersioningType } from '@nestjs/common'
import { generateDocmment } from './doc'
import { getConfig } from './common/utils/ymlConfig'
import { logger } from './common/middleware/logger.middleware'
import { initializeTransactionalContext } from 'typeorm-transactional'

declare const module: any

async function bootstrap() {
  // 事务
  initializeTransactionalContext()

  // 创建实例
  const app = await NestFactory.create(AppModule)

  // api多版本控制
  app.enableVersioning({
    type: VersioningType.URI
  })

  // 日志
  app.use(logger)
  // 允许跨域访问的配置
  app.enableCors()
  // 文档支持
  generateDocmment(app)

  // 启动项目
  await app.listen(getConfig('HTTP').port)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
