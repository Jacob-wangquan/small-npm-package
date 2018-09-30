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
//8,创建一个特定长度的数组
var range = require('array-range');
// console.log(range(3));
// console.log(range(1,5));
// console.log(range('1',5));
//9,取出第一个数组中有而第二个数组中没有的元素
var diff = require('arr-diff');
//console.log(diff(['a','b','cccc'], ['a', 'c']));
//10,用元素或者函数按规则 创建数组
var filledArray = require('filled-array');
// console.log(filledArray('a', 3));
// console.log(filledArray( i => {
//   return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
// }, 10));

//11,Map object keys and values into a new object
var mapObject = require('map-obj');
//console.log(mapObject({foo: 'bar'}, (key, value) => [value, key]));

//12, Map object keys and values into an array
var mapArray = require('map-array');
var obj = {
  giorgio: 'bianchi',
  gibo: 'rossi'
};
// console.log(mapArray(obj, function(key, value){
//   return key + '-' + value;
// }));
//13, 判断元素是否在数组中
var inArray = require('in-array');
//console.log(inArray(['a', 'b', 'c'], 'b'));

//14, 不使用splice，从一个无序数组中快速移除一个元素
var remove = require('unordered-array-remove');
//console.log(remove(['a', 'b', 'c'], 2));

//15, 交换数组中二个元素的位置，不会改变之前数组的状态
var swapArray = require('swap-array');
//console.log(swapArray(['thats','cool','dude'], 1, 2));

//16,creating a keymirror object from an array of keys.
var mirrarray = require('mirrarray');
console.log(mirrarray(['this', 'is', 'array']));