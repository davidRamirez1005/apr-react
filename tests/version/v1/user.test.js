import { user } from "../../../version/v1/user"

describe('test version/v1/user', () => {
    test('se esperaba un hola mundo ', () => {
        let res = user();
        expect(res).toBe("hola mundo")
    })
    test('se esperaba un String ', () => {
        expect(typeof user()).toBe("string")
    })
})