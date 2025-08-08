# Kore Investment Platform

A modern investment platform built with Nuxt 4, Vue 3, and TypeScript, featuring a comprehensive investment overview page with real-time data management, SSR capabilities, and a robust testing suite.

## 🚀 Technologies & Versions

### Core Framework

- **Nuxt**: ^4.0.3
- **TypeScript**: ^5.9.2

### State Management

- **Pinia**: ^3.0.3

### Styling & UI

- **Tailwind CSS**: ^3.4.0
- **@nuxt/image**: ^1.11.0
- **@nuxtjs/google-fonts**: ^3.2.0
- **FontAwesome**: ^7.0.0

## 📦 Installation

### Prerequisites

- **Node.js**: 18.x or higher
- **Yarn**: 1.22.22 or higher (recommended package manager)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd kore-page

# Install dependencies
yarn install

# Prepare Nuxt
yarn postinstall
```

## 🏃‍♂️ Execution

### Development

```bash
# Start development server
yarn dev

# Access the application at http://localhost:3000
```

### Production

```bash
# Build for production
yarn build

# Preview production build
yarn preview

# Generate static site
yarn generate
```

## 🧪 Testing

### Run Tests

```bash
# Run all tests
yarn test

```

## 🏗️ Architecture & Design Patterns

### Project Structure

```
kore-page/
├── src/
│   ├── app/                    # Application layer
│   │   └── providers/         # Dependency injection
│   │       └── store/         # State management
│   ├── features/              # Feature-based modules
│   │   └── investment/        # Investment feature
│   │       ├── composables/   # Vue composables
│   │       ├── lib/           # Feature utilities
│   │       └── ui/            # Feature components
│   ├── shared/                # Shared resources
│   │   ├── lib/              # Shared utilities
│   │   └── ui/               # Shared components
│   ├── widgets/               # Reusable widgets
│   │   ├── header/           # Header widget
│   │   └── footer/           # Footer widget
│   └── pages/                # Page components
└── test/                     # Test files
```

### Design Patterns

#### 1. **Feature-Sliced Design (FSD)**

- **Layers**: app, features, shared, widgets, pages
- **Isolation**: Each feature is self-contained
- **Dependencies**: Clear dependency direction (app → features → shared)

#### 2. **Dependency Injection**

- **Providers**: Centralized dependency management
- **Store Pattern**: Pinia stores for state management
- **Composables**: Reusable Vue composition functions

#### 3. **Singleton Pattern**

- **API Layer**: InvestmentAPI uses singleton pattern
- **Store Instances**: Pinia stores are singletons

#### 4. **Strategy Pattern**

- **SSR/CSR Fallback**: Automatic fallback between server-side and client-side rendering
- **Data Loading**: Multiple strategies for data fetching

#### 5. **Observer Pattern**

- **Reactive State**: Vue's reactivity system
- **Store Subscriptions**: Pinia store subscriptions

### State Management Architecture

#### Pinia Store Structure

```typescript
// Investment Store
interface InvestmentState {
  bannerData: InvestmentBannerData | null;
  loading: boolean;
  error: string | null;
}

// Getters for computed values
// Actions for async operations
```

#### Data Flow

1. **SSR First**: Attempt server-side data fetching
2. **Client Fallback**: Fallback to client-side if SSR fails
3. **Store Sync**: Synchronize SSR data with client store
4. **Reactive Updates**: Vue reactivity for UI updates
