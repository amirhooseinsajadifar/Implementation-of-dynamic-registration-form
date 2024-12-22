document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // جلوگیری از ارسال فرم پیش‌فرض
    let isValid = true;

    // دریافت عناصر فرم
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // اعتبارسنجی نام کاربری
    if (username.value.trim() === '') {
        username.classList.add('is-invalid');
        isValid = false;
    } else {
        username.classList.remove('is-invalid');
    }

    // اعتبارسنجی ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // اعتبارسنجی رمز عبور
    if (password.value.length < 6) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // تأیید رمز عبور
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // اگر تمام ورودی‌ها معتبر بودند
    if (isValid) {
        alert('ثبت‌نام با موفقیت انجام شد!');
        this.reset();
    }
});
