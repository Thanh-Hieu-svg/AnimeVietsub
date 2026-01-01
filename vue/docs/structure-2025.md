# 📁 Cấu trúc thư mục Vue 2025

> **Tech Stack:** Vite + Vue 3 + Pinia + Vue Router  
> **Architecture:** Feature-based + Layer Architecture

---

## 🌳 Cây thư mục

```
vue/
├── 📂 src/
│   ├── 🌐 api/                    # HTTP client, API calls
│   │   ├── httpClient.js
│   │   ├── authApi.js
│   │   └── animeApi.js
│   │
│   ├── 🎨 assets/                 # Static assets (images, icons, fonts)
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │
│   ├── 🧩 components/             # Reusable components
│   │   ├── common/                # Button, Input, Modal, Card...
│   │   ├── layout/                # Header, Footer, Sidebar...
│   │   └── widgets/               # Complex reusable blocks
│   │
│   ├── 🎣 composables/           # Composition API hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── usePagination.js
│   │
│   ├── ⚡ features/               # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── store/
│   │   │   └── index.js
│   │   ├── user/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── store/
│   │   └── anime/
│   │       ├── components/
│   │       ├── pages/
│   │       └── store/
│   │
│   ├── 📄 pages/                  # Route-level pages
│   │   ├── HomePage.vue
│   │   ├── LoginPage.vue
│   │   └── NotFoundPage.vue
│   │
│   ├── 🗺️ router/                 # Vue Router
│   │   ├── index.js
│   │   └── routes/
│   │       ├── authRoutes.js
│   │       └── appRoutes.js
│   │
│   ├── 🗄️ store/                  # Pinia stores (global)
│   │   ├── appStore.js
│   │   └── userStore.js
│   │
│   ├── ⚙️ services/               # Business logic (no UI)
│   │   ├── authService.js
│   │   └── animeService.js
│   │
│   ├── ⚙️ config/                 # App configuration
│   │   ├── env.js
│   │   ├── appConfig.js
│   │   └── constants.js
│   │
│   ├── 🛠️ utils/                  # Helper functions
│   │   ├── format.js
│   │   ├── validators.js
│   │   └── date.js
│   │
│   ├── 📝 types/                  # TypeScript types (if using TS)
│   │   └── user.ts
│   │
│   ├── 🔌 plugins/                # Vue plugins
│   │   ├── i18n.js
│   │   └── vuetify.js
│   │
│   ├── 🎨 styles/                 # Global styles
│   │   ├── main.scss
│   │   └── variables.scss
│   │
│   ├── App.vue                    # Root component
│   └── main.js                    # App entry point
│
├── 📂 public/                     # Public assets
├── 📚 docs/                       # Documentation
│   └── structure-2025.md
├── index.html
├── vite.config.js
└── package.json
```

---

## 📋 Chi tiết các thư mục

### 🌐 `api/`
**Mục đích:** Quản lý tất cả các HTTP requests  
**Nội dung:**
- `httpClient.js` - Axios instance với interceptors
- `authApi.js` - API calls cho authentication
- `animeApi.js` - API calls cho anime features
- Mỗi domain/module có 1 file riêng

---

### 🧩 `components/`
**Mục đích:** Các component có thể tái sử dụng

#### `components/common/`
- Component nhỏ, đơn giản
- Ví dụ: `Button.vue`, `Input.vue`, `Modal.vue`, `Card.vue`, `Badge.vue`

#### `components/layout/`
- Component layout chính của app
- Ví dụ: `Header.vue`, `Footer.vue`, `Sidebar.vue`, `Navbar.vue`

#### `components/widgets/`
- Block UI phức tạp nhưng vẫn reusable
- Ví dụ: `AnimeCard.vue`, `UserProfile.vue`, `SearchBar.vue`

---

### 🎣 `composables/`
**Mục đích:** Composition API hooks dùng lại  
**Ví dụ:**
- `useAuth.js` - Quản lý authentication state
- `useFetch.js` - Custom fetch hook với loading/error
- `usePagination.js` - Logic phân trang
- `useDarkMode.js` - Toggle dark mode

---

### ⚡ `features/`
**Mục đích:** Tổ chức code theo từng tính năng (Feature-based architecture)

**Cấu trúc mỗi feature:**
```
features/
└── anime/
    ├── components/      # Component chỉ dùng trong feature này
    ├── pages/          # Page của feature
    ├── store/          # Pinia store riêng của feature
    ├── services/       # Business logic riêng (optional)
    └── index.js        # Export public API của feature
```

**Ví dụ features:**
- `auth/` - Authentication & Authorization
- `user/` - User management
- `anime/` - Anime features

---

