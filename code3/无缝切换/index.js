window.onload = function (){
	let
		oBox 		  = $('box'),
		oList 		  = $('list'),
		oDirectionBtn = $('direction-btn'),
		oLeftBtn 	  = $('left-btn'),
		oRightBtn 	  = $('right-btn'),
		iIndex		  = 0,
		oTimer		  = null,
		oFirst 		  = oList.firstElementChild;

	// 赋值第一个LI
	oList.innerHTML += oFirst.outerHTML;

	// 鼠标移入，按钮显示
	oBox.onmouseenter = function () {
		clearInterval(oTimer);
		oDirectionBtn.style.display = 'block';
	}
	// 鼠标移出，按钮隐藏
	oBox.onmouseleave = function () {
		oDirectionBtn.style.display = 'none';

		oTimer = setInterval(function () {
			if(iIndex === 4) {
				iIndex = 0;
				oList.style.left = 0;
			}
			iIndex++;
			bufferMove(oList,{left: - iIndex * 590});
		}, 3000);
	}

	// 给左侧的按钮添加单击事件
	oLeftBtn.onclick = function () {
		iIndex--;

		if(iIndex < 0) {
			iIndex = 3;
			oList.style.left = '-2360px';
		}
		bufferMove(oList,{left: - iIndex * 590});
	}

	// 给右侧的按钮添加单击事件
	oRightBtn.onclick = function () {
		if(iIndex === 4) {
			iIndex = 0;
			oList.style.left = 0;
		}
		iIndex++;
		bufferMove(oList,{left: - iIndex * 590});
	}

	// 定时运动
	oTimer = setInterval(function () {
		if(iIndex === 4) {
			iIndex = 0;
			oList.style.left = 0;
		}
		iIndex++;
		bufferMove(oList,{left: - iIndex * 590});
	}, 3000);
}