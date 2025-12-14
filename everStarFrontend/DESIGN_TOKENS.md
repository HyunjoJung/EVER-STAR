# Design Tokens - EverStar Frontend

This document describes the design system tokens used throughout the EverStar application.

## Table of Contents
- [Colors](#colors)
- [Typography](#typography)
- [Spacing](#spacing)
- [Shadows](#shadows)
- [Border Radius](#border-radius)
- [Breakpoints](#breakpoints)

---

## Colors

### Primary Colors
Used for main brand elements and call-to-action buttons.

| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Main Primary | `var(--mainprimary)` | Primary brand color | `bg-mainprimary` |
| Main Primary Text | `var(--mainprimary-text)` | Text on primary background | `text-mainprimary-text` |
| Main Secondary | `var(--mainsecondary)` | Secondary brand color | `bg-mainsecondary` |
| Background Orange | `var(--bgorange)` | Orange backgrounds | `bg-bgorange` |

### Greyscale Colors
Used for text, borders, and backgrounds throughout the interface.

| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Black 100% | `var(--greyscaleblack-100)` | Primary text, headings | `text-greyscaleblack-100` |
| Black 80% | `var(--greyscaleblack-80)` | Secondary text | `text-greyscaleblack-80` |
| Black 60% | `var(--greyscaleblack-60)` | Tertiary text, captions | `text-greyscaleblack-60` |
| Black 40% | `var(--greyscaleblack-40)` | Disabled text | `text-greyscaleblack-40` |
| Black 20% | `var(--greyscaleblack-20)` | Borders, dividers | `border-greyscaleblack-20` |
| White | `var(--greyscalewhite)` | White backgrounds | `bg-greyscalewhite` |

### Background Colors

| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Background Grey | `var(--bggrey)` | Page backgrounds | `bg-bggrey` |
| Background Modal | `var(--bgmodal)` | Modal backgrounds | `bg-bgmodal` |

### Semantic Colors

| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Error | `var(--mainerror)` | Error states | `text-mainerror` |
| Required | `#fd2929` | Required field indicators | `text-required` |

### Custom Component Colors

#### Tab Colors
| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Tab Active | `#ff9078` | Active tab indicator | `border-tab-active` |
| Tab Active Text | `#f28c76` | Active tab text | `text-tab-active-text` |
| Tab Inactive | `#dbe4eb` | Inactive tab indicator | `bg-tab-inactive` |
| Tab Border | `#c3c9d3` | Tab container border | `border-tab-border` |

#### Post-it Note Colors
| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Pink | `#FFCFE6` | Pink post-it notes | `bg-postit-pink` |
| Green | `#D6F8CF` | Green post-it notes | `bg-postit-green` |
| Blue | `#CFEEF8` | Blue post-it notes | `bg-postit-blue` |
| Purple | `#E6CFFF` | Purple post-it notes | `bg-postit-purple` |
| Yellow | `#FFF9CF` | Yellow post-it notes | `bg-postit-yellow` |
| Gray | `#E8E8E8` | Gray post-it notes | `bg-postit-gray` |

### Utility Colors

| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Text Dark | `#1f2329` | Dark text (legacy) | `text-text-dark` |
| Shadow Color | `#dbe5ec` | Shadow color (legacy) | N/A |

---

## Typography

### Font Families

| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Noto Sans KR | `'Noto Sans KR'` | Default body text (Korean) | `font-body` |
| Noto Sans KR Bold | `'Noto_Sans_KR-Bold', Helvetica` | Bold Korean text | `font-noto-bold` |
| Kyobo Handwriting | `'KyoboHand'` | Handwriting style | `font-Kyobo` |
| Kyobo Handwriting 2019 | `'Kyobo_Handwriting_2019-Regular', Helvetica` | Handwriting style (specific) | `font-kyobo` |

### Korean Typography Scale

#### Headings
| Token | Size | Line Height | Weight | Usage | Tailwind Class |
|-------|------|-------------|---------|-------|----------------|
| H1 | 24px | var | var | Main page titles | `text-kor-h-h1` |
| H2 | 18px | var | var | Section headings | `text-kor-h-h2` |
| H3 | 16px | var | var | Subsection headings | `text-kor-h-h3` |

#### Subtitles
| Token | Size | Line Height | Weight | Usage | Tailwind Class |
|-------|------|-------------|---------|-------|----------------|
| Subtitle 1 | 15px | var | var | Large subtitles | `text-kor-subtitle-subtitle1` |
| Subtitle 2 | 14px | var | var | Medium subtitles | `text-kor-subtitle-subtitle2` |
| Subtitle 3 | 13px | var | var | Small subtitles | `text-kor-subtitle-subtitle3` |

#### Paragraphs
| Token | Size | Line Height | Weight | Usage | Tailwind Class |
|-------|------|-------------|---------|-------|----------------|
| P1 | 15px | var | var | Large body text | `text-kor-p-p1` |
| P2 | 14px | var | var | Regular body text | `text-kor-p-p2` |
| P3 | 13px | var | var | Small body text | `text-kor-p-p3` |
| P4 | 12px | var | var | Caption text | `text-kor-p-p4` |

#### Body
| Token | Size | Line Height | Weight | Usage | Tailwind Class |
|-------|------|-------------|---------|-------|----------------|
| Body 1 | var | var | var | Large body content | `font-kor-body-body1` |
| Body 2 | var | var | var | Regular body content | `font-kor-body-body2` |

### English Typography Scale

| Token | Size | Line Height | Weight | Usage | Tailwind Class |
|-------|------|-------------|---------|-------|----------------|
| H2 | 18px | var | var | English headings | `text-eng-h-h2` |
| H3 | 16px | var | var | English subheadings | `text-eng-h-h3` |
| P1 | 15px | var | var | Large English text | `text-eng-p-p1` |
| P2 | 13px | var | var | Small English text | `text-eng-p-p2` |
| Subtitle 3 | 13px | var | var | English subtitles | `text-eng-subtitle-subtitle3` |

### Font Weights

- **Normal**: `font-normal` (400)
- **Bold**: `font-bold` (700)

---

## Spacing

EverStar uses Tailwind's default spacing scale (0.25rem = 1 unit).

### Common Spacing Values
| Tailwind Class | Value | Usage |
|----------------|-------|-------|
| `p-0` | 0 | No padding |
| `p-1` | 0.25rem (4px) | Minimal padding |
| `p-2` | 0.5rem (8px) | Small padding |
| `p-4` | 1rem (16px) | Medium padding |
| `p-6` | 1.5rem (24px) | Large padding |
| `p-8` | 2rem (32px) | Extra large padding |

Use the same values for margins (`m-*`), gaps (`gap-*`), and insets.

### Custom Spacing
| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Screen minus header | `calc(100vh - 56px)` | Content area height | `min-h-screen-56` |

---

## Shadows

### Predefined Shadows
| Token | Value | Usage | Tailwind Class |
|-------|-------|-------|----------------|
| Small | `var(--small)` | Subtle elevation | `shadow-small` |
| Large | `var(--large)` | Strong elevation | `shadow-large` |
| Focus | `var(--focus)` | Focus states | `shadow-focus` |
| Error | `var(--error)` | Error states | `shadow-error` |
| Default | Tailwind default | Standard shadow | `shadow-md` |

---

## Border Radius

Use Tailwind's default border radius scale:

| Tailwind Class | Value | Usage |
|----------------|-------|-------|
| `rounded-none` | 0 | No rounding |
| `rounded-sm` | 0.125rem (2px) | Subtle rounding |
| `rounded` | 0.25rem (4px) | Default rounding |
| `rounded-md` | 0.375rem (6px) | Medium rounding |
| `rounded-lg` | 0.5rem (8px) | Large rounding |
| `rounded-full` | 9999px | Circular elements |

### Custom Radius
| Value | Usage | Example |
|-------|-------|---------|
| `rounded-[3px]` | Pagination dots (inactive) | Small dots |
| `rounded-[5px]` | Pagination dots (active) | Active page indicator |

---

## Breakpoints

### Responsive Design System

| Breakpoint | Min Width | Usage | Tailwind Prefix |
|------------|-----------|-------|-----------------|
| Mobile | 360px | Mobile devices | `mobile:` |
| Tablet | 768px | Tablets and large phones | `tablet:` |
| Laptop | 1200px | Laptops and desktops | `laptop:` |

### Usage Example
```tsx
// CircleButton responsive sizing
<button className="
  w-[60px] h-[60px]           // Default (mobile-first)
  mobile:w-[80px] mobile:h-[80px]   // 360px+
  tablet:w-[100px] tablet:h-[100px] // 768px+
  laptop:w-[120px] laptop:h-[120px] // 1200px+
">
```

---

## Component-Specific Tokens

### Button Sizes
| Size | Width | Height | Padding | Usage |
|------|-------|--------|---------|-------|
| Small | 106px | 40px | - | Compact buttons |
| Medium | 134px | 48px | - | Standard buttons |
| Large | 320px | 64px | - | Primary CTAs |

### Card Sizes
| Component | Width | Height | Usage |
|-----------|-------|--------|-------|
| Post-it Card | 142px | 152px | Cheering messages |
| Circle Button | 60-120px | 60-120px | Responsive (see breakpoints) |

---

## Best Practices

### Using Design Tokens

1. **Always use Tailwind classes** instead of hardcoded values
   ```tsx
   // ✅ Good
   <div className="bg-mainprimary text-greyscalewhite">

   // ❌ Bad
   <div style={{ backgroundColor: '#ff9078', color: '#ffffff' }}>
   ```

2. **Use semantic names** for clarity
   ```tsx
   // ✅ Good
   <span className="text-required">*</span>

   // ❌ Bad
   <span className="text-[#fd2929]">*</span>
   ```

3. **Leverage typography scale** for consistency
   ```tsx
   // ✅ Good
   <p className="text-kor-p-p2">Content</p>

   // ❌ Bad
   <p className="text-[14px]">Content</p>
   ```

4. **Use spacing scale** for layout
   ```tsx
   // ✅ Good
   <div className="p-4 gap-2">

   // ❌ Bad
   <div style={{ padding: '16px', gap: '8px' }}>
   ```

### Extending the Design System

To add new design tokens:

1. Add CSS variables to your base CSS file
2. Extend `tailwind.config.js` with new token
3. Document the new token in this file
4. Update Storybook examples

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Config File](/tailwind.config.js)
- [Storybook Components](/.storybook)

---

**Last Updated**: 2025-01-08
**Version**: 1.0.0
