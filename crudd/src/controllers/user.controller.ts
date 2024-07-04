import { Controller, Route, Post, Get, Body} from 'tsoa';
import { UserService } from '@/src/services/users.service';
import { IUser, UserCreationParams } from '@/src/database/models/user.model';

@Route('/v1/users')
export class UserController extends Controller {
  private userService: UserService = new UserService();


  // get all data
  @Get('/')
  public async getAllUsers(): Promise<IUser[] | undefined> { // Update return type
    try {
      return await this.userService.getAllUsers();
    } catch (error) {
      console.log('Cannot get user');
      return undefined
    }
  }


// create data
@Post('/') 
public async createNewUser(@Body() requestBody: UserCreationParams): Promise<IUser> {
  try {
    return await this.userService.createUser(requestBody);
  } catch (error) {
    console.log('Failed to create user: ', error);
    throw new Error ('Failed to create user');
  }
}

}