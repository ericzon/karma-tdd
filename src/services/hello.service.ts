import { HelloRemote} from './hello.remote';

export class HelloService {

    constructor(private service: HelloRemote) { }

    public sayHello() {
        return 'Hello world';
    }

    public sayGoodBye(num: number) {
        return this.service.sayGoodBye(num);
    }
}
