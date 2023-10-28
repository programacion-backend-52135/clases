import { MiddlewareConsumer, Module, NestModule, Req, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzasModule } from './pizzas/pizzas.module';
import FirstMiddleware from './middleware/first.middleware';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://admin:admin@127.0.0.1:27017', {dbName: 'clase22_52'}),
    PizzasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirstMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL})
  }
}
