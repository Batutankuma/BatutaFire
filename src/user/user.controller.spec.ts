import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:[UserService,PrismaService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('List des utilisateurs',async () => {
    const users = await controller.getUsers();
    expect(users).toBeDefined();
    expect(users).toEqual([])
  });
});
