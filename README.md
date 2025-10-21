# Portfolio Website - Three States

A modern portfolio website with three seamlessly toggled states: Landing Page, Developer Portfolio, and Designer Portfolio.

## Features

- **Three Distinct Views**: Landing page, developer portfolio, and designer portfolio
- **Smooth Transitions**: Framer Motion animations for seamless view switching
- **State Management**: Zustand for global state with scroll position restoration
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Performance Optimized**: Lazy loading, code splitting, and React.memo
- **Modern Stack**: ViteJS, React, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: ViteJS
- **UI Library**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Fixed header with toggle switch
│   ├── LandingPage.tsx         # Initial landing view
│   ├── DevPortfolio/           # Developer portfolio components
│   │   ├── index.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── DesignPortfolio/        # Designer portfolio components
│       ├── index.tsx
│       ├── Hero.tsx
│       ├── Gallery.tsx
│       ├── CaseStudies.tsx
│       └── Contact.tsx
├── store/
│   └── portfolioStore.ts       # Zustand state management
├── utils/
│   └── transitions.ts          # Framer Motion variants
└── App.tsx                     # Main app component
```

## Key Features

### Header Toggle
- Fixed position header with toggle switch
- Switches between Developer and Designer views
- Inactive on landing page
- "Home" button to return to landing

### State Management
- Three modes: 'landing', 'dev', 'design'
- Scroll position preservation
- History stack for navigation
- SessionStorage persistence

### Transitions
- 400-600ms cross-fade animations
- Smooth scroll restoration
- Debounced toggle (100ms)
- Scroll disabled during transitions

### Performance
- Lazy loaded portfolio components
- React.memo for portfolio views
- CSS containment for painting optimization
- Optimized bundle size

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Customization

### Update Content

- **Developer Portfolio**: Edit files in `src/components/DevPortfolio/`
- **Designer Portfolio**: Edit files in `src/components/DesignPortfolio/`
- **Landing Page**: Edit `src/components/LandingPage.tsx`

### Styling

- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Animations**: Modify `src/utils/transitions.ts`
- **Typography**: Update Tailwind theme

### Contact Forms

The contact forms currently use simulated submission. To integrate with a backend:

1. Replace the `handleSubmit` function in Contact components
2. Add your API endpoint
3. Handle form validation and error states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Author

Built with ❤️ using modern web technologies
