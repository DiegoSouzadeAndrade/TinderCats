# 🐾 Tinder Cats

**Tinder Cats** is a fun mobile application built with React Native that lets you swipe through cat breeds and vote on your favorites — similar to Tinder, but for cat lovers! 🐱💕

This app fetches breed data from [TheCatAPI](https://thecatapi.com/), lets users swipe cards, and vote with like/dislike buttons.

---

## 📱 Features

- Swipeable cards showing cat breed images and info
- Like 😻 or Dislike 🙀 votes with fun icon buttons
- Internationalization (i18n) support for English and Portuguese
- Redux for global state management
- TypeScript for type safety
- Animated transitions for better UX

---

## 🛠️ Tech Stack

- **React Native**
- **TypeScript**
- **Redux Toolkit** for state management
- **Jest** + **React Native Testing Library** for unit testing
- **i18next** for translations
- **Axios** for API calls
- **TheCatAPI** as data source

---

## 📦 Installation

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/tinder-cats.git
cd tinder-cats

    Install dependencies:

npm install

or

yarn

    Start Metro bundler:

npm start

    Run on Android:

npm run android

or on iOS:

npm run ios

    Make sure you have an Android or iOS emulator set up, or a device connected.

🧪 Running Tests

npm test

Tests are written using:

    jest

    @testing-library/react-native

🌍 Internationalization

Languages supported:

    English (en)

    Portuguese (pt)

You can switch the language by changing the lng setting inside i18n/index.ts.
🐱 API Reference

The app uses https://api.thecatapi.com/v1/breeds to fetch cat breed data. No API key is required for basic usage.

Each cat object includes:

{
  "id": "abys",
  "name": "Abyssinian",
  "life_span": "14 - 15",
  "image": {
    "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
  }
}

📂 Folder Structure

├── components/
│   ├── CatCard.tsx
│   ├── SwipeDeck.tsx
│   └── VoteButtons.tsx
├── redux/
│   ├── hooks.ts
│   ├── slices/
│   │   ├── catListSlice.ts
│   │   └── votesSlice.ts
│   └── store.ts
├── screens/
│   └── HomeScreen.tsx
├── i18n/
│   └── index.ts
├── App.tsx
└── ...

🧾 Versioning

    React Native: 0.80.0

    React: 19.1.0

    TypeScript: 5.0.4

    Redux Toolkit: 2.8.2

    Jest: 29.7.0

See package.json for the full list of dependencies.
