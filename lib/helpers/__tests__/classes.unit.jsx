import renderer from 'react-test-renderer';
import classes from '../classes';

describe('classes', () => {
  it('接受1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受 undefined null, 结果不会出现undefined null', () => {
    const result = classes('a', undefined, null);
    expect(result).toEqual('a');
  });
  it('接受0个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});