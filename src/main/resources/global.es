// https://stackoverflow.com/questions/9107240/1-evalthis-vs-evalthis-in-javascript
const global = (1, eval)('this'); // eslint-disable-line no-eval
global.global = global;
global.globalThis = global;
global.frames = global;
global.self = global;
global.window = global;
module.exports = global;
