import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices'
import { CriarRegistroDto } from './dtos/criar-registro-dto';
@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  private logger = new Logger(AppController.name)
  private clienteAdminBackend: ClientProxy
  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
          queue: 'admin-backend'
        }
    })
  }

  @Post('registro')
  @UsePipes(ValidationPipe)
  async criarEmpresa(@Body() criarRegistroDto: CriarRegistroDto){
    return await this.clienteAdminBackend.emit('criar-registro', criarRegistroDto)
  }

}