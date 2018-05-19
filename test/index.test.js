const strGetNum = require('../dist/index.min');

test(`从字符串中提取出数字部分`, () => {
    expect(strGetNum()).toEqual('');
    expect(strGetNum('')).toEqual('');
    expect(strGetNum('    ')).toEqual('');
    expect(strGetNum('从字符串中提取出数字部分')).toEqual('');
    expect(strGetNum(0)).toEqual('0');
    expect(strGetNum(-0)).toEqual('0');
    expect(strGetNum('-0')).toEqual('0');
    expect(strGetNum(1)).toEqual('1');
    expect(strGetNum(-1)).toEqual('-1');
    expect(strGetNum('10.2')).toEqual('10.2');
    expect(strGetNum('-10.2')).toEqual('-10.2');
    expect(strGetNum('-0010.2')).toEqual('-10.2');
    expect(strGetNum('-0.010.2')).toEqual('-0.010');
    expect(strGetNum('从字符串中提取出数1字部分')).toEqual('1');
    expect(strGetNum('-从字符串中提取出数1字部分')).toEqual('-1');
    expect(strGetNum('从字符串中提取出数1字部1分')).toEqual('1.1');
    expect(strGetNum('-从字符串中提取出数1字部1分')).toEqual('-1.1');
    expect(strGetNum('.-.0...0.1.0...2.')).toEqual('0.0');
    expect(strGetNum('-.0...0.1.0...2.')).toEqual('0.0');
    expect(strGetNum('-.0.1..0.1.0...2.')).toEqual('-0.1');
    expect(strGetNum('-00.00000000')).toEqual('0.00000000');
    expect(strGetNum('-00.00000001')).toEqual('-0.00000001');
    expect(strGetNum('-190.')).toEqual('-190');
    expect(strGetNum('190.')).toEqual('190');
    expect(strGetNum('.190')).toEqual('190');
    expect(strGetNum('-.190')).toEqual('-190');
});