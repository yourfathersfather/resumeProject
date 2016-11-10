var Swiper = require('./components/swiper/swiper-3.3.1.min');

var wx = require('./components/weixin/jweixin');
var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;

$("#myIscroll").hide();

$('#enter').tap(function() {
	$(".swiper-container").hide();
	$("#myIscroll").show();

	$.post('/api/skill', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li><dl><dt>标题：" + data[i].category + "</dt><dt>掌握程度：" +
				data[i].level + "</dt><dt>内容：" +
				data[i].name + "</dt><dt>时间" +
				data[i].time + "</dt></dl></li>";
			$("#sec").append(li);
		}
		var IScroll = require('./components/iscroll/iscroll.js');
		var myScroll;
		myScroll = new IScroll('#wrapper', {
			mouseWheel: true
		});
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	})
})

$('#xm').tap(function() {
	$('#sec').html('');
	$.post('/api/project', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li><dl><dt>项目名称：" + data[i].category + "</dt><dt>项目简介：" +
				data[i].description + "</dt><dt>项目周期：" +
				data[i].detail + "</dt><dt>项目所属公司：" +
				data[i].name + "</dt><dt>所运用的技能：" +
				data[i].tech + "</dt><dt>网址：" +
				data[i].url + "</dt></dl></li>";
			$("#sec").append(li);
		}
	})
})
$.post("http://459633095.applinzi.com/php/getsign.php", {
	url: window.location.href
}, function(data) {
	pos = data.indexOf('}');
	dataStr = data.substring(0, pos + 1);
	objData = JSON.parse(dataStr);
	console.log(dataStr);
	wx.config({
		debug: true,
		appId: objData.appId,
		timestamp: objData.timestamp,
		nonceStr: objData.nonceStr,
		signature: objData.signature,
		jsApiList: [
			'chooseImage'
		]
	})
})
wx.ready(function() {
	$('#bt_xc').tap(function() {
		wx.chooseImage({
			count: 1, // 默认9
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			success: function(res) {
				var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
			}
		});
	})
});
var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min')
var swiper = new Swiper('.swiper-container', {
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
})