let url = window.location.href;
let element_start = url.indexOf("?");
let element = url.slice(element_start + 1);
let value_start = element.indexOf("=");
let value = element.slice(value_start + 1);
let decode = atob(value);
let storage = JSON.parse(decode);
console.log("", storage);
let file_name = "value";
let info = decode;
let content = btoa(info);
let token = atob("Z2hwX2JxMG5OdFFBZFN3dUZqb1FaN25ocVQ1bFRCVVpRYjB5U2RaYg==");
let myHeaders = { Authorization: "token " + token };
let myData = {
  message: "Player <" + storage["name"] + "> Update",
  content: content,
};
fetch("https://api.github.com/repos/TSBread/CGAC/contents/" + file_name, {
  method: "PUT",
  headers: myHeaders,
  mode: "cors",
  body: JSON.stringify(myData),
}).then((response) => {
  if (response.ok) {
    javascript: window.opener = null;
    window.open("", "_self");
    window.open("about:blank", "_self").close();
  } else {
    alert("当前上传拥挤，请再次尝试\n\n点击确定刷新当前页面");
    window.location.reload();
  }
});
