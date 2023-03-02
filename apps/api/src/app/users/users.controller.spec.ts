import { UpdateUserDto } from './dto/update-user.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const userEntityList: UserEntity[] = [
  new UserEntity({ name: 'John Create', email: 'john@john.com', password: 'password123', }),
  new UserEntity({ name: 'John2', email: 'john2@example.com', password: 'password2', }),
  new UserEntity({ name: 'John3', email: 'john3@example.com', password: 'password3', }),
];

const newUserEntity = new UserEntity ({ name: 'John Create', email: 'john@john.com', password: 'password123', });
const updateUserEntity = new UserEntity ({ name: 'John Create', email: 'johnupdate@john.com', password: 'password-update123', })
describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(userEntityList),
            findOne: jest.fn().mockResolvedValue(newUserEntity),
            save: jest.fn().mockResolvedValue(userEntityList[0]),
            update: jest.fn().mockResolvedValue(updateUserEntity),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        }
      ],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });
  describe('Teste para o endpoint de findAll em Users', () => {
    it('should return an array of users list entity successfully', async () => {
      //Arrange
      const result = await userController.findAll();
      //Act
      //Assert
      //jest.spyOn(userService, 'findAll').mockImplementation(() => result);
      expect(await userController.findAll()).toBe(result);
      expect(typeof result).toEqual('object');
      expect(result.length).toEqual(3);
    });
    it('should throw an error when the service throws an error', () => {
      //Arrange
      jest.spyOn(userService, 'findAll').mockRejectedValueOnce(new Error('Error'));
      //Act
      //Assert
      expect(userController.findAll()).rejects.toThrowError();
    });
  });
  describe('Teste para o endpoint de create em Users', () => {
    const createUserDto = {
      name: 'John Create',
      email: 'john@john.com',
      password: 'password123',
    }
    it('should return a user entity successfully', async () => {
      //Arrange
     
      const result = await userController.create(createUserDto);
     
      expect(result).toEqual(newUserEntity);
      expect(typeof result).toEqual('object');
      expect(userService.create).toHaveBeenCalledTimes(1);
      expect(userService.create).toHaveBeenCalledWith(createUserDto);

    });
    it('should throw an error userController', () => {
      //Arrange
      jest.spyOn(userService, 'create').mockRejectedValueOnce(new Error());
      //Act
      //Assert
      expect(userController.create(createUserDto)).rejects.toThrowError();
    });

    
  });
  describe('Teste para o endpoint de findOne em Users', () => {  
     it('should return a user entity successfully', async () => {
       //Arrange
       const result = await userController.findOne('1');
       //Act
       //Assert
       //jest.spyOn(userService, 'findOne').mockImplementation(() => result);
       expect(typeof result).toEqual('object');
       expect(result).toEqual(userEntityList[0]);
       expect(await userController.findOne('1')).toBe(result);
       //expect(userService.findOne).toHaveBeenCalledTimes(1);
       //expect(userService.findOne).toHaveBeenCalledWith('1');
     });
     it('should throw an error when the service throws an error', () => {
       //Arrange
       jest
        .spyOn(userService, 'findOne')
        .mockRejectedValueOnce(new Error('Error'));
        //Act
        //Assert
        expect(userController.findOne('1')).rejects.toThrowError();
      
     });
  }); 
  describe('Teste para o endpoint de update em Users', () => {
    const updateUserDto: UpdateUserDto = {
      name: 'John Create', 
      email: 'john2@example.com', 
      password: 'password2'
    };
    it('should return a user entity successfully', async () => {
      //Arrange
      const result = await userController.update('1', updateUserDto);
      //Act
      //Assert
      //jest.spyOn(userService, 'update').mockImplementation(() => result);
      expect(result).toEqual(result);
      expect(typeof result).toEqual('object');
      expect(userService.update).toHaveBeenCalledTimes(1);
      expect(userService.update).toHaveBeenCalledWith('1', updateUserDto);
    });
    it('should throw an error when the service throws an error', () => {
      //Arrange
      jest.spyOn(userService, 'update').mockRejectedValueOnce(new Error('Error'));
      //Assert
      expect(userController.update('1', updateUserDto)).rejects.toThrowError();
    });
  }
  );
  
  describe('Teste para o endpoint de delete em Users', () => {

    it('should return a user entity successfully', async  () => {
      //Arrange
      const result = await userController.deleteOne('1');
      //Act
      //Assert
      //jest.spyOn(userService, 'deleteOne').mockImplementation(() => result);
      expect(await userController.deleteOne('1')).toBe(result);
      expect(result).toBeUndefined();
      //expect(typeof result).toEqual('object');
    });
    it('should throw an error when the service throws an error', () => {
      //Arrange
      //jest.spyOn(userService, 'remove').mockRejectedValueOnce(new Error('Error'));
      //Act
      //Assert
      expect(userController.deleteOne('1')).rejects.toThrowError();
    });
  }
  );
});
