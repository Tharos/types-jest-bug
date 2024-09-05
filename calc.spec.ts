import {add} from "./calc";

import {jest} from '@jest/globals';

describe("Addition", () => {
    test("Two integers", () => {

        console.log(jest.spyOn);

        expect(add(1, 2)).toBe(3);
    });
});