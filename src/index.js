(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('strGetNum', function () {
    /**
     * @description 从字符串中提取出数字部分
     * */
    function strGetNum(str = '') {
        str = str.toString();
        let result = '';
        const arr = str.match(/\d+/g); // 匹配数字
        if (!arr) {
            return result;
        }
        // 是否是负数
        const isNegative = str[0] === '-';
        // 第一个点的位置
        const pointExec = /\./.exec(str);
        // 第一个数字的位置
        const numExec = /\d/.exec(str);
        if (pointExec && numExec && pointExec.index < numExec.index) {
            arr.unshift('0');
        }
        arr[0] = Number(arr[0]).toString(); //  arr如果存在，则把数组里第一项中的，0000变成0，0001变成1，0123变成123
        if (arr[1]) {
            arr.length = 2;
        } else {
            arr.length = 1;
        }
        result = `${arr.join('.')}`;
        if (isNegative && Number(result) !== 0) {
            result = `-${result}`;
        }
        return result;
    }

    return strGetNum;
});
