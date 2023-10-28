import { Test, TestingModule } from '@nestjs/testing';
import { PizzasService } from './pizzas.service';

describe('PizzasService', () => {
  let service: PizzasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzasService],
    }).compile();

    service = module.get<PizzasService>(PizzasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
