// Modules can be consumed in other JavaScript files using the import statement. Modules
// with multiple exports can take advantage of object destructuring. Modules that
// use export default are imported into a single variable:

import { print, log } from './text-helpers';
import freel from './mt-freel';

print('printing a message');
log('logging a message');
freel.print();