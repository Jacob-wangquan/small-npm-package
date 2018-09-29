/*
array
*/
//1,判断数组是否有序
var sorted = require('is-sorted');

//console.log(sorted([1,2,3]));
//console.log(sorted([1,2,3], function(a, b) {return b - a}));
//2,是否是数字或者数字字符串
var isNumber = require('is-number');

//console.log(isNumber('0xff'));
//3，截取数组的一部分
var slice = require('array-slice');

//console.log(slice(['a','b','e','f','j'], 2, 5));
//4，截取数组前面的一个或者多个元素
var first = require('array-first');
// console.log(first(['a','b','c','d','e'], 2));
//5,截取数组后面的一个或者多个元素
var last = require('array-last');
//console.log(last(['a','b','c','d','e'], 2));
//6,递归的将一个或者多个数组平坦
var flatten = require('arr-flatten');
//console.log(flatten(['a', ['b', 'c'], ['e', 'f', 'y']]));
//7,移除重复的元素
var dedupe = require('dedupe');
//console.log(dedupe([1,3,3,5,6]));