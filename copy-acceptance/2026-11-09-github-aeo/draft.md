# Copy: claude-code-ui-design repository (all files)

## Repository description (GitHub settings)
DESIGN.md template, ban list, prompts and a review skill that stop Claude Code and Codex making generic-looking websites.

## Topics (GitHub settings)
claude-code, codex, design-md, frontend-design, ui-design, agent-skills, ai-coding

## File: README.md

# Claude Code UI design kit: DESIGN.md template, ban list and review skill

Claude Code and Codex make generic-looking websites when a prompt leaves the design decisions open. This kit gives the agent those decisions in files it reads every session: a DESIGN.md template with a list of banned patterns, the one line that loads it in Claude Code or Codex, a UI review skill, and a script that screenshots the page at desktop and phone width so the agent can see what it built.

Copy the files into your project, fill in DESIGN.md with your own fonts, colours and reference site, and start a new session.

The full guide, with example prompts and the design words that change the result, is at [How to improve website UI with Claude Code](https://iter0.com/blog/claude-code-ui-design). I run [iter0](https://iter0.com), which builds websites with AI agents, and I build our own site with Claude Code and Codex. These are the files I use.

## What is in the kit

| File | What it does |
| --- | --- |
| [`DESIGN.md`](DESIGN.md) | Template for your design decisions: reference site, fonts, colours, spacing, and the patterns the agent must not use. |
| [`CLAUDE.md`](CLAUDE.md) | One import line that makes Claude Code read DESIGN.md at the start of every session. |
| [`AGENTS.md`](AGENTS.md) | The rule that makes Codex read DESIGN.md before it changes website UI. |
| [`.claude/skills/ui-review/SKILL.md`](.claude/skills/ui-review/SKILL.md) | A review skill. Run `/ui-review` with a page and a reference; it compares them at two widths and names one problem to fix. |
| [`prompts.md`](prompts.md) | Prompts for a first build, a restyle from a reference, removing the AI look, and fixing one thing. |
| [`scripts/screenshot.mjs`](scripts/screenshot.mjs) | Saves screenshots of a page at 1440px and 390px wide with Playwright. |

## Set it up in Claude Code

1. Copy `DESIGN.md`, `CLAUDE.md` and the `.claude` folder to the root of your project. If you already have a CLAUDE.md, add the line `@DESIGN.md` to it instead of replacing it.
2. Replace every bracketed part of DESIGN.md with facts from your project. Delete sections that do not apply.
3. Start a new Claude Code session and run `/context`. DESIGN.md should be in the list of loaded files. If it is missing, check the import path: it is relative to the CLAUDE.md that contains it, so a CLAUDE.md inside `.claude/` needs `@../DESIGN.md`.
4. Type `/ui-review` to check that the skill appears in the command menu.

## Set it up in Codex

Codex reads AGENTS.md automatically, but not other Markdown files. Copy `DESIGN.md` to your project root and add the "Website design work" section from this kit's `AGENTS.md` to yours. Start a new Codex session and ask it which instruction files it loaded. To use the review skill in Codex, copy the `ui-review` folder into your Codex skills folder as described in the [Codex documentation](https://developers.openai.com/codex).

## Why a ban list works better than "don't make it generic"

An agent told to avoid a generic design has no list of what generic means, so it keeps its defaults. A named pattern is something it can check for and leave out. The DESIGN.md template bans the ones we see most often in AI-built pages: purple or blue gradients behind text, pill badges above the headline, emoji in the interface, glow and blur effects, a row of three identical feature cards, and a shadow on every box. Edit the list to suit your brand. If you want one of those patterns, delete its line.

## Make the agent look at the page

Code that builds without errors can still render a squashed hero or a menu that covers the page on a phone. After each change, ask the agent to run these commands (the first two only once):

```bash
npm install --save-dev playwright
npx playwright install chromium
node scripts/screenshot.mjs http://localhost:3000
```

It saves `screenshot-1440.png` and `screenshot-390.png`. Tell the agent to open both images and compare them with the reference before it says the work is done.

## Licence

MIT. Copy, change and share the files. If something in the kit does not work for you, [open an issue](https://github.com/inchwormz/claude-code-ui-design/issues).

## File: DESIGN.md

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

## File: AGENTS.md

## Website design work

Before changing public website UI, read DESIGN.md and inspect the code paths it names. Reuse existing tokens and components. Report conflicts before editing. After the last change, render and inspect the affected page on desktop and a narrow screen.

## File: prompts.md

# Prompts for Claude Code and Codex UI work

Use the full brief for a first build. After that, keep each prompt to one section and one change, and say what must stay as it is. A narrow prompt stops the agent from redesigning sections you already liked.

## First build

```text
Build the homepage for Ledgerly, bookkeeping software for
solo founders in New Zealand.
Visitor: a founder who does their own GST and hates it.
Goal: they understand the product and start a free trial.
Reference: vercel.com for spacing, type sizes and restraint.
Keep: our logo, our copy below, and the colours in globals.css.
One accent colour, black and white everywhere else.
Show me the page at 1440px and 390px when you're done.
```

Ledgerly is a made-up product. Replace it with yours.

## Restyle a section from a reference

```text
Look at the pricing section on linear.app/pricing.
Rebuild our /pricing section with the same layout: plan names
in one row, prices large, features as a plain list.
Keep our plans, prices and copy exactly.
Don't touch any other section.
If you can't open the page, say so and I'll paste a screenshot.
```

## Remove the AI look from an existing page

Asking for the list first gives you something to check, and stops the agent from making changes you didn't ask for.

```text
Review the homepage as a senior product designer.
List every element that looks like a generic AI template:
gradients, pill badges, emoji, identical card rows, glow,
vague copy. Don't edit yet. Give me the list with a fix for each.
```

## Fix one thing

Say where the problem is, what you see, what you want instead, what to keep, and how to check it.

```text
On /pricing at 390px wide, the price drops below the plan
description, so you can't compare plans. Keep each price
directly under its plan name. Keep the copy and button styles.
Screenshot the section at 390px and 1440px when done.
```

## When the same mistake keeps coming back

Stop asking for a redesign. Check two things first. In a new session, run `/context` and confirm DESIGN.md is loaded. Then inspect the element in your browser: the style rule at the top of the styles panel is the one that wins. Give the agent that file and selector and ask whether the rule was meant to be there.

More prompts and the design words that change the result: [How to improve website UI with Claude Code](https://iter0.com/blog/claude-code-ui-design).

## File: _config.yml

title: Claude Code UI design kit
description: DESIGN.md template, ban list, prompts and a review skill that stop Claude Code and Codex making generic-looking websites.
theme: jekyll-theme-primer
exclude:
  - scripts
  - copy-acceptance

## File: CLAUDE.md

@DESIGN.md
