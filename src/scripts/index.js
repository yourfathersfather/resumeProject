var Swiper = require('./components/swiper/swiper-3.3.1.min');

var wx = require('./components/weixin/jweixin');
var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;

$("#myIscroll").hide();



//进入按钮点击事件
$('#enter').tap(function() {
	$(".swiper-container").hide();
	$("#myIscroll").show();

	$.post('/api/skill', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li class='li_jn'>"+
						"<div><img src='"+data[i].img+"'/></div>"+
						"<dl>"+
							"<dt>" +data[i].category + "：</dt>"+
							"<dt>掌握程度：" +data[i].level + "</dt>"+
							"<dt>内容：" +data[i].name + "</dt>"+
							"<dt>时间：" +data[i].time + "</dt>"+
						"</dl></li>";
			$("#sec").append(li);
		}
		setTimeout(function(){
			var IScroll = require('./components/iscroll/iscroll.js');
			var myScroll;
			myScroll = new IScroll('#wrapper', {
				mouseWheel: true
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
		},100)
	})
})
//技能点击事件
$('#jn').tap(function(){
	$('#sec').html('');
	$.post('/api/skill', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li class='li_jn'>"+
						"<div><img src='"+data[i].img+"'/></div>"+
						"<dl>"+
							"<dt>" +data[i].category + "：</dt>"+
							"<dt>掌握程度：" +data[i].level + "</dt>"+
							"<dt>内容：" +data[i].name + "</dt>"+
							"<dt>时间：" +data[i].time + "</dt>"+
						"</dl></li>";
			$("#sec").append(li);
		}
		setTimeout(function(){
			var IScroll = require('./components/iscroll/iscroll.js');
			var myScroll;
			myScroll = new IScroll('#wrapper', {
				mouseWheel: true
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
		},100)
	})
})
//项目点击事件
$('#xm').tap(function() {
	$('#sec').html('');
	$.post('/api/project', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li class='li_xm'>"+
						"<div>"+
						"<div><img src='"+data[i].img+"' /></div>"+
						"<dl>"+
						"<dt>项目名称：" + data[i].category + "</dt>"+
						"<dt>简介：" +data[i].description + "</dt>"+
						"</dl>"+
						"</div>"+
						"<img src='"+data[i].image+"' />"+
						"<dl>"+
						"<dt>周期：" +data[i].detail + "</dt>"+
						"<dt>所属公司：" +data[i].name + "</dt>"+
						"<dt>运用：" +data[i].tech + "</dt>"+
						"<dt>网址：" +data[i].url + "</dt>"+
					"</dl></li>";
			$("#sec").append(li);
		}
		setTimeout(function(){
			var IScroll = require('./components/iscroll/iscroll.js');
			var myScroll;
			myScroll = new IScroll('#wrapper', {
				mouseWheel: true
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
		},100)
	})
})

//经历点击事件
$('#jl').tap(function() {
	$('#sec').html('');
	$.post('/api/work', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li class='li_xm'>"+
						"<div>"+
						"<div><img src='"+data[i].img+"' /></div>"+
						"<dl>"+
						"<dt>公司：" +data[i].name + "</dt>"+
						"<dt>公司性质：" + data[i].category + "</dt>"+
						"</dl>"+
						"</div>"+
						"<img src='"+data[i].image+"' />"+
						"<dl>"+
						"<dt>工作时间：" +data[i].time + "</dt>"+
						"<dt>职务：" +data[i].posts + "</dt>"+
						"<dt>兼职：" +data[i].reportto + "</dt>"+
						"<dt>公司规模：" +data[i].peoples + "</dt>"+
						"<dt>公司官网：" +data[i].url + "</dt>"+
					"</dl></li>";
			$("#sec").append(li);
		}
		setTimeout(function(){
			var IScroll = require('./components/iscroll/iscroll.js');
			var myScroll;
			myScroll = new IScroll('#wrapper', {
				mouseWheel: true
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
		},100)
	})
})

//我的点击事件
$('#wd').tap(function() {
	$('#sec').html('');
	$.post('/api/my', {}, function(data) {
		for(var i = 0; i < data.length; i++) {
			//				console.log(data[i]);
			var li = "<li class='li_wd'>"+
						"<dl>"+
						"<dt class='gyw'>关于我</dt>"+
						"<dt class='abt'>About me</dt>"+
						"<dt><img src='"+data[i].img+"'></dt>"+
						"<dt><span>姓名</span>"+data[i].name+"</dt>"+
						"<dt><span>毕业院校</span>"+data[i].school+"</dt>"+
						"<dt><span>专业</span>"+data[i].zhuye+"</dt>"+
						"<dt><span>生日</span>"+data[i].birthday+"</dt>"+
						"<dt><span>名族</span>"+data[i].mz+"</dt>"+
						"<dt><span>政治面貌</span>"+data[i].zzmm+"</dt>"+
						"<dt><span>现居地</span>"+data[i].xjd+"</dt>"+
						"<dt><span>籍贯</span>"+data[i].jg+"</dt>"+
						"<dt><span>兴趣爱好</span>"+data[i].hobby+"</dt>"+
						"<dt><span>工作期望</span>"+data[i].gzqw+"</dt>"+
						"<dt><span>联系方式</span></dt>"+
						"<dt><span>e-mail</span>"+data[i].email+"</dt>"+
						"<dt><span>qq号</span>"+data[i].qq+"</dt>"+
						"<dt><span>手机号</span>"+data[i].phone+"</dt>"+
					"</dl></li>";
			$("#sec").append(li);
		}
		setTimeout(function(){
			var IScroll = require('./components/iscroll/iscroll.js');
			var myScroll;
			myScroll = new IScroll('#wrapper', {
				mouseWheel: true
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
		},100)
	})
})
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
//$.post("http://459633095.applinzi.com/php/getsign.php", {
//	url: window.location.href
//}, function(data) {
//	pos = data.indexOf('}');
//	dataStr = data.substring(0, pos + 1);
//	objData = JSON.parse(dataStr);
//	console.log(dataStr);
//	wx.config({
//		debug: true,
//		appId: objData.appId,
//		timestamp: objData.timestamp,
//		nonceStr: objData.nonceStr,
//		signature: objData.signature,
//		jsApiList: [
//			'chooseImage'
//		]
//	})
//})
//wx.ready(function() {
//	$('#bt_xc').tap(function() {
//		wx.chooseImage({
//			count: 1, // 默认9
//			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//			success: function(res) {
//				var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//			}
//		});
//	})
//});
