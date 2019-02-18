import expect from 'time-inspector/tests/expect';
import time from 'time-inspector/time';

/* eslint-disable no-empty */

describe('time', () => {
  it('returns elapsed time', () => {
    expect(time()).to.equal(0);
    time();
    time();
    time();
    time();
    expect(time()).to.within(0, 0.0001);
    time();
    expect(time()).to.within(0, 0.0001);
    time();
    for (let i = 0; i < 10000000; i++) {
    }
    expect(time()).to.within(0.01, 0.2);
    time();
    expect(time()).to.within(0, 0.0001);
    time();
    expect(time()).to.within(0, 0.0001);
    time();
    for (let i = 0; i < 1000000; i++) {

    }
    expect(time()).to.within(0.001, 0.02);
  });
});
