let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#e0fbfc'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  background('#e0fbfc'); // 確保背景顏色一致
  // 將影像顯示在畫布中央
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布和影像大小
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}
