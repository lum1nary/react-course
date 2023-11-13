import {guessBoolean} from '../guessBoolean'

describe('guessBoolean', () => {
    describe('positive', () => {
        it.each([
            [true, 'boolean'],
            ['true', 'string'],
            ['True', 'string'],
            ['TRUE', 'string'],
            ['yes', 'string'],
            [1, 'number'],
            [[false], 'array of boolean'],
            [{anyField: false}, 'not empty object']
        ])('should  return true if %p with type %p', (param: any, desc:string) => {
            expect(guessBoolean(param)).toBe(true);
        })
    })

    describe('negative', () => {
        it.each([
            [false, 'boolean'],
            ['false', 'string'],
            [{}, 'object'],
            [[], 'array'],
            [0, 'number'],
            ['asdasfq', 'string'],

        ])('should  return false if %p with type %p', (param: any, desc:string) => {
            expect(guessBoolean(param)).toBe(false);
        })
    })
})