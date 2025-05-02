# 20250502上課筆記

---

## 第一條指令

```tex
產生一個全螢幕的畫布，背景顏色為#e0fbfc，擷取攝影機的影像，
正常的顯示在視窗的中間，影像畫面寬高為視窗大小的80%，
請把程式碼寫在sketch.js內
```

說明：
createCanvas(windowWidth, windowHeight)：設定畫布為全螢幕大小。
background('#e0fbfc')：設定背景顏色為 #e0fbfc。
createCapture(VIDEO)：啟用攝影機並擷取影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8)：將影像大小設定為視窗的 80%。
image(capture, x, y)：將影像繪製在畫布中央。
windowResized()：當視窗大小改變時，動態調整畫布和影像大小。
將此程式碼儲存後執行，應該可以達到需求的效果。

``` javascript=
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

```
