import { HelloRemote } from '../services/hello.remote';
import { GOOD_BYE_MSG } from './constants';

describe('Hello remote', () => {
    let helloRemote: any;

    beforeAll(() => {
        helloRemote = new HelloRemote();
    });

    it('should check fixedTerm has value of 2 when starts', () => {
        expect(helloRemote.fixedTerm).toEqual(2);
    });

    it('should return string + number when method sayGoodBye is called', () => {
        const input = 555;
        const expectedOutput = GOOD_BYE_MSG + (input + helloRemote.fixedTerm);

        expect(helloRemote.sayGoodBye(input)).toEqual(expectedOutput);
    });

    it('should increase 2 when receives any input', () => {
        const input = 2;
        const expectedIncrease = 2;

        expect(helloRemote.calculate(input)).toEqual(input + expectedIncrease);
    });

    it('should return -1 when input is not an integer', () => {
        expect(helloRemote.calculate('r')).toEqual(-1);
    });
});
