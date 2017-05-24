window.onload = function (){
	let
		oBox 		  = $('box'),
		oList 		  = $('list'),
		oDirectionBtn = $('direction-btn'),
		oLeftBtn 	  = $('left-btn'),
		oRightBtn 	  = $('right-btn'),
		iIndex		  = 0,
		oTimer		  = null;

	// 鼠标移入，按钮显示
	oBox.onmouseenter = function () {
		clearInterval(oTimer);
		oDirectionBtn.style.display = 'block';
	}
	// 鼠标移出，按钮隐藏
	oBox.onmouseleave = function () {
		oDirectionBtn.style.display = 'none';

		oTimer = setInterval(function () {
			iIndex++;

			// 如果已经到达末尾，则应该显示第1张图片
			if(iIndex === 4) {
				iIndex = 0;
			}
			bufferMove(oList, {left: - iIndex * 590});
		}, 3000);
	}

	// 给左侧的按钮添加单击事件
	oLeftBtn.onclick = function () {
		iIndex--;

		// 如果已经到达末尾，则应该显示第1张图片
		if(iIndex === -1) {
			iIndex = 3;
		}
		bufferMove(oList, {left: - iIndex * 590});
	}

	// 给右侧的按钮添加单击事件
	oRightBtn.onclick = function () {
		iIndex++;

		// 如果已经到达末尾，则应该显示第1张图片
		if(iIndex === 4) {
			iIndex = 0;
		}
		bufferMove(oList, {left: - iIndex * 590});
	}

	// 定时运动
	oTimer = setInterval(function () {
		iIndex++;

		// 如果已经到达末尾，则应该显示第1张图片
		if(iIndex === 4) {
			iIndex = 0;
		}
		bufferMove(oList, {left: - iIndex * 590});
	}, 3000);
}