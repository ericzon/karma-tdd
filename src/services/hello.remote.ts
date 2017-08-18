export class HelloRemote {

    private fixedTerm = 2;

    public sayGoodBye(num: number) {
        return `Good Bye ${ this.calculate(num) }`;
    }

    private calculate(n: any) {
        return !isNaN(parseInt(n)) ? this.fixedTerm + n : -1;
    }
}
