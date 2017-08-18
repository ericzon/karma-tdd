import { HelloComponent } from '../components/hello.component';
import { MockHelloService } from './mocks/hello.service.mock.spec';
import { HELLO_WORLD_MSG, GOOD_BYE_MSG } from './constants';

describe('Hello component', () => {
    let mockHelloService: any, helloComponent: any, spies: any;

    beforeAll(() => {
        mockHelloService = new MockHelloService();
        helloComponent = new HelloComponent(mockHelloService);

        initSpies();
    });

    it('should check service is not undefined when constructor is called',() => {
        expect(helloComponent.service).toBeDefined();
    });

    // Spies

    it('should return "Hello world" when method service sayHello is called', () => {
        spies.helloService.sayHello.and.callFake(() => HELLO_WORLD_MSG);

        expect(helloComponent.sayHello()).toEqual(HELLO_WORLD_MSG);
    });

    it('should return "Good Bye + number" when method service sayGoodBye is called', () => {
        const serviceOutput = GOOD_BYE_MSG + '113';

        spies.helloService.sayGoodBye.and.callFake(() => serviceOutput);
        expect(helloComponent.sayGoodBye()).toEqual(serviceOutput);
    });

    function initSpies() {
        spies = {
            helloService: {
                sayHello: spyOn(mockHelloService, 'sayHello'),
                sayGoodBye: spyOn(mockHelloService, 'sayGoodBye')
            }
        }
    }
});

