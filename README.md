# time-inspector

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/time-inspector.svg?branch=master)](https://travis-ci.org/oprogramador/time-inspector
)

[![NPM status](https://nodei.co/npm/time-inspector.png?downloads=true&stars=true)](https://npmjs.org/package/time-inspector
)

NodeJS time inspector allowing very easy detection of bottlenecks.

## install
`npm i --save-dev time-inspector`

## usage
```
const time = require('time-inspector').default;

time(); // for the first call it returns 0
foo();
console.log(time()); // it returns the time (in seconds with nanoseconds precision) elapsed from the previous call
bar();
console.log(time()); // again it returns the time elapsed from the previous call
```
