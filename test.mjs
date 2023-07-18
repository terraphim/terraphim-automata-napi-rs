import { findMatched, replaceAllStream } from './index.js'

console.log('Native matcher', findMatched(['let', 'it', 'be'], 'let it be be not found'))
console.log('Native replacer', replaceAllStream(['let', 'it', 'be'], ['-let', '-it', '-be'], 'let it be be not found'))