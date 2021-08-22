import $ from 'jquery'

import './js/es6.js'

// 无需变量接受，就算接受也是undefined
import './css/index.css'
import './css/index.less'

import small from './img/small.png'
import big from './img/big.png'
$('.small').attr("src", small);
$('.big').attr("src", big);

$(function(){
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'skyblue')
})
