import { IUser, UserCreationParams } from "@/src/database/models/user.model";
import { UserRepository } from "@/src/database/repositories/user.repositories";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAllUsers(): Promise<IUser[]>{
        try {
            return await this.userRepository.getAllUsers();
        } catch (error) {
            console.log('Can not fetch all user', error)
            throw new Error('Failed to fetch all user', )
        }
    }

    public async createUser(params: UserCreationParams): Promise<IUser> {
        try {
            return await this.userRepository.createUser(params);
        } catch (error) {
            console.log('Error create user:', error);
            throw new Error('Failed to create user');
        }
    }

}