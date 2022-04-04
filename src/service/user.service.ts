import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';

@Provide()
export class UserService {

  @InjectEntityModel(User)
  UserModel: Repository<User>;

  // save
  async saveUser() {
    // create a entity object
    let user = new User();
    user.id = 666;
    user.name = 'Me and Bears';
    user.sex = 'Man';
    user.phone = '18588888888';
    user.age = 1;

    // save entity
    const userResult = await this.UserModel.save(user);

    // save success
    console.log('User id = ', userResult.id);
  }
}