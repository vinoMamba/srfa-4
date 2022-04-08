import {foo} from "./sort";
import {expect, test} from "vitest";

test('foo', () => {
    expect(foo()).toEqual('foo');
});
