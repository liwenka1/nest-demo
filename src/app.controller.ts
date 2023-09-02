import { Controller, Get, Version } from '@nestjs/common'
import { AppService } from './app.service'
import { CustomException } from './common/exceptions/custom.business'
import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {}

  @Get()
  get() {
    return this.appService.getHello()
  }

  @Get()
  @Version('1')
  getHello() {
    return 'v1'
  }

  @Get('err')
  getErr() {
    throw new CustomException('自定义异常抛出')
    return this.appService.getHello()
  }
}
