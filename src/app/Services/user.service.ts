import { User } from '../models/User.model';
import { Subject } from 'rxjs';


export class UserService {
    private users: User[]= [
        {
            firstName:'James',
            lastName: 'Smith',
            email: 'james@gmail.com',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'la dégustation du café'
            ]
        }
    ];
    
    userSubject = new Subject<any[]>();

    emitUsers(){
        // il va appeler la méthode next et il va émettre une copie de USer
        this.userSubject.next(this.users.slice());
    }
    addUser(user:User) {
        this.users.push(user);
        this.emitUsers();
        
    }
}