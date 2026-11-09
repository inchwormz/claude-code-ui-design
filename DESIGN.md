# Design rules for [your product]

Read this file before changing any page, component or style. If a request conflicts with a rule here, say so before editing.

## Who the site is for

[One or two lines: who visits, and what they should do on the site. Example: "Solo founders in New Zealand who do their own GST. The homepage should get them to start a free trial."]

## Reference site

[One site whose layout and spacing we copy, and what to take from it. Example: "vercel.com for spacing, type sizes and restraint."]

Copy layout, spacing and type sizes from the reference. Never copy its logo, copy, images or customer quotes.

## Type

- Headings: [font], [weight]
- Body: [font], [size] at [line height]
- Type scale: [sizes, for example 64 / 40 / 24 / 20 / 16px]. Use only these sizes.
- Body text lines stay under 65 characters wide.

## Colour

- Background: [value]
- Text: [value]
- Accent: [value]. Use it only on the main button and links.
- Colours live in [file, for example `app/globals.css`]. Use those variables; do not add a colour in a component.

## Spacing and layout

- Spacing scale: [for example 4, 8, 16, 24, 32, 48, 64, 96px]. No other values.
- Max content width: [for example 1200px].
- Left-align body text and headlines. Centre only short labels.

## Do not use

- Gradients behind text, or purple and blue accent colours
- Pill badges or coloured dots above the headline
- Emoji or decorative icons in the interface
- Glow, blur or orb effects
- A row of three identical feature cards
- A shadow and rounded border on every element
- Copy that could belong to any product, such as "Supercharge your workflow"

## Components

Reuse the components in [folder, for example `components/ui/`]. Before creating a new button, card or form field, check whether one exists.

## States

Every button and link has a visible focus ring and a hover state. Every form has an error state that says what to fix.

## Checks before you finish

1. Screenshot the changed page at 1440px and 390px wide (`node scripts/screenshot.mjs <url>`).
2. Compare both screenshots with the reference site.
3. Report what you changed, what you checked, and anything you could not check.
