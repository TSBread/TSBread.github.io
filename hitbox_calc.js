function oper() {
  let w = parseFloat(document.getElementById("input_w").value);
  let h = parseFloat(document.getElementById("input_h").value);
  let result = "";
  let output = document.getElementById("output");
  let sw = w - 1;
  if (sw < 0) {
    sw = 0;
  }
  let sh = h - 1;
  if (sh < 0) {
    sh = 0;
  }
  let offw = w / 2 - sw - 1;
  let offh = h / 2 - sh - 1;
  if ((w > 1.0) & (h > 1.0)) {
    result +=
      "execute positioned ~" +
      offw +
      " ~" +
      offh +
      " ~" +
      offw +
      " if entity @s[dx=" +
      sw +
      ",dy=" +
      sh +
      ",dz=" +
      sw +
      "]";
  } else {
    result +=
      "execute positioned ~" +
      offw +
      " ~" +
      offh +
      " ~" +
      offw +
      " if entity @s[dx=" +
      sw +
      ",dy=" +
      sh +
      ",dz=" +
      sw +
      "]";
    offw = -w / 2 - offw;
    offh = -h / 2 - offh;
    result +=
      "positioned ~" +
      offw +
      " ~" +
      offh +
      " ~" +
      offw +
      " if entity @s[dx=" +
      sw +
      ",dy=" +
      sh +
      ",dz=" +
      sw +
      "]";
  }
  output.innerHTML = result;

  //存储此次输入数据到浏览器，下次打开网页将直接加载本次所输入的数值以及结果
  localStorage.clear();
  localStorage.setItem("w", w);
  localStorage.setItem("h", h);
  localStorage.setItem("result", result);
}
