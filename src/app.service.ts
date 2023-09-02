import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'hello',
      age: 15,
      type: 'world'
    }
  }

  getHello1() {
    return {
      name: 'hello1',
      type: 'world1'
    }
  }
}
