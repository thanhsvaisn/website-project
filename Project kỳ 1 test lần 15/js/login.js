document.addEventListener("DOMContentLoaded", function () {
  const userName = document.querySelector(".input__user");
  const email = document.querySelector(".input__email");
  const password = document.querySelector(".input__password");
  const messageUser = document.querySelector(".message-username");
  const messageEmail = document.querySelector(".message-email");
  const messagePassword = document.querySelector(".message-password");
  const messagesucces = document.querySelectorAll(".message-succes");
  var btnGignUp = document.querySelector(".btn__GignUp");
  var showPassIcons = document.querySelectorAll(".icon-show-password");
  var passwordInputs = document.querySelectorAll(".show-password");
  var check = 0;
  var infoUser = JSON.parse(localStorage.getItem("userList")) || [];


  showPassIcons.forEach((showPassIcon, index) => {
    showPassIcon.addEventListener("click", () => {
      // Toggle the password input type between 'password' and 'text'
      if (passwordInputs[index].type === "password") {
        passwordInputs[index].type = "text";
        showPassIcon.classList.remove("bi", "bi-eye-slash");
        showPassIcon.classList.add("bi", "bi-eye-fill");
      } else {
        passwordInputs[index].type = "password";
        showPassIcon.classList.remove("bi", "bi-eye-fill");
        showPassIcon.classList.add("bi", "bi-eye-slash");
      }
    });
  });

  function validateUserName(user) {
    messageUser.innerHTML = "";
    const usernamePattern = /^[a-zA-Z0-9._-]{4,}$/;
    const validate = usernamePattern.test(user);

    // Kiểm tra xem người dùng có tồn tại trong danh sách người dùng không
    const userExists = infoUser.some(
      (existingUser) => existingUser.Name === user
    );

    if (!validate) {
      messageUser.classList.add("clor-red");
      messageUser.style.display = "block";
      messageUser.innerHTML = "User is not correct";
      return check++;
    } else if (userExists) {
      messageUser.classList.add("clor-red");
      messageUser.style.display = "block";
      messageUser.innerHTML = "User already exists";
      return check++;
    } else {
      messageUser.style.display = "none";
    }
  }

  function validateUserEmail(email) {
    messageEmail.innerHTML = "";
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail.com$/;
    const validate = emailPattern.test(email);

    // Kiểm tra xem địa chỉ email đã tồn tại trong danh sách người dùng không
    const emailExists = infoUser.some(
      (existingUser) => existingUser.email === email
    );

    if (!validate) {
      messageEmail.classList.add("clor-red");
      messageEmail.style.display = "block";
      messageEmail.innerHTML = "Email is not correct";
      check++;
    } else if (emailExists) {
      messageEmail.classList.add("clor-red");
      messageEmail.style.display = "block";
      messageEmail.innerHTML = "Email already exists";
      check++;
    } else {
      messageEmail.style.display = "none";
    }
  }

  function validatePassword(password) {
    messagePassword.innerHTML = "";
    // Kiểm tra mật khẩu có ít nhất 6 ký tự, 1 ký tự in hoa và 1 số
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const validate = passwordPattern.test(password);
    messagePassword.innerHTML = "";
    if (!validate) {
      messagePassword.classList.add("clor-red");
      messagePassword.style.display = "block";
      messagePassword.innerHTML =
        "Password must have at least 6 characters, 1 capital letter and 1 number";
      check++;
    } else {
      messagePassword.style.display = "none";
    }
  }

  btnGignUp.addEventListener("click", (e) => {
    validateUserName(userName.value);
    validatePassword(password.value);
    validateUserEmail(email.value);

    e.preventDefault(); // Ngăn chặn tải lại trang

    if (check === 0) {
      // Đăng ký thành công, thêm thông tin người dùng vào localStorage
      infoUser.push({
        Name: userName.value,
        email: email.value,
        password: password.value,
      });
      localStorage.setItem("userList", JSON.stringify(infoUser));

      messagesucces.forEach((messagesucce) => {
        messagesucce.classList.add("success");
        messagesucce.innerHTML = "SignUp Success";
        messagesucce.classList.remove("clor-red");
        userName.value = "";
        password.value = "";
        email.value = "";
      });
    } else {
      messagesucces.forEach((messagesucce) => {
        messagesucce.classList.add("clor-red");
        messagesucce.innerHTML = "SignUp Failse";
        check = 0;
      });
    }
  });
});

// SignIn
document.addEventListener("DOMContentLoaded", () => {
    var UserNameSignIn = document.querySelector(".input__user__signin");
    var btnGignIn = document.querySelector(".btn__GignIn");
    var passwordSignIn = document.querySelector(".input__password__signin");
    var messageUserSignIn = document.querySelector(".user__error__signin");
    var passwordErrorSignIn = document.querySelector(".password__error__signin");
    var messageSuccess = document.querySelector(".message-success");
    var containerUser = document.querySelector('.container__user');
    var check = 0;
    btnGignIn.addEventListener("click", (e) => {
      e.preventDefault();
  
      const getUserName = UserNameSignIn.value;
      const getPassword = passwordSignIn.value;
      var saveInfoUser = localStorage.getItem('userList');
      var infoUser = JSON.parse(saveInfoUser) || [];
  
      if (infoUser.length > 0) {
        const foundUser = infoUser.find((user) => user.Name === getUserName);
        const foundPassword = infoUser.find((password) => password.password === getPassword);
    if(foundUser  && getUserName !== ''){
        messageUserSignIn.style.display = "none";
    } else if(getUserName === ''){
        messageUserSignIn.classList.add("clor-red");
        messageUserSignIn.innerHTML = "Please enter username";
        messageUserSignIn.style.display = "block";
        check++;
    }
    else {
        messageUserSignIn.classList.add("clor-red");
        messageUserSignIn.innerHTML = "Username does not exist";
        messageUserSignIn.style.display = "block";
        check++;

    }
      if(foundPassword && getPassword !== ''){
        passwordErrorSignIn.style.display = "none";
    }
    else if(getPassword === ''){
        passwordErrorSignIn.classList.add("clor-red");
        passwordErrorSignIn.innerHTML = "Please enter password";
        passwordErrorSignIn.style.display = "block";
        check++;
    }
    else{
        passwordErrorSignIn.classList.add("clor-red");
        passwordErrorSignIn.innerHTML = "Invalid password";
        passwordErrorSignIn.style.display = "block";
        check++;
    }

    if(check === 0){
        messageSuccess.innerHTML = 'Logged in successfully';
        messageSuccess.classList.add("clor-green");
        UserNameSignIn.value = '';
          passwordSignIn.value = '';
          setTimeout(function () {
            messageSuccess.style.display = 'none';
            window.location.href = "home.html";
            localStorage.setItem('userName', foundUser.Name);
          }, 1500);

    }
    if(check !== 0){
        messageSuccess.innerHTML = 'Account information or password is incorrect';
        messageSuccess.classList.add("clor-red");
        check = 0;
    }
    };
  });

});
