# Contributing to Dami Olatunji Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 🌟 How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Use a clear, descriptive title
- Provide a detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Add comments where necessary

3. **Test your changes**
   ```bash
   npm run dev        # Test in development
   npm run build      # Ensure production build works
   npm run lint       # Check for linting errors
   npm run type-check # Verify TypeScript types
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
   Use clear, descriptive commit messages following conventional commits:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation changes
   - `style:` formatting, missing semicolons, etc.
   - `refactor:` code restructuring
   - `test:` adding tests
   - `chore:` maintenance tasks

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Ensure all checks pass

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow React best practices and hooks guidelines
- Use functional components over class components
- Keep components focused and single-purpose
- Use meaningful variable and function names

### File Naming

- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Styles: `kebab-case.css` (e.g., `navbar-styles.css`)

### Component Structure

```tsx
import React from 'react';

interface ComponentNameProps {
  // Props definition
}

export const ComponentName: React.FC<ComponentNameProps> = ({ props }) => {
  // Component logic
  
  return (
    // JSX
  );
};
```

### Formatting

This project uses Prettier for code formatting:
```bash
npm run format
```

ESLint is used for code quality:
```bash
npm run lint
```

## 🔍 Code Review Process

1. All submissions require review before merging
2. Maintainers will review your PR and may request changes
3. Address feedback and update your PR
4. Once approved, your PR will be merged

## 📝 Documentation

- Update README.md if you change functionality
- Add JSDoc comments for complex functions
- Update CHANGELOG.md for notable changes

## ✅ Questions?

Feel free to open an issue for any questions or clarifications needed.

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!
