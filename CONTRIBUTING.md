# Contributing to Avelo

First off, thank you for considering contributing to Avelo! It's people like you that make Avelo such a great tool. We welcome contributions from the community and are grateful for any time you can dedicate.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Setup](#development-setup)
4. [Making Changes](#making-changes)
5. [Style Guidelines](#style-guidelines)
6. [Commit Guidelines](#commit-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [hello@avelo.com](mailto:hello@avelo.com).

## Getting Started

1. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository
   - Clone your fork locally: `git clone https://github.com/YOUR-USERNAME/avelo.git`

2. **Create a Branch**
   - Create a branch for your feature: `git checkout -b feature/your-feature-name`
   - Use descriptive branch names (e.g., `feature/add-payment-gateway`, `fix/navbar-responsive`)

3. **Install Dependencies**
   ```bash
   cd avelo
   npm install
   ```

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Environment Setup
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Making Changes

### Component Guidelines
1. **File Structure**
   - Place new components in `src/components`
   - Create a new directory for complex components
   - Include tests in `__tests__` directory

2. **Naming Conventions**
   - Use PascalCase for component files (e.g., `ProductCard.tsx`)
   - Use camelCase for utility files
   - Use kebab-case for CSS files

3. **TypeScript**
   - Always define proper interfaces for props
   - Export interfaces when they might be reused
   - Use proper type annotations

### Example Component Structure
```typescript
import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  prop1: string;
  prop2?: number;
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 = 0 }) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

## Style Guidelines

### CSS/Tailwind Guidelines
1. Follow the existing color palette:
   ```javascript
   colors: {
     primary: { /* Rose tones */ },
     secondary: { /* Muted blues */ },
     accent: { /* Soft pinks */ },
     cream: '#FDF8F5',
     sand: '#E5DCD7',
     stone: '#A69F99',
     charcoal: '#2C2825'
   }
   ```

2. Use Tailwind's utility classes consistently
3. Maintain responsive design principles
4. Follow mobile-first approach

### JavaScript/TypeScript Guidelines
1. Use functional components with hooks
2. Implement proper error handling
3. Write meaningful comments for complex logic
4. Use TypeScript's strict mode

## Commit Guidelines

1. **Commit Message Format**
   ```
   type(scope): subject

   body

   footer
   ```

2. **Types**
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style changes (formatting, etc.)
   - refactor: Code refactoring
   - test: Adding tests
   - chore: Maintenance tasks

3. **Example**
   ```
   feat(product): add size selector component

   - Implement size selection functionality
   - Add size availability check
   - Include size guide modal

   Closes #123
   ```

## Pull Request Process

1. **Before Submitting**
   - Update documentation if needed
   - Add tests for new features
   - Ensure all tests pass: `npm run test`
   - Run linting: `npm run lint`
   - Update the README.md if needed

2. **PR Description Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## How Has This Been Tested?
   Describe testing process

   ## Checklist
   - [ ] My code follows style guidelines
   - [ ] I have commented my code where needed
   - [ ] I have updated documentation
   - [ ] My changes generate no warnings
   - [ ] I have added tests
   - [ ] All tests pass
   ```

## Community

- Join our [Discord](https://discord.gg/avelo)
- Follow us on [Twitter](https://twitter.com/avelo)
- Read our [Blog](https://blog.avelo.com)

<!-- ## Questions?

If you have any questions or need help, please:
1. Check our [FAQ](https://avelo.com/faq)
2. Join our Discord community
3. Open a [Discussion](https://github.com/avelo/avelo/discussions)
4. Email us at [hello@avelo.com](mailto:hello@avelo.com) -->

Thank you for contributing to Avelo! 🌟
