import renderer from 'react-test-renderer';
import classes, {scopedClassMaker} from '../classes';

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

describe('scopedClassMaker', () => {
  it('x', () => {
    const sc = scopedClassMaker('bd-layout');
    expect(sc('')).toEqual('bd-layout');
    expect(sc('x')).toEqual('bd-layout-x');
    expect(sc({y: true, z: false})).toEqual('bd-layout-y');
    expect(sc({y: true, z: true})).toEqual('bd-layout-y bd-layout-z');
    expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('bd-layout-y bd-layout-z red');
  });
});