import { HelloService } from '../services/hello.service';

export class HelloComponent {
    constructor(private service: HelloService) { }

    public sayHello(): string {
        return this.service.sayHello();
    }

    public sayGoodBye(): string {
        return this.service.sayGoodBye(111);
    }
}
