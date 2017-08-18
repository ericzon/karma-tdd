import { HelloService } from '../services/hello.service';
import { MockHelloRemote } from './mocks/hello.remote.mock.spec';
import { HELLO_WORLD_MSG, GOOD_BYE_MSG } from './constants';

describe('Hello service', () => {
    let helloService: any;
    let mockHelloRemote: any;
    let spies: any;

    beforeAll(() => {
        mockHelloRemote = new MockHelloRemote();
        helloService = new HelloService(mockHelloRemote);

        initSpies();
    });

    it('should check service is not undefined when constructor is called',() => {
        expect(helloService.service).toBeDefined();
    });

    it('should return "' + HELLO_WORLD_MSG + '" when method sayHello is called', () => {
        // expect(true).toBeTruthy(); // don't remove
        expect(helloService.sayHello()).toEqual(HELLO_WORLD_MSG);
    });

    it('should return "' + GOOD_BYE_MSG + '" + number when method sayGoodBye from service is called', () => {
        const fixedTerm = 2;
        const input = 666;
        const expectedOutput = GOOD_BYE_MSG + (input + fixedTerm);

        spies.helloRemote.sayGoodBye.and.callFake((num: number) => GOOD_BYE_MSG + (num + fixedTerm));
        expect(helloService.sayGoodBye(input)).toEqual(expectedOutput);
    });

    function initSpies() {
        spies = {
            helloRemote: {
                sayGoodBye: spyOn(mockHelloRemote, 'sayGoodBye')
            }
        }
    }
});
