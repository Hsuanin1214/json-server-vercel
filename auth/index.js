let token = "";
let id = "";
let role = "";

const account = document.querySelector(".account");
const password = document.querySelector(".password");

function signUp() {
  if (account.value == "" || password.value == "") {
    alert("請填入正確資訊");
  }
  let obj = {};
  obj.email = account.value;
  obj.password = password.value;
  if (obj.email == "1admin1@mail.com" && obj.password == "1234") {
    obj.role = "admin";
    axios
      .post("https://final-json-auth.onrender.com/signup", obj)
      .then(function (response) {
        console.log(response.data);
        alert("恭喜帳號註冊成功");
        account.value = "";
        password.value = "";
      })
      .catch(function (error) {
        alert(error.response.data);
        alert("帳號註冊失敗，有可能有人使用你的帳號");
      });
  } else {
    // obj.role = "notAdmin";
    axios
      .post("https://final-json-auth.onrender.com/signup", obj)
      .then(function (response) {
        console.log(response.data);
        alert("恭喜帳號註冊成功");
        account.value = "";
        password.value = "";
      })
      .catch(function (error) {
        alert(error.response.data);
        alert("帳號註冊失敗，有可能有人使用你的帳號");
      });
  }
}
const userEmail = document.querySelector(".userEmail");
const userPassword = document.querySelector(".userPassword");

function login() {
  console.log('login')
  if (userEmail.value == "" || userPassword.value == "") {
    alert("請填入正確資訊");
  }
  let obj = {};
  obj.email = userEmail.value;
  obj.password = userPassword.value;
  axios
    .post("https://final-json-auth.onrender.com/login", obj)
    .then(function (response) {
      console.log(response.data);
      //token可以拿去做修改
      token = JSON.stringify(response.data.accessToken);
      id = JSON.stringify(response.data.user.id);
      role = JSON.stringify(response.data.user.role);
      localStorage.setItem("userTestToken", token);
      localStorage.setItem("userTestId", id);
      localStorage.setItem("userTestRole", role);
      console.log(token);
      console.log(id);
      alert("登入成功");
      if (obj.email == "1admin1@mail.com" && obj.password == "1234") {
        location.href =
          `backendList.html?id=${id}`;
      } else {
        location.href =
          `list.html?id=${id}`;
      }
      let getDataToken = localStorage.getItem("userTestToken");
      let getDataId = localStorage.getItem("userTestId");
      let getDataAry = {};
      getDataAry.token = JSON.parse(getDataToken);
      getDataAry.id = JSON.parse(getDataId);
      console.log(getDataAry);
    })
    .catch(function (error) {
      console.log(error)
      alert("登入失敗");
    });
}
// 登出
function logOut() {
  alert("已登出!");
  localStorage.clear();
  location.href = "logout.html";
}
