# 🚀 npm Publishing Guide for EKI Styles

## الدليل الكامل لنشر مكتبة EKI Styles على npm

---

## 📋 المتطلبات قبل النشر

### 1. حساب npm
- يجب أن يكون لديك حساب على [npm.com](https://www.npmjs.com)
- إذا لم يكن لديك حساب، قم بالتسجيل على الموقع

### 2. التحقق من node وnpm
```bash
node --version  # يجب أن يكون v14+
npm --version   # يجب أن يكون v6+
```

### 3. اسم الحزمة فريد
- اسم الحزمة: `ekistyles`
- يجب أن يكون اسماً فريداً على npm registry

---

## 🔐 تسجيل الدخول إلى npm

### الخطوة 1: فتح محطة البيانات
```bash
cd /workspaces/ekistyles
npm login
```

### الخطوة 2: إدخال البيانات
```
Username: [أدخل اسم المستخدم]
Password: [أدخل كلمة المرور]
Email: [أدخل البريد الإلكتروني]
```

### الخطوة 3: التحقق من المصادقة
```bash
npm whoami  # يجب أن يعيد اسم المستخدم
```

---

## 📦 نشر الحزمة

### الخطوة 1: التحقق من package.json
```bash
npm pkg get name version description
```

**المتوقع:**
```json
{
  "name": "ekistyles",
  "version": "1.0.0",
  "description": "مكتبة CSS عربية متكاملة..."
}
```

### الخطوة 2: بناء الملفات
```bash
npm run production  # بناء وضغط الملفات
```

### الخطوة 3: محاكاة النشر (اختياري)
```bash
npm publish --dry-run
```

### الخطوة 4: النشر الفعلي
```bash
npm publish
```

**النتيجة المتوقعة:**
```
npm notice Packfile Details
npm notice name: ekistyles
npm notice version: 1.0.0
npm notice package size: 16.1 kB
npm notice unpacked size: 63.0 kB
npm notice shasum: ...
npm notice + ekistyles@1.0.0
```

---

## ✅ التحقق من النشر

### 1. البحث عن الحزمة على npm
```bash
npm info ekistyles
```

### 2. تثبيت من npm
```bash
npm install ekistyles
```

### 3. التحقق المباشر
زيارة: https://www.npmjs.com/package/ekistyles

---

## 🔄 تحديث الإصدارات

### تحديث الإصدار في package.json
```bash
# زيادة رقم البقعة (Patch) - 1.0.0 → 1.0.1
npm version patch

# زيادة الإصدار الثانوي (Minor) - 1.0.0 → 1.1.0
npm version minor

# زيادة الإصدار الرئيسي (Major) - 1.0.0 → 2.0.0
npm version major
```

### نشر النسخة الجديدة
```bash
npm publish
```

---

## 📝 الملفات المهمة

### .npmignore
يستخدم لتحديد الملفات التي لا تُنشر على npm:
```
node_modules/
src/
.git
index.html
*.log
```

### package.json
يجب أن يحتوي على:
```json
{
  "name": "ekistyles",
  "version": "1.0.0",
  "main": "dist/ekistyles.css",
  "repository": {
    "type": "git",
    "url": "https://github.com/EKISTUDIOink/ekistyles.git"
  }
}
```

---

## 🐛 حل المشاكل الشائعة

### المشكلة 1: Error 403 Forbidden
**السبب:** اسم الحزمة موجود بالفعل أو مشاكل الصلاحيات

**الحل:**
```bash
# تغيير اسم الحزمة
npm config set @scope:registry https://registry.npmjs.org/

# أو استخدام scope
# تغيير "name": "ekistyles" إلى "name": "@username/ekistyles"
```

### المشكلة 2: 404 Not Found
**السبب:** بيانات اعتماد غير صحيحة

**الحل:**
```bash
npm logout
npm login
```

### المشكلة 3: Two-Factor Authentication (2FA)
```bash
npm publish --otp [أدخل الكود من التطبيق]
```

### المشكلة 4: Package Already Exists
**السبب:** الإصدار موجود بالفعل

**الحل:**
```bash
# زيادة رقم الإصدار
npm version minor
npm publish
```

---

## 🎯 أفضل الممارسات

### ✅ قبل النشر
- ✓ اختبر الملفات محلياً
- ✓ تحقق من package.json
- ✓ أضف ملف README.md شامل
- ✓ أضف LICENSE
- ✓ تأكد من أن dist/ محدثة

### ✅ بعد النشر
- ✓ تحقق من الحزمة على npm.com
- ✓ اختبر التثبيت: `npm install ekistyles`
- ✓ أنشئ GitHub Release
- ✓ شارك على وسائل التواصل

### ✅ للتحديثات المستقبلية
- ✓ اتبع Semantic Versioning
- ✓ اكتب CHANGELOG
- ✓ أضف tags على Git
- ✓ وثّق التغييرات

---

## 📚 ملفات مرتبطة

- [README.md](./README.md) - التوثيق الكامل
- [INSTALLATION.md](./INSTALLATION.md) - طرق التثبيت
- [CHANGELOG.md](./CHANGELOG.md) - سجل التغييرات
- [package.json](./package.json) - معلومات الحزمة

---

## 🔗 روابط مهمة

- **npm Package:** https://www.npmjs.com/package/ekistyles
- **GitHub Repository:** https://github.com/EKISTUDIOink/ekistyles
- **npm Docs:** https://docs.npmjs.com/cli/v9/commands/npm-publish
- **Semantic Versioning:** https://semver.org/

---

## 📞 الدعم والمساعدة

- 📧 البريد الإلكتروني: support@ekistudio.com
- 🐛 تقرير الأخطاء: https://github.com/EKISTUDIOink/ekistyles/issues
- 💬 النقاشات: https://github.com/EKISTUDIOink/ekistyles/discussions

---

## ✨ محتوى الحزمة

عند النشر على npm، يتم تضمين:

```
ekistyles/
├── dist/
│   ├── ekistyles.css          (19 KB - النسخة الكاملة)
│   └── ekistyles.min.css      (14 KB - النسخة المضغوطة)
├── package.json               (معلومات الحزمة)
├── README.md                  (التوثيق)
├── LICENSE                    (رخصة MIT)
└── ...
```

**إجمالي حجم الحزمة:** 16.1 KB
**الملفات المضمنة:** 5 ملفات رئيسية

---

## 🎉 تم النشر بنجاح!

بعد النشر بنجاح، يمكن للمستخدمين تثبيت المكتبة باستخدام:

```bash
npm install ekistyles
```

والاستخدام في المشاريع:

```html
<link rel="stylesheet" href="node_modules/ekistyles/dist/ekistyles.min.css">
```

أو مع Tailwind CSS:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./node_modules/ekistyles/dist/**/*.css'],
}
```

---

**صُنع بـ ❤️ من قبل فريق EKISTUDIO**
**License: MIT | Open Source**