### 📄 `pages/`
**Mục đích:** Các page component gắn với route  
**Quy ước:** Tên file kết thúc bằng `Page.vue`  
**Ví dụ:**
- `HomePage.vue`
- `LoginPage.vue`
- `NotFoundPage.vue`

---

### 🗺️ `router/`
**Mục đích:** Cấu hình Vue Router

**Cấu trúc:**
- `index.js` - Router instance chính
- `routes/` - Tách routes theo module (optional)
  - `authRoutes.js`
  - `appRoutes.js`

---

### 🗄️ `store/`
**Mục đích:** Pinia stores cấp global (dùng chung nhiều feature)

**Ví dụ:**
- `appStore.js` - App state (theme, language, sidebar...)
- `userStore.js` - Current user info

> **Lưu ý:** Store riêng của từng feature nên đặt trong `features/[feature]/store/`

---

### ⚙️ `services/`
**Mục đích:** Business logic không dính UI  
**Ví dụ:**
- `authService.js` - Logic xử lý authentication
- `animeService.js` - Logic xử lý anime data

---

### ⚙️ `config/`
**Mục đích:** Configuration và constants  
**Nội dung:**
- `env.js` - Map environment variables
- `appConfig.js` - App configuration
- `constants.js` - Constants (API endpoints, status codes...)

---

### 🛠️ `utils/`
**Mục đích:** Helper functions thuần túy  
**Ví dụ:**
- `format.js` - Format number, currency, date...
- `validators.js` - Validation functions
- `date.js` - Date utilities
- `string.js` - String manipulation

---

### 📝 `types/`
**Mục đích:** TypeScript type definitions (nếu dùng TS)  
**Ví dụ:**
- `user.ts` - User types
- `api.ts` - API response types

---

### 🔌 `plugins/`
**Mục đích:** Đăng ký Vue plugins  
**Ví dụ:**
- `i18n.js` - Internationalization
- `vuetify.js` - Vuetify UI library
- `dayjs.js` - Day.js date library

---

### 🎨 `styles/`
**Mục đích:** Global styles và theme  
**Nội dung:**
- `main.scss` - Main stylesheet
- `variables.scss` - SCSS variables (colors, spacing...)
- `mixins.scss` - SCSS mixins (optional)

---

## 🚀 Quy trình làm việc

### 1️⃣ Tạo feature mới

```bash
# Tạo thư mục feature
mkdir src/features/anime

# Tạo cấu trúc bên trong
cd src/features/anime
mkdir components pages store
touch index.js
```

**Bước tiếp theo:**
- Tạo page trong `pages/AnimeListPage.vue`
- Tạo store trong `store/animeStore.js` (nếu cần)
- Export public API trong `index.js`

---

### 2️⃣ Khai báo route

```javascript
// router/index.js
import AnimeListPage from '@/features/anime/pages/AnimeListPage.vue'

const routes = [
  {
    path: '/anime',
    name: 'anime-list',
    component: AnimeListPage
  }
]
```

---

### 3️⃣ Gọi API

```javascript
// api/animeApi.js
import httpClient from './httpClient'

export const getAnimeList = () => {
  return httpClient.get('/api/anime')
}

// services/animeService.js (nếu logic phức tạp)
import { getAnimeList } from '@/api/animeApi'

export const fetchAnimeWithPagination = async (page = 1) => {
  const data = await getAnimeList()
  // Xử lý logic...
  return processedData
}
```

---

### 4️⃣ Dùng lại logic/UI

**Logic chia sẻ:**
- → Đặt trong `composables/` (nếu là hook)
- → Đặt trong `utils/` (nếu là pure function)
- → Đặt trong `services/` (nếu là business logic)

**UI chia sẻ:**
- → Đặt trong `components/common/` (component nhỏ)
- → Đặt trong `components/widgets/` (component phức tạp)

---

## ⚠️ Best Practices

### ✅ Nên làm

- ✅ Tổ chức code theo **feature** khi feature lớn
- ✅ Đặt tên file/component **rõ ràng, có ý nghĩa**
- ✅ Tách logic phức tạp ra `services/` hoặc `composables/`
- ✅ Dùng `composables/` cho logic có state
- ✅ Dùng `utils/` cho pure functions
- ✅ Store global chỉ cho state dùng chung nhiều nơi

### ❌ Không nên

- ❌ Nhét quá nhiều logic vào `App.vue`
- ❌ Đặt component riêng của feature vào `components/common/`
- ❌ Tạo store global cho state chỉ dùng trong 1 feature
- ❌ Mix business logic vào component
- ❌ Hardcode constants, nên đặt trong `config/constants.js`

---

## 📚 Tài liệu tham khảo

- [Vue 3 Documentation](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

---

**Last updated:** 2025
