// 照片改用隨網站一起放的壓縮檔（img/ 資料夾），不再連到 SmugMug。
// 每張有兩個尺寸：-s（寬 800）給手機與小圖，-l（寬 1280）給滿版與放大。
window.setImg = function (set, i, size) {
  return 'img/' + set + '-' + i + (size === 'M' || size === 'L' ? '-s' : '-l') + '.webp';
};
window.meifu = function (i, size) { return window.setImg('meifu', i, size); };
