import expect from 'time-inspector/tests/expect';
import time from 'time-inspector';

describe('index', () => {
  it('returns time as default', () => {
    expect(time).to.be.a('function');
  });
});
