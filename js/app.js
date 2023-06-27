// パスワードに使用する文字セットを定義
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var digits = '0123456789';
var symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';

// パスワードを生成する関数
function generatePassword() {
  while (true) {
    var password = '';
    var passwordLength = Math.floor(Math.random() * 7) + 10; // 10〜16のランダムな長さ
    for (var i = 0; i < passwordLength; i++) {
      var randomChar = letters + digits + symbols.charAt(Math.floor(Math.random() * symbols.length));
      password += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
    }
    if (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!#$%&()*+,-./:;<=>?@[\]^_{|}~]/.test(password)
    ) {
      // 条件を満たすパスワードが生成された場合、ループを抜ける
      break;
    }
  }
  return password;
}

// パスワードを表示する関数
function displayPassword() {
  var passwordOutput = document.getElementById('password-output');
  passwordOutput.textContent = '生成されたパスワード: ' + generatePassword();
}

// パスワードをクリップボードにコピーする関数
function copyToClipboard() {
  var passwordOutput = document.getElementById('password-output');
  var password = passwordOutput.textContent.split(': ')[1];
  navigator.clipboard.writeText(password).then(function() {
    alert('パスワードをクリップボードにコピーしました。');
  });
}

// 生成ボタンのクリックイベントリスナー
document.getElementById('generate-button').addEventListener('click', function() {
  displayPassword();
});

// コピーボタンのクリックイベントリスナー
document.getElementById('copy-password-button').addEventListener('click', function() {
  copyToClipboard();
});