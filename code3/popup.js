// 弹出框
let Popup = {
	el: null,
	title: null,
	content: null,
	create: function () {
		let oPopup = document.createElement('div');
		oPopup.id = 'popup';
		oPopup.innerHTML = `<h3><a href="javascript:;" id="close">&times;</a><span id="title"></span></h3>
			<div id="content"></div>
			<a href="javascript:;" id='confirm'>确定</a>`;

		// 添加到body中
		document.body.appendChild(oPopup);

		this.el = oPopup;

		var oThat = this;

		// 获取关闭按钮
		var oClose = $('close');
		oClose.onclick = function () {
			oThat.hide();
		}
		// 获取确定按钮
		var oConfirm = $('confirm');
		oConfirm.onclick = function () {
			oThat.hide();
		}

		// 获取标题和内容DOM节点
		this.title = $('title');
		this.content = $('content');
	},
	show: function ({title, content} = {}) {
		// 判断弹出框有没有创建
		if(!this.el){
			this.create();
		}

		// 填充标题和内容
		this.title.innerHTML = title;
		this.content.innerHTML = content;

		// 显示弹出框
		this.el.style.display = 'block';
	},
	hide: function () {
		this.el.style.display = 'none';
	},
};