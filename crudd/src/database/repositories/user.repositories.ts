import User, {IUser} from '@/src/database/models/user.model'

export class UserRepository {

    // find all user
   public async getAllUsers(): Promise<IUser[]> {
    return User.find();
   }

   // create user POST 
   public async createUser(data: IUser): Promise<IUser> {
    try {
        const newUser = new User(data);
        return newUser.save();
    } catch (error) {
        console.error(`Error create user: `, error);
        throw new Error('Failed to create user');
    }
   }

}