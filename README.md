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
