# 🎨 EKI Styles - مكتبة CSS عربية متكاملة

> مكتبة CSS حديثة ومتكاملة مبنية على **Tailwind CSS** مع دعم كامل للغة العربية وألوان **Material Purple** الأنيقة.

![EKI Styles](https://img.shields.io/badge/version-1.0.0-blue)
![License MIT](https://img.shields.io/badge/license-MIT-green)
![Arabic Support](https://img.shields.io/badge/arabic-supported-brightgreen)
![RTL Ready](https://img.shields.io/badge/RTL-ready-orange)

---

## 📋 جدول المحتويات

- [المميزات](#المميزات)
- [التثبيت](#التثبيت)
- [الاستخدام السريع](#الاستخدام-السريع)
- [نظام الألوان](#نظام-الألوان)
- [المكونات](#المكونات)
- [الطباعة العربية](#الطباعة-العربية)
- [الأدوات المساعدة](#الأدوات-المساعدة)
- [الاستجابة](#الاستجابة)
- [الأمثلة](#الأمثلة)
- [المساهمة](#المساهمة)
- [الترخيص](#الترخيص)

---

## ✨ المميزات

### 🌍 دعم عربي كامل
- ✅ اتجاه RTL متكامل في جميع المكونات
- ✅ دعم خط **Tajawal** العربي الحديث
- ✅ مسافات وأسطر مثلى للنصوص العربية
- ✅ محاذاة نصوص عربية احترافية

### 🎭 تصميم حديث
- ✅ ألوان **Material Purple** كنظام أساسي
- ✅ وضع داكن/نهاري تلقائي (Dark Mode)
- ✅ تصاميم متجاوبة (Mobile-First)
- ✅ تحريكات وانتقالات سلسة

### 🛠️ مبني على Tailwind CSS
- ✅ مفتوح المصدر وقابل للتخصيص
- ✅ حجم صغير ومحسن للأداء
- ✅ فئات utility جاهزة للاستخدام
- ✅ دعم الإصدارات الحديثة

### 📦 مكونات جاهزة
- ✅ أزرار بتصاميم متعددة
- ✅ بطاقات وصناديق
- ✅ نماذج وحقول إدخال
- ✅ تنبيهات ورسائل
- ✅ شريط تنقل وتذييل
- ✅ وغير ذلك...

---

## 📦 التثبيت

### عبر npm

```bash
npm install ekistyles
```

### عبر yarn

```bash
yarn add ekistyles
```

### التثبيت المحلي

1. انسخ ملف CSS من `dist/ekistyles.css`
2. أضفه إلى ملفك الرئيسي HTML:

```html
<link rel="stylesheet" href="path/to/ekistyles.css">
```

---

## 🚀 الاستخدام السريع

### ملف HTML بسيط

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EKI Styles - مثال بسيط</title>
    <link rel="stylesheet" href="ekistyles.min.css">
</head>
<body>
    <div class="container">
        <h1>مرحبا بك في EKI Styles</h1>
        <p>مكتبة CSS عربية متكاملة وحديثة</p>
        <button class="btn btn-primary">انقر هنا</button>
    </div>
</body>
</html>
```

### مع Tailwind CSS مباشرة

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      // تخصيص إضافي
    },
  },
  plugins: [],
}
```

---

## 🎨 نظام الألوان

### ألوان Material Purple الأساسية

```css
/* في ملفك CSS */
color: var(--color-accent-alt);        /* #6200ee - البنفسجي الأساسي */
color: var(--color-accent);             /* #03dac5 - التركواز */
color: var(--color-border);             /* #3700b3 - البنفسجي الداكن */
```

### الألوان المعرفة مسبقاً

| المتغير | اللون | الاستخدام |
|--------|-------|----------|
| `--color-bg` | #1a0033 | خلفية الصفحة |
| `--color-surface` | #2d004d | خلفية العناصر |
| `--color-text` | #f3f4f6 | النصوص |
| `--color-heading` | #ffffff | العناوين |
| `--color-accent` | #03dac5 | اللون الأساسي |
| `--color-accent-alt` | #6200ee | لون فرعي |
| `--color-success` | #4caf50 | النجاح |
| `--color-warning` | #ff9800 | التحذير |
| `--color-error` | #f44336 | الخطأ |
| `--color-info` | #2196f3 | المعلومات |

### تفعيل الوضع النهاري

```html
<!-- أضف class="dark" إلى html -->
<html class="dark" dir="rtl" lang="ar">
```

---

## 🧩 المكونات

### الأزرار (Buttons)

```html
<!-- زر أساسي -->
<button class="btn btn-primary">أساسي</button>

<!-- زر ثانوي -->
<button class="btn btn-secondary">ثانوي</button>

<!-- زر النجاح -->
<button class="btn btn-success">نجح</button>

<!-- زر التحذير -->
<button class="btn btn-warning">تحذير</button>

<!-- زر الخطأ -->
<button class="btn btn-error">خطأ</button>

<!-- أحجام مختلفة -->
<button class="btn btn-primary btn-sm">صغير</button>
<button class="btn btn-primary">عادي</button>
<button class="btn btn-primary btn-lg">كبير</button>

<!-- زر بعرض كامل -->
<button class="btn btn-primary btn-block">عرض كامل</button>

<!-- زر معطل -->
<button class="btn btn-primary" disabled>معطل</button>
```

### البطاقات (Cards)

```html
<div class="card">
    <div class="card-header">
        <h2>عنوان البطاقة</h2>
    </div>
    <div class="card-body">
        <p>محتوى البطاقة يذهب هنا...</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-primary">عمل</button>
    </div>
</div>
```

### النماذج (Forms)

```html
<form>
    <div class="form-group">
        <label class="form-label">البريد الإلكتروني</label>
        <input type="email" class="form-control" placeholder="أدخل بريدك الإلكتروني">
        <p class="form-text">سنحافظ على خصوصيتك</p>
    </div>

    <div class="form-group">
        <label class="form-label">الرسالة</label>
        <textarea class="form-control" placeholder="اكتب رسالتك..."></textarea>
    </div>

    <button type="submit" class="btn btn-primary">إرسال</button>
</form>
```

### التنبيهات (Alerts)

```html
<!-- تنبيه معلومات -->
<div class="alert alert-info">
    <span class="alert-close">&times;</span>
    <strong>معلومة:</strong> هذا تنبيه معلومات.
</div>

<!-- تنبيه نجاح -->
<div class="alert alert-success">
    تم المعالجة بنجاح!
</div>

<!-- تنبيه تحذير -->
<div class="alert alert-warning">
    تحذير: يرجى التحقق من البيانات.
</div>

<!-- تنبيه خطأ -->
<div class="alert alert-error">
    خطأ: حدثت مشكلة ما.
</div>
```

### شريط التنقل (Navbar)

```html
<nav class="navbar">
    <a href="#" class="navbar-brand">EKI Styles</a>
    <ul class="navbar-menu">
        <li><a href="#" class="active">الرئيسية</a></li>
        <li><a href="#">المميزات</a></li>
        <li><a href="#">الأمثلة</a></li>
        <li><a href="#">التوثيق</a></li>
    </ul>
    <div class="navbar-right">
        <button class="btn btn-secondary btn-sm">تسجيل الدخول</button>
    </div>
</nav>
```

### التذييل (Footer)

```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3>عن الموقع</h3>
            <ul>
                <li><a href="#">من نحن</a></li>
                <li><a href="#">المميزات</a></li>
                <li><a href="#">التسعير</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>الدعم</h3>
            <ul>
                <li><a href="#">مركز المساعدة</a></li>
                <li><a href="#">التوثيق</a></li>
                <li><a href="#">اتصل بنا</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 EKI Styles. جميع الحقوق محفوظة.</p>
    </div>
</footer>
```

### الشارات (Badges)

```html
<span class="badge badge-primary">أساسي</span>
<span class="badge badge-secondary">ثانوي</span>
<span class="badge badge-success">نجاح</span>
<span class="badge badge-warning">تحذير</span>
<span class="badge badge-error">خطأ</span>
```

### محمل التحميل (Loader)

```html
<!-- حمل عادي -->
<div class="loader"></div>

<!-- حمل صغير -->
<div class="loader loader-sm"></div>

<!-- حمل كبير -->
<div class="loader loader-lg"></div>
```

---

## 📝 الطباعة العربية

### متغيرات الطباعة العربية

```css
:root {
  --arabic-line-height: 1.8;        /* ارتفاع السطر الأمثل للعربية */
  --arabic-letter-spacing: 0.02em;  /* مسافة الأحرف */
}
```

### استخدام الخط Tajawal

```html
<html style="font-family: 'Tajawal', sans-serif;">
```

### مقاسات العناوين

```html
<h1>عنوان 1 - 2.5rem (40px)</h1>
<h2>عنوان 2 - 2rem (32px)</h2>
<h3>عنوان 3 - 1.5rem (24px)</h3>
<h4>عنوان 4 - 1.25rem (20px)</h4>
<h5>عنوان 5 - 1.125rem (18px)</h5>
<h6>عنوان 6 - 1rem (16px)</h6>
```

---

## 🎯 الأدوات المساعدة

### فئات النصوص

```html
<!-- المحاذاة -->
<p class="text-right">محاذاة يمين</p>
<p class="text-left">محاذاة يسار</p>
<p class="text-center">محاذاة وسط</p>
<p class="text-justify">محاذاة ضبط</p>

<!-- الأحجام -->
<p class="text-sm">نص صغير</p>
<p class="text-lg">نص كبير</p>
<p class="text-xl">نص أكبر</p>
<p class="text-2xl">نص أكبر كثيراً</p>

<!-- الأوزان -->
<p class="text-light">خفيف</p>
<p class="text-normal">عادي</p>
<p class="text-semibold">نصف سميك</p>
<p class="text-bold">سميك</p>

<!-- الألوان -->
<p class="text-success">نص أخضر</p>
<p class="text-warning">نص برتقالي</p>
<p class="text-error">نص أحمر</p>
<p class="text-info">نص أزرق</p>
<p class="text-muted">نص خافت</p>

<!-- التزيينات -->
<p class="text-italic">نص مائل</p>
<p class="text-underline">نص مسطر</p>
<p class="text-uppercase">نص بأحرف كبيرة</p>
<p class="text-lowercase">نص بأحرف صغيرة</p>
<p class="text-capitalize">نص مع أحرف كبيرة</p>
```

### المسافات

```html
<!-- استخدام Tailwind CSS -->
<div class="p-4 m-4 mb-8">محتوى بمسافات</div>

<!-- متغيرات CSS -->
<div style="padding: var(--space-xl); margin-bottom: var(--space-lg);">
    محتوى بمسافات
</div>
```

### الحاويات والشبكات

```html
<!-- حاوية عادية -->
<div class="container">
    <h1>محتوى داخل حاوية</h1>
</div>

<!-- حاوية كبيرة -->
<div class="container-lg">
    <h1>محتوى داخل حاوية كبيرة</h1>
</div>

<!-- صف وأعمدة -->
<div class="row">
    <div class="col-4">عمود 1/3</div>
    <div class="col-4">عمود 2/3</div>
    <div class="col-4">عمود 3/3</div>
</div>

<div class="row">
    <div class="col-6">عمود 1/2</div>
    <div class="col-6">عمود 2/2</div>
</div>
```

---

## 📱 الاستجابة

جميع المكونات مستجيبة افتراضياً. النقاط الرئيسية للقطع:

| الفئة | الحد الأدنى للعرض |
|------|-----------------|
| xs | 320px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### مثال على الاستجابة

```html
<!-- محتوى يتغير على الشاشات الصغيرة -->
<div class="col-4">
    <p class="text-xl">نص كبير على الشاشات الكبيرة</p>
    <p class="text-sm">نص صغير على الشاشات الصغيرة</p>
</div>
```

---

## 💡 الأمثلة

### صفحة ويب كاملة

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EKI Styles - موقع عربي حديث</title>
    <link rel="stylesheet" href="ekistyles.min.css">
</head>
<body>
    <!-- الشريط العلوي -->
    <nav class="navbar">
        <a href="#" class="navbar-brand">📱 شركتنا</a>
        <ul class="navbar-menu">
            <li><a href="#" class="active">الرئيسية</a></li>
            <li><a href="#">الخدمات</a></li>
            <li><a href="#">المشاريع</a></li>
            <li><a href="#">التواصل</a></li>
        </ul>
        <div class="navbar-right">
            <button class="btn btn-secondary btn-sm">تسجيل</button>
        </div>
    </nav>

    <!-- المحتوى الرئيسي -->
    <div class="container">
        <h1>أهلا وسهلا بك</h1>
        <p>نحن نقدم أفضل الخدمات بأسعار معقولة</p>

        <!-- البطاقات -->
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <h3>الخدمة 1</h3>
                    <p>وصف الخدمة الأولى</p>
                    <button class="btn btn-primary">اعرف المزيد</button>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h3>الخدمة 2</h3>
                    <p>وصف الخدمة الثانية</p>
                    <button class="btn btn-primary">اعرف المزيد</button>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h3>الخدمة 3</h3>
                    <p>وصف الخدمة الثالثة</p>
                    <button class="btn btn-primary">اعرف المزيد</button>
                </div>
            </div>
        </div>
    </div>

    <!-- التذييل -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>حول الموقع</h3>
                <ul>
                    <li><a href="#">من نحن</a></li>
                    <li><a href="#">المميزات</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>التواصل</h3>
                <ul>
                    <li><a href="#">البريد الإلكتروني</a></li>
                    <li><a href="#">الهاتف</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 جميع الحقوق محفوظة</p>
        </div>
    </footer>
</body>
</html>
```

---

## 🔧 البناء والتطوير

### متطلبات النظام

- Node.js 14.0 أو أحدث
- npm أو yarn

### التثبيت

```bash
git clone https://github.com/EKISTUDIOink/ekistyles.git
cd ekistyles
npm install
```

### الأوامر المتاحة

```bash
# بناء CSS مرة واحدة
npm run build

# بناء ومضغوط
npm run production

# المراقبة المباشرة
npm run watch

# التطوير المباشر
npm run dev
```

---

## 📚 الملفات الرئيسية

```
ekistyles/
├── src/
│   └── ekistyles.css          # ملف CSS الرئيسي
├── dist/
│   ├── ekistyles.css          # ملف CSS محترق
│   └── ekistyles.min.css      # ملف CSS مضغوط
├── package.json               # إدارة الحزم
├── tailwind.config.js         # إعدادات Tailwind
├── postcss.config.js          # إعدادات PostCSS
├── index.html                 # أمثلة الاستخدام
└── README.md                  # هذا الملف
```

---

## 🤝 المساهمة

نرحب بمساهماتك! يمكنك:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add some amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

---

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

## 💬 الدعم والتواصل

- 📧 البريد الإلكتروني: support@ekistudio.com
- 🐛 الإبلاغ عن المشاكل: [GitHub Issues](https://github.com/EKISTUDIOink/ekistyles/issues)
- 💡 الاقتراحات والأفكار: [GitHub Discussions](https://github.com/EKISTUDIOink/ekistyles/discussions)

---

## 🙏 شكر خاص

شكر لمجتمع التصميم العربي ومشروع Tailwind CSS على الإلهام والدعم.

---

<div align="center">

### صُنع بـ ❤️ من قبل فريق **EKISTUDIO**

**الإصدار 1.0.0** | **MIT License** | **مفتوح المصدر**

</div>
