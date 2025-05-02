let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#e0fbfc'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素

  // 建立與視訊畫面相同大小的圖形內容
  graphics = createGraphics(capture.width, capture.height);
  drawGraphics();
}

function draw() {
  background('#e0fbfc'); // 確保背景顏色一致

  // 顯示攝影機畫面，並左右顛倒
  // push(); // 儲存當前畫布狀態
  // translate(width, 0); // 將畫布的原點移到右上角
  // scale(-1, 1); // 水平翻轉畫布
  // image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
  // pop(); // 恢復畫布狀態
  drawGraphics()
  // 顯示圖形內容在攝影機畫面的上方
  image(graphics, (width - graphics.width) / 2, (height - graphics.height) / 2);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布和影像大小
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);

  // 重新調整圖形大小
  graphics = createGraphics(capture.width, capture.height);
  drawGraphics();
}

function drawGraphics() {
  graphics.background(0); // 設定圖形背景為黑色
  for (let y = 0; y < graphics.height; y += 20) {
    for (let x = 0; x < graphics.width; x += 20) {
      // 從 capture 中取得相對應位置的顏色
      let col = capture.get(x, y);
      graphics.fill(col); // 設定方框的顏色
      graphics.noStroke();
      graphics.rect(x, y, 18, 18); // 繪製方框

      // 在方框中間繪製 5 個黑色的圓
      graphics.fill(0); // 設定圓的顏色為黑色
      for (let i = 0; i < 5; i++) {
        let offset = (i - 2) * 4; // 計算圓的偏移量
        graphics.ellipse(x + 9, y + 9 + offset, 4, 4); // 繪製圓
      }
    }
  }
}
