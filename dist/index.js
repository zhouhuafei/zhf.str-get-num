'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('strGetNum', function () {
    /**
     * @description 从字符串中提取出数字部分
     * */
    function strGetNum() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        str = str.toString();
        // 是否是负数
        var isNegative = str[0] === '-';
        var result = '';
        var arr = str.match(/\d+/g); // 匹配数字
        if (!arr) {
            return result;
        }
        arr[0] = Number(arr[0]).toString(); //  arr如果存在，则把数组里第一项中的，0000变成0，0001变成1，0123变成123
        if (arr[1]) {
            arr.length = 2;
        } else {
            arr.length = 1;
        }
        result = '' + arr.join('.');
        if (isNegative && Number(result) !== 0) {
            result = '-' + result;
        }
        return result;
    }

    return strGetNum;
});