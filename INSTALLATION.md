# 📦 دليل التثبيت والنشر الشامل - EKI Styles

> هذا الدليل يشرح بالتفصيل كيفية تثبيت واستخدام مكتبة EKI Styles في مشاريعك

---

## 📋 جدول المحتويات

1. [متطلبات التثبيت](#متطلبات-التثبيت)
2. [طرق التثبيت المختلفة](#طرق-التثبيت-المختلفة)
3. [الاستخدام الأساسي](#الاستخدام-الأساسي)
4. [التثبيت المتقدم](#التثبيت-المتقدم)
5. [التخصيص والتطوير](#التخصيص-والتطوير)
6. [استكشاف الأخطاء](#استكشاف-الأخطاء)

---

## متطلبات التثبيت

### المتطلبات الأساسية:

- **Node.js**: الإصدار 14.0 أو أحدث
- **npm**: الإصدار 6.0 أو أحدث (أو yarn)
- **محرر نصوص**: VS Code أو أي محرر آخر
- **متصفح حديث**: Chrome, Firefox, Safari, Edge

### التحقق من التثبيت:

```bash
# التحقق من Node.js
node --version

# التحقق من npm
npm --version

# يجب أن تكون النتائج مثل:
# v14.0.0 (أو أحدث)
# 6.0.0 (أو أحدث)
```

---

## طرق التثبيت المختلفة

### الطريقة 1️⃣: التثبيت عبر npm (الأسهل) ⭐

هذه هي الطريقة الموصى بها للمشاريع الجديدة.

#### الخطوة 1: تثبيت المكتبة

```bash
npm install ekistyles
```

#### الخطوة 2: استيراد في ملف HTML

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطبيقي</title>
    <!-- استيراد EKI Styles -->
    <link rel="stylesheet" href="node_modules/ekistyles/dist/ekistyles.min.css">
</head>
<body>
    <h1>مرحباً بك!</h1>
    <button class="btn btn-primary">انقر هنا</button>
</body>
</html>
```

#### الخطوة 3: استخدم المكونات

```html
<!-- زر -->
<button class="btn btn-primary">أساسي</button>

<!-- بطاقة -->
<div class="card">
    <div class="card-header"><h2>العنوان</h2></div>
    <div class="card-body"><p>المحتوى</p></div>
</div>

<!-- نموذج -->
<input type="text" class="form-control" placeholder="أدخل...">
```

---

### الطريقة 2️⃣: التثبيت المباشر (CDN)

للمشاريع البسيطة أو الاختبار السريع.

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>EKI Styles Test</title>
    <!-- استخدام رابط مباشر -->
    <link rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/ekistyles/dist/ekistyles.min.css">
</head>
<body>
    <div class="container">
        <h1>اختبار EKI Styles</h1>
        <button class="btn btn-primary">انقر</button>
    </div>
</body>
</html>
```

---

### الطريقة 3️⃣: التثبيت المحلي

لتطوير أو استخدام نسخة محلية.

#### الخطوة 1: استنساخ المشروع

```bash
git clone https://github.com/EKISTUDIOink/ekistyles.git
cd ekistyles
```

#### الخطوة 2: تثبيت التبعيات

```bash
npm install
```

#### الخطوة 3: بناء المشروع

```bash
npm run build
```

#### الخطوة 4: استخدام الملف المحلي

```html
<link rel="stylesheet" href="path/to/dist/ekistyles.min.css">
```

---

### الطريقة 4️⃣: التثبيت عبر yarn

إذا كنت تستخدم yarn بدلاً من npm.

```bash
# التثبيت
yarn add ekistyles

# الاستخدام مثل npm
```

---

## الاستخدام الأساسي

### مثال 1: صفحة بسيطة

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطبيقي الأول</title>
    <link rel="stylesheet" href="node_modules/ekistyles/dist/ekistyles.min.css">
</head>
<body>
    <!-- شريط التنقل -->
    <nav class="navbar">
        <a href="#" class="navbar-brand">🎨 تطبيقي</a>
        <ul class="navbar-menu">
            <li><a href="#" class="active">الرئيسية</a></li>
            <li><a href="#">حول</a></li>
            <li><a href="#">اتصال</a></li>
        </ul>
    </nav>

    <!-- المحتوى الرئيسي -->
    <div class="container-lg">
        <h1>مرحباً بك في تطبيقي</h1>
        <p>هذا تطبيق بسيط باستخدام EKI Styles</p>

        <!-- أزرار -->
        <div style="margin: 2rem 0;">
            <button class="btn btn-primary">ابدأ الآن</button>
            <button class="btn btn-secondary">اعرف المزيد</button>
        </div>

        <!-- بطاقات -->
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <h3>الميزة 1</h3>
                    <p>وصف الميزة الأولى</p>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h3>الميزة 2</h3>
                    <p>وصف الميزة الثانية</p>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h3>الميزة 3</h3>
                    <p>وصف الميزة الثالثة</p>
                </div>
            </div>
        </div>
    </div>

    <!-- التذييل -->
    <footer class="footer">
        <div class="footer-bottom">
            <p>&copy; 2025 جميع الحقوق محفوظة</p>
        </div>
    </footer>
</body>
</html>
```

### مثال 2: نموذج اتصال

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>نموذج الاتصال</title>
    <link rel="stylesheet" href="node_modules/ekistyles/dist/ekistyles.min.css">
</head>
<body>
    <div class="container">
        <h1>اتصل بنا</h1>
        
        <form style="max-width: 600px;">
            <!-- حقل الاسم -->
            <div class="form-group">
                <label class="form-label">الاسم الكامل</label>
                <input type="text" class="form-control" placeholder="أدخل اسمك">
            </div>

            <!-- حقل البريد -->
            <div class="form-group">
                <label class="form-label">البريد الإلكتروني</label>
                <input type="email" class="form-control" placeholder="example@email.com">
                <p class="form-text">لن نشارك بريدك مع أحد</p>
            </div>

            <!-- حقل الرسالة -->
            <div class="form-group">
                <label class="form-label">الرسالة</label>
                <textarea class="form-control" placeholder="اكتب رسالتك..."></textarea>
            </div>

            <!-- الموافقة -->
            <div class="form-group">
                <label class="form-label">
                    <input type="checkbox"> أوافق على شروط الاستخدام
                </label>
            </div>

            <!-- الأزرار -->
            <button type="submit" class="btn btn-primary btn-block">إرسال</button>
            <button type="reset" class="btn btn-secondary btn-block" 
                    style="margin-top: 1rem;">مسح</button>
        </form>
    </div>
</body>
</html>
```

---

## التثبيت المتقدم

### استخدام مع Tailwind CSS

إذا كنت تريد تخصيص المكتبة بالكامل:

#### الخطوة 1: إنشاء مشروع جديد

```bash
mkdir my-project
cd my-project
npm init -y
```

#### الخطوة 2: تثبيت التبعيات

```bash
npm install ekistyles tailwindcss postcss autoprefixer
```

#### الخطوة 3: إنشاء ملف tailwind.config.js

```javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // يرث الألوان من ekistyles
      }
    },
  },
  plugins: [],
}
```

#### الخطوة 4: إنشاء ملف CSS

```css
@import 'ekistyles/src/ekistyles.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### الخطوة 5: بناء المشروع

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

---

### استخدام مع Next.js

```bash
# إنشاء مشروع Next.js
npx create-next-app@latest --typescript

# تثبيت EKI Styles
npm install ekistyles

# في globals.css
@import 'ekistyles/dist/ekistyles.css';
```

---

### استخدام مع Vue.js

```javascript
// في main.js
import 'ekistyles/dist/ekistyles.min.css'
```

---

### استخدام مع React

```javascript
// في App.jsx
import 'ekistyles/dist/ekistyles.min.css'

export default function App() {
  return (
    <div className="container">
      <h1>تطبيق React</h1>
      <button className="btn btn-primary">انقر</button>
    </div>
  )
}
```

---

## التخصيص والتطوير

### تغيير الألوان

#### الطريقة 1: عبر CSS Variables

```css
:root {
  --color-accent-alt: #7b1fa2;  /* لون أساسي مختلف */
  --color-accent: #009688;       /* لون فرعي مختلف */
  --color-bg: #f5f5f5;          /* خلفية فاتحة */
}

/* للوضع الليلي */
html.dark {
  --color-bg: #1a0033;
  --color-surface: #2d004d;
}
```

#### الطريقة 2: عبر Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom': {
          primary: '#6200ee',
          secondary: '#03dac5'
        }
      }
    }
  }
}
```

### إضافة مكونات مخصصة

```css
/* styles/custom.css */

.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md) var(--space-lg);
  background-color: var(--color-accent);
  color: white;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.custom-button:hover {
  background-color: var(--color-accent-alt);
  transform: translateY(-2px);
}
```

---

## استكشاف الأخطاء

### المشكلة: الأزرار لا تظهر بشكل صحيح

**الحل:**
```bash
# تحقق من أن ملف CSS مُستورَد بشكل صحيح
# أعد تحميل الصفحة (Ctrl+Shift+R)
# تحقق من فحص العناصر (F12)
```

### المشكلة: الألوان غير صحيحة

**الحل:**
```css
/* تأكد من أن المتغيرات معرفة */
:root {
  --color-accent-alt: #6200ee;
}

/* أو استخدم الألوان مباشرة */
.my-button {
  background-color: #6200ee !important;
}
```

### المشكلة: النصوص العربية مشوهة

**الحل:**
```html
<!-- تأكد من إضافة هذه العلامات في الـ head -->
<meta charset="UTF-8">
<html dir="rtl" lang="ar">

<!-- تحقق من استيراد خط Tajawal -->
<!-- يتم استيراده تلقائياً من Google Fonts -->
```

### المشكلة: المكتبة لا تعمل على الهاتف

**الحل:**
```html
<!-- أضف هذه العلامة في الـ head -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- تأكد من استخدام الفئات الصحيحة -->
<div class="col-6">  <!-- على الشاشات الكبيرة -->
  محتوى
</div>
```

---

## الأسئلة الشائعة

### س: هل يمكن استخدام EKI Styles مع Tailwind CSS معاً؟
**ج:** نعم! EKI Styles مبنية على Tailwind CSS ويمكن دمجها بسهولة.

### س: هل تدعم العربية بشكل كامل؟
**ج:** نعم! 100% دعم عربي مع RTL وخط Tajawal.

### س: هل يمكن تعديل الألوان؟
**ج:** نعم! استخدم CSS Variables أو Tailwind Config.

### س: ما حجم المكتبة؟
**ج:** 14 KB فقط عند الضغط (مضغوطة).

### س: هل تدعم الأجهزة القديمة؟
**ج:** تدعم Chrome 90+, Firefox 88+, Safari 14+.

---

## الموارد والمساعدة

### الروابط المهمة:
- 📖 [التوثيق الكامل](README.md)
- 🚀 [البدء السريع](QUICKSTART.md)
- 💻 [الأمثلة العملية](index.html)
- 🤝 [كيفية المساهمة](CONTRIBUTING.md)

### الدعم:
- 📧 البريد: support@ekistudio.com
- 🐛 الإبلاغ عن الأخطاء: GitHub Issues
- 💬 الأسئلة العامة: GitHub Discussions

---

## خطوات تثبيت سريعة

```bash
# 1. التثبيت
npm install ekistyles

# 2. الاستخدام
# أضف في ملفك الـ HTML:
# <link rel="stylesheet" href="node_modules/ekistyles/dist/ekistyles.min.css">

# 3. ابدأ الاستخدام!
# <button class="btn btn-primary">انقر</button>
```

---

## خريطة الملفات

```
ekistyles/
├── dist/
│   ├── ekistyles.css           (CSS كامل)
│   └── ekistyles.min.css       (CSS مضغوط)
├── src/
│   └── ekistyles.css           (مصدر CSS)
├── README.md                    (توثيق رئيسي)
├── QUICKSTART.md               (دليل سريع)
├── INSTALLATION.md             (هذا الملف)
├── package.json                (معلومات الحزمة)
└── index.html                  (أمثلة)
```

---

**تم بنجاح! أنت الآن جاهز للبدء في استخدام EKI Styles 🎉**

للمزيد من المعلومات، اقرأ [README.md](README.md)

صُنع بـ ❤️ من قبل **EKISTUDIO** | **MIT License**
