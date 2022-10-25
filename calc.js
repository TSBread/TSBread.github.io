function transform() {
  let offset_value = parseInt(document.getElementById("input").value); // 获取偏移值框内容
  let warning = document.getElementById("warning");
  let tip = document.getElementById("tip");
  console.log(offset_value);
  if (offset_value.toString() == "NaN") {
    alert("错误：未发现可用数值\n\n请选择一个框输入待计算的数值");
  }
  if (offset_value <= -6764) {
    alert("错误：A数值错误\n\n待计算的数值过小：" + offset_value.toString());
  }
}
