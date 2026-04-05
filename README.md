# 🌱 ÖŇDE BARYJY ÝYLADYŞHANA

> **Передовая теплица Центральной Азии** — научный справочник по пестицидам, опылителям и плодовым культурам ЦА.  
> **Author / Awtor:** yesenow dayanc  
> **Languages:** 🇷🇺 Русский · 🇬🇧 English · 🇹🇲 Türkmen  
> **Status:** ✅ Production Ready · PWA · Offline-capable

---

## 📋 Содержание

1. [О проекте](#о-проекте)
2. [Реализованные функции](#реализованные-функции)
3. [Структура файлов](#структура-файлов)
4. [🚀 Пошаговый деплой на GitHub Pages](#-пошаговый-деплой-на-github-pages)
5. [🔍 Регистрация в Google Search Console](#-регистрация-в-google-search-console)
6. [📊 Yandex Вебмастер и Bing](#-yandex-вебмастер-и-bing)
7. [⚡ SEO Чеклист — что уже сделано](#-seo-чеклист)
8. [💡 API и данные](#-api-и-данные)
9. [🛠️ Что можно улучшить](#️-что-можно-улучшить)

---

## О проекте

**ÖŇDE BARYJY ÝYLADYŞHANA** — многоязычная PWA-платформа для агрономов и фермеров Центральной Азии.  
Содержит:
- Научные данные о классах пестицидов и их токсичности для опылителей
- Обзор видов опылителей ЦА с сезонным календарём
- Данные по 8 плодовым культурам
- Калькуляторы (дозировка, риск для пчёл, ульи/га, **синергизм**)
- Архив/база знаний с системой аккаунтов (регистрация, вход, профиль)
- SEO-руководство прямо внутри приложения
- Работает **онлайн и офлайн** (PWA + Service Worker)

---

## Реализованные функции

### 🧭 Навигация и интерфейс
- [x] Фиксированный навбар с гамбургер-меню
- [x] **Глобальный поиск** (🔍 кнопка в навбаре)
- [x] Переключатель языков RU / EN / TK
- [x] Анимированный переход между страницами
- [x] Частицы на hero-секции

### 📚 Контент
- [x] **Пестициды**: 6 классов — неоникотиноиды, пиретроиды, ФОС/карбаматы, фунгициды, гербициды, акарициды
- [x] **Опылители**: 5 видов с картой сезонной активности (Chart.js)
- [x] **Плодовые культуры**: 8 культур с данными по урожайности
- [x] **Риски**: LD50 сравнение, сублетальные эффекты, CCD
- [x] **Источники**: 15+ рецензируемых публикаций с DOI-ссылками

### 🧮 Калькуляторы (4 модуля)
- [x] **Дозировка**: Площадь × Концентрация × Норма воды
- [x] **Риск для пчёл**: Воздействие / LD50, визуальный индикатор
- [x] **Ульи / га**: Рекомендуемая плотность и прирост урожая
- [x] **Синергизм**: Расчёт коэффициента синергизма фунгицид + инсектицид

### 👤 Система аккаунтов
- [x] Регистрация / Вход / Выход (localStorage)
- [x] Профиль с аватаром, статистикой и настройками
- [x] Роли: Admin / User
- [x] Вкладка «Мои записи» в профиле

### 🗂️ Архив & База знаний
- [x] Добавление записей (требует аккаунт)
- [x] **Редактирование** своих записей
- [x] Удаление (автор / admin)
- [x] Лайки + счётчик просмотров
- [x] Поиск и фильтр по типу
- [x] Поделиться (copy-link)
- [x] Начальные данные (3 демо-записи)

### 🔍 SEO
- [x] Meta description, keywords, author
- [x] Open Graph (Facebook/Telegram)
- [x] Twitter Card
- [x] JSON-LD (Schema.org WebSite)
- [x] `sitemap.xml` (8 страниц)
- [x] `robots.txt`
- [x] Canonical URL
- [x] Заготовка для Google Search Console verification
- [x] Hreflang (ru, en, tk)
- [x] Встроенное SEO-руководство (страница «SEO Гид»)

### 📱 PWA
- [x] `manifest.json` (standalone, иконки, shortcuts)
- [x] Service Worker (cache-first, stale-while-revalidate)
- [x] Баннер установки (Install Banner)
- [x] Онлайн/офлайн индикатор

---

## Структура файлов

```
index.html                  # Главная страница (SPA, все разделы)
css/
  style.css                 # Полный CSS v2.1
js/
  i18n.js                   # Переводы RU/EN/TK
  app.js                    # Вся логика: auth, archive, calc, charts
  main.js                   # (legacy, не используется в v2)
sw.js                       # Service Worker v2.1
manifest.json               # PWA манифест
sitemap.xml                 # Карта сайта
robots.txt                  # Директивы для краулеров
.github/
  workflows/
    deploy.yml              # GitHub Actions (auto-deploy)
README.md                   # Этот файл
```

---

## 🚀 Пошаговый деплой на GitHub Pages

### Шаг 1 — Создайте GitHub репозиторий

1. Перейдите на [github.com](https://github.com) → кнопка **New**
2. Введите имя репозитория, например: `onde-baryjy-yyladyshhana`
3. Выберите **Public** (обязательно для GitHub Pages бесплатного тарифа)
4. Нажмите **Create repository**

### Шаг 2 — Загрузите файлы

**Вариант A — через браузер (без Git):**
1. В репозитории нажмите **Add file → Upload files**
2. Перетащите **все файлы проекта** (index.html, css/, js/, sw.js, manifest.json, sitemap.xml, robots.txt, .github/)
3. Нажмите **Commit changes**

**Вариант B — Git командная строка:**
```bash
git init
git add .
git commit -m "Initial commit: ÖŇDE BARYJY ÝYLADYŞHANA v2.1"
git remote add origin https://github.com/ВАШ_НИК/onde-baryjy-yyladyshhana.git
git branch -M main
git push -u origin main
```

### Шаг 3 — Включите GitHub Pages

1. В репозитории → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → папка **/ (root)**
4. Нажмите **Save**
5. Через 1–3 минуты сайт будет доступен по адресу:  
   `https://ВАШ_НИК.github.io/onde-baryjy-yyladyshhana/`

### Шаг 4 — Замените URL в файлах

Найдите и замените `your-username.github.io/onde-baryjy-yyladyshhana` на ваш реальный URL в:
- `index.html` (3 места: og:url, canonical, JSON-LD url)
- `sitemap.xml` (все теги `<loc>`)
- `robots.txt` (Sitemap директива)

---

## 🔍 Регистрация в Google Search Console

### Шаг 1 — Добавьте ресурс
1. Откройте [search.google.com/search-console](https://search.google.com/search-console)
2. Войдите с аккаунтом Google
3. Нажмите **«Добавить ресурс»**
4. Выберите **«URL-prefix»**
5. Введите полный URL: `https://ВАШ_НИК.github.io/onde-baryjy-yyladyshhana/`

### Шаг 2 — Верификация через HTML-тег
1. Выберите метод **«HTML tag»**
2. Скопируйте код вида:  
   `<meta name="google-site-verification" content="ВАШИ_СИМВОЛЫ" />`
3. Откройте `index.html` → найдите строку:  
   `content="ВСТАВЬТЕ_ВАШ_VERIFICATION_CODE_ЗДЕСЬ"`
4. Замените на ваш код → сохраните → сделайте git push
5. Вернитесь в Search Console → нажмите **«Подтвердить»**

### Шаг 3 — Отправьте Sitemap
1. Левое меню → **Sitemaps**
2. В поле вставьте:  
   `https://ВАШ_НИК.github.io/onde-baryjy-yyladyshhana/sitemap.xml`
3. Нажмите **«Отправить»**
4. Статус должен стать **«Успешно»**

### Шаг 4 — Запросите индексацию
1. В поле URL Inspection вверху введите URL главной
2. Нажмите **«Запросить индексирование»**
3. ⏱️ Первые страницы появятся в Google через **3–14 дней**

---

## 📊 Yandex Вебмастер и Bing

### Яндекс Вебмастер
1. Перейдите на [webmaster.yandex.ru](https://webmaster.yandex.ru)
2. Добавьте сайт
3. Верификация через HTML-тег (аналогично Google)
4. Добавьте sitemap
5. Индексация: **1–3 недели**

### Bing Webmaster Tools
1. Перейдите на [bing.com/webmasters](https://www.bing.com/webmasters)
2. Импортируйте из Google Search Console **одним кликом**
3. Bing проиндексирует автоматически

---

## ⚡ SEO Чеклист

| Элемент | Статус | Примечание |
|---------|--------|-----------|
| `<meta name="description">` | ✅ | 3 языка |
| `<meta name="keywords">` | ✅ | RU/EN/TK ключи |
| Open Graph | ✅ | og:title, og:description, og:url |
| Twitter Card | ✅ | summary_large_image |
| JSON-LD Schema.org | ✅ | WebSite тип |
| `sitemap.xml` | ✅ | 8 страниц, hreflang |
| `robots.txt` | ✅ | Yandex Crawl-delay |
| Canonical URL | ✅ | Требует замены URL |
| Hreflang | ✅ | ru, en, tk |
| Google Verification meta | ⚠️ | **Требует вашего кода** |
| PWA manifest | ✅ | Повышает Core Web Vitals |
| HTTPS | ✅ | GitHub Pages |
| Семантический HTML | ✅ | nav, main, section, article |
| Мобильная адаптация | ✅ | Responsive CSS |
| Скорость загрузки | ✅ | CDN, минимум запросов |

---

## 💡 API и данные

| Хранилище | Назначение | Ключ |
|-----------|-----------|------|
| `localStorage.obyl_users` | Пользователи | CRUD |
| `localStorage.obyl_session` | Текущая сессия | JSON |
| `localStorage.obyl_archive` | Записи архива | Array |
| `localStorage.obyl_lang` | Язык интерфейса | 'ru'/'en'/'tk' |

---

## 🛠️ Что можно улучшить

1. **Backend**: Заменить localStorage на реальный API (Firebase / Supabase)
2. **Авторизация**: OAuth (Google, GitHub)
3. **Изображения**: Добавить реальные фото опылителей
4. **Карта**: Leaflet.js с ареалами видов ЦА
5. **Экспорт**: PDF / Excel из калькулятора
6. **Notifications**: Push-уведомления о новых записях
7. **Admin panel**: Модерация записей архива
8. **Комментарии**: Обсуждения под записями архива

---

*Создано с ❤️ для агрономов Центральной Азии*  
*© 2024–2025 yesenow dayanc · ÖŇDE BARYJY ÝYLADYŞHANA*
