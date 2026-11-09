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
