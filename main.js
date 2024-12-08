let isDarkMode = false;
let lastNotificationTime = 0; // 记录上次通知的时间
const mstime = 3000; //1000代表1秒，通知间隔时间
const titleToSend = '挪车提醒';
//const phone = '123456'; //手机号码
//const dekey = 'abcdefg'; //bark key
const _0x2449=['F3xrWljDvX0kScK1woTCmW0Gw6U5BMOtwqXCs8KUwrk=','wqrDnhrCvl3Cl1nDvsOlw5tB'];(function(_0x26f16b,_0x244986){const _0x5f23f5=function(_0x47758f){while(--_0x47758f){_0x26f16b['push'](_0x26f16b['shift']());}};_0x5f23f5(++_0x244986);}(_0x2449,0x107));const _0x5f23=function(_0x26f16b,_0x244986){_0x26f16b=_0x26f16b-0x0;let _0x5f23f5=_0x2449[_0x26f16b];if(_0x5f23['bCKbrb']===undefined){(function(){let _0x41b403;try{const _0x3978f3=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x41b403=_0x3978f3();}catch(_0x17c30a){_0x41b403=window;}const _0x3d7a85='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x41b403['atob']||(_0x41b403['atob']=function(_0x1e53ba){const _0x38504c=String(_0x1e53ba)['replace'](/=+$/,'');let _0x33b81f='';for(let _0x43612f=0x0,_0x2ff1db,_0x1fc844,_0x365c51=0x0;_0x1fc844=_0x38504c['charAt'](_0x365c51++);~_0x1fc844&&(_0x2ff1db=_0x43612f%0x4?_0x2ff1db*0x40+_0x1fc844:_0x1fc844,_0x43612f++%0x4)?_0x33b81f+=String['fromCharCode'](0xff&_0x2ff1db>>(-0x2*_0x43612f&0x6)):0x0){_0x1fc844=_0x3d7a85['indexOf'](_0x1fc844);}return _0x33b81f;});}());const _0x57c7a6=function(_0x57a8ec,_0x1e5b2f){let _0x1c5a93=[],_0x3791b6=0x0,_0x17d11c,_0x4dda0b='',_0x5d4240='';_0x57a8ec=atob(_0x57a8ec);for(let _0x58ead3=0x0,_0x9422a5=_0x57a8ec['length'];_0x58ead3<_0x9422a5;_0x58ead3++){_0x5d4240+='%'+('00'+_0x57a8ec['charCodeAt'](_0x58ead3)['toString'](0x10))['slice'](-0x2);}_0x57a8ec=decodeURIComponent(_0x5d4240);let _0x13d092;for(_0x13d092=0x0;_0x13d092<0x100;_0x13d092++){_0x1c5a93[_0x13d092]=_0x13d092;}for(_0x13d092=0x0;_0x13d092<0x100;_0x13d092++){_0x3791b6=(_0x3791b6+_0x1c5a93[_0x13d092]+_0x1e5b2f['charCodeAt'](_0x13d092%_0x1e5b2f['length']))%0x100;_0x17d11c=_0x1c5a93[_0x13d092];_0x1c5a93[_0x13d092]=_0x1c5a93[_0x3791b6];_0x1c5a93[_0x3791b6]=_0x17d11c;}_0x13d092=0x0;_0x3791b6=0x0;for(let _0x55d642=0x0;_0x55d642<_0x57a8ec['length'];_0x55d642++){_0x13d092=(_0x13d092+0x1)%0x100;_0x3791b6=(_0x3791b6+_0x1c5a93[_0x13d092])%0x100;_0x17d11c=_0x1c5a93[_0x13d092];_0x1c5a93[_0x13d092]=_0x1c5a93[_0x3791b6];_0x1c5a93[_0x3791b6]=_0x17d11c;_0x4dda0b+=String['fromCharCode'](_0x57a8ec['charCodeAt'](_0x55d642)^_0x1c5a93[(_0x1c5a93[_0x13d092]+_0x1c5a93[_0x3791b6])%0x100]);}return _0x4dda0b;};_0x5f23['VbpEmQ']=_0x57c7a6;_0x5f23['dkWfUL']={};_0x5f23['bCKbrb']=!![];}const _0x47758f=_0x5f23['dkWfUL'][_0x26f16b];if(_0x47758f===undefined){if(_0x5f23['pspJlp']===undefined){_0x5f23['pspJlp']=!![];}_0x5f23f5=_0x5f23['VbpEmQ'](_0x5f23f5,_0x244986);_0x5f23['dkWfUL'][_0x26f16b]=_0x5f23f5;}else{_0x5f23f5=_0x47758f;}return _0x5f23f5;};const phone=_0x5f23('0x0','y!$p');const dekey=_0x5f23('0x1','fI!(');
// 切换夜间模式
function toggleDarkMode() {
	isDarkMode = !isDarkMode;
	document.body.classList.toggle('dark-mode', isDarkMode);
	const button = document.querySelector('.toggle-dark-mode-btn');
	button.textContent = isDarkMode ? '☀️' : '🌙';
}

// 显示信息框
function showInfoBox(type, message) {
	const infoBox = document.getElementById('infoBox');
	const infoBoxIcon = document.getElementById('infoBoxIcon');
	const infoBoxMessage = document.getElementById('infoBoxMessage');

	infoBox.classList.remove('hide');
	infoBox.classList.add('show');
	infoBoxIcon.classList.remove('success', 'error');
	infoBoxIcon.classList.add(type);
	infoBoxMessage.textContent = message;

	setTimeout(() => {
		infoBox.classList.remove('show');
		infoBox.classList.add('hide');
	}, 3000); // 3秒后隐藏
}
//验证移动电话        
function isValidPhoneNumber(phoneNumber) {
	const regex = /^1[345789]\d{9}$/;
	return regex.test(phoneNumber);
}
// 通知车主
function notifyOwnerWithCustomMessage() {
	const currentTime = Date.now();
	if (currentTime - lastNotificationTime < mstime) { // 检查是否达到2分钟限制
		const remainingTime = mstime - (currentTime - lastNotificationTime);
		const minutes = Math.floor(remainingTime / 60000);
		const seconds = Math.floor((remainingTime % 60000) / 1000);
		showInfoBox('error', `请等待 ${minutes} 分 ${seconds} 秒 后再通知车主。`);
		return;
	}

	const customMessage = document.getElementById('customMessage').value.trim();

	if (customMessage == '') {
		showInfoBox('error', `请留下联系方式，方便车主联系您！`);
		return false;
	};

	if (isValidPhoneNumber(customMessage) == false) {
		showInfoBox('error', `请输入正确的手机号！`);
		return false;
	};

	const messageToSend = customMessage.length > 0 ? "手机号为 " + customMessage + " 的人，需要您挪车，请及时处理。" : "有人需要您挪车，请及时处理。";

	showInfoBox('success', '正在通知车主...');

	setTimeout(() => {
		notifyOwner(messageToSend);
		lastNotificationTime = Date.now(); // 更新上次通知时间
	}, 3000); // 延迟3秒，模拟通知过程
}

function notifyOwner(messageToSend) {
	const bodyContent = {
		title: `${titleToSend}`,
		body: `${messageToSend}`,
		isArchive: 1,
		badge: 1,
		device_key: dekey
	};

	fetch("https://api.day.app/push", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(bodyContent)
		})
		.then(response => response.json())
		.then(data => {
			if (data.code === 200) {
				showInfoBox('success', '已成功通知车主前来挪车，请稍作等待！');
			} else {
				showInfoBox('error', `通知发送失败: ${data.msg || '未知错误'}`);
			}
		})
		.catch(error => {
			showInfoBox('error', `通知发送失败，请稍后重试。错误: ${error.message}`);
		});
}

// 打电话
function callOwner() {
	window.location.href = `tel:${phone}`;
}

// 监听滑块滑动（触摸支持）
const callBtnContainer = document.getElementById('callBtnContainer');
const callBtnSlider = document.getElementById('callBtnSlider');

let startX;
let isSliding = false;


// 触摸开始
callBtnContainer.addEventListener('touchstart', (event) => {
	startX = event.touches[0].clientX;
	isSliding = true;
	callBtnContainer.classList.remove('active');
	callBtnSlider.style.transition = 'none'; // 禁止过渡，实时更新
	// 隐藏文字并准备动画
	const callBtnText = document.querySelector('.call-btn-text');
	callBtnText.style.transition = 'none';
	callBtnText.style.opacity = '0';
	callBtnText.style.transform = 'translateX(-100%)'; // 让文字移出视图
});

// 触摸移动
callBtnContainer.addEventListener('touchmove', (event) => {
	if (!isSliding) return;
	let deltaX = event.touches[0].clientX - startX;
	if (deltaX >= 0) {
		const width = Math.min(deltaX, 250); // 限制最大滑动距离
		callBtnSlider.style.transform = `translateX(${width}px)`; // 滑块移动
		callBtnSlider.style.width = `${width}px`; // 调整滑块宽度
	}
});

// 触摸结束
callBtnContainer.addEventListener('touchend', () => {
	if (isSliding) {
		isSliding = false;
		const deltaX = parseInt(callBtnSlider.style.transform.replace('translateX(', '').replace('px)', ''));

		if (deltaX >= 250) {
			// 如果滑动达到250px，触发拨打电话
			callBtnContainer.classList.add('active');
			callOwner(); // 执行拨打电话操作

			// 触发恢复滑块原位
			setTimeout(() => {
				// 恢复滑块原位，并显示过渡效果
				callBtnSlider.style.transition = 'transform 0.3s ease, width 0.3s ease';
				callBtnSlider.style.transform = 'translateX(0)';
				callBtnSlider.style.width = '50px';

				// 恢复按钮文字，加入动态效果
				const callBtnText = document.querySelector('.call-btn-text');
				callBtnText.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
				callBtnText.style.opacity = '1'; // 恢复按钮文字透明度
				callBtnText.style.transform = 'translateX(0)'; // 文字从左滑入
			}, 500); // 在拨打电话操作之后，500毫秒恢复滑块原位
		} else {
			// 否则，恢复滑块原位
			callBtnSlider.style.transition = 'transform 0.3s ease, width 0.3s ease'; // 恢复过渡效果
			callBtnSlider.style.transform = 'translateX(0)';
			callBtnSlider.style.width = '50px'; // 恢复为初始宽度

			// 恢复按钮文字，加入动态效果
			const callBtnText = document.querySelector('.call-btn-text');
			callBtnText.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
			callBtnText.style.opacity = '1'; // 恢复按钮文字透明度
			callBtnText.style.transform = 'translateX(0)'; // 文字从左滑入
		}
	}
});