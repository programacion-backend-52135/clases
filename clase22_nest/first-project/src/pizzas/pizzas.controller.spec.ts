import { Test, TestingModule } from '@nestjs/testing';
import { PizzasController } from './pizzas.controller';
import { PizzasService } from './pizzas.service';

describe('PizzasController', () => {
  let controller: PizzasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzasController],
      providers: [PizzasService],
    }).compile();

    controller = module.get<PizzasController>(PizzasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
