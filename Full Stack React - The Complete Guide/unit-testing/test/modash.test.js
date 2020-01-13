import Modash from "../function/Modash";

describe('Modash', () => {
   it('`truncate()`: truncates a string', () => {
       const string = 'there was one catch, and that was CATCH-22';
       expect(
           Modash.truncate(string, 19)
       ).toEqual('there was one catch...');
   })
});