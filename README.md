# 20250502上課筆記

---

## 第一條指令

產生一個全螢幕的畫布，背景顏色為#e0fbfc，擷取攝影機的影像，正常的顯示在視窗的中間，影像畫面寬高為視窗大小的80%，請把程式碼寫在sketch.js內

說明：
createCanvas(windowWidth, windowHeight)：設定畫布為全螢幕大小。
background('#e0fbfc')：設定背景顏色為 #e0fbfc。
createCapture(VIDEO)：啟用攝影機並擷取影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8)：將影像大小設定為視窗的 80%。
image(capture, x, y)：將影像繪製在畫布中央。
windowResized()：當視窗大小改變時，動態調整畫布和影像大小。
將此程式碼儲存後執行，應該可以達到需求的效果。
