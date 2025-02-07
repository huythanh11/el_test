# el_test

Prject Setup:
```
project-root/
├── config/
│ ├── config.js # Configuration settings for different 
├── src/
│ ├── data/
│ │ └── testdata.js # Test data generation using Faker
│ ├── pages/
│ │ ├── basePage.js # Base page with common methods
│ │ ├── homePage.js # Home page object
│ │ ├── signInPage.js # Sign in page object
│ │ ├── signUpPage.js # Sign up page object
│ │ └── welcomePage.js # Welcome page object
│ └── tests/
│ └── e2e/
│ ├── test2.spec.js # Test scenarios
│ └── signin_signup_negative.spec.js
├── allure-results/ # Allure test results
├── allure-report/ # Generated Allure reports
├── playwright.config.js # Playwright configuration
└── package.json # Project dependencies and scripts
```

## 🎯 Features

## Design Decisions

1. **Page Object Model (POM)**
   - Each page has its own class with selectors and methods
   - BasePage class contains common functionality
   - Promotes code reuse and maintainability

2. **Configuration Management**
   - Environment-specific configurations (dev, etc...)
   - Easy switching between environments using ENV variable
   - Secure credential management using environment variables

3. **Test Data Management**
   - Faker.js for generating random test data
   - Centralized test data generation in testdata.js

4. **Reporting**
   - Allure reporting integration
   - Detailed test execution reports with screenshots if failed


## 🔧 Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Git


## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory> 
```

2. Install denpendencies: 
`npm install`
`npx playwright install`

3. How to run:
syntax: `npm run <script tag>`
    e.g: `npm run test:e2e`
```
  "scripts": {
    "test:e2e": "playwright test tests/e2e",
    "test:env": "ENV=dev npx playwright test tests/e2e",
    "report": "npx allure generate ./allure-results --clean && npx allure open",
    "test:ci": "cross-env ENV=ci playwright test"
```

