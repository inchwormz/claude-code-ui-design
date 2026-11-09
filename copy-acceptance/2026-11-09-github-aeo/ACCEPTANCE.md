# Copy acceptance: claude-code-ui-design (GitHub AEO, 9 Nov 2026)

## Copy changed
- New repository: README.md, DESIGN.md, CLAUDE.md, AGENTS.md, prompts.md, _config.yml (GitHub Pages title and description), repository description and topics.
- .claude/skills/ui-review/SKILL.md is the file already published at iter0.com/blog-downloads/claude-code-ui-design/ui-review.md, copied unchanged.
- Prompts, ban list and the AGENTS.md rule are taken from the live posts /blog/claude-code-ui-design and /blog/design-md-codex.
English only.

## Profile
Precise Hierarchical Plain (product and developer documentation).

## Corpus passages read
- Minto, official concept page (barbara-minto/official/pages/004.md, lines 3-9): facts grouped under one governing thought. Used for the opening: one paragraph says what the repository is and what the reader gets, then the file table and steps sit under it.
- Minto, McKinsey interview (barbara-minto/mckinsey-interview/pages/001.md, line 37): grouped items are the same kind and in logical order. Used to keep the file table rows parallel (file, what it does) and the setup steps in the order a reader does them.
- Russell, The Problems of Philosophy ch. I (bertrand-russell/works/5827/pages/001.md, lines 96-108): observable properties before the conclusion. Used in "Why a ban list works": names the visible patterns (gradients, pill badges, three cards) before the claim that naming them helps.
- Orwell, Politics and the English Language (george-orwell/pages/002.md, paragraphs at lines 99 and 113): ready-made phrases replace thought; let the meaning choose the word. Used to keep concrete actions ("run /context", "copy the folder") instead of stock developer-tool phrases.

## Editorial Acceptance
- Answer early: pass. The title and first paragraph say what it is and who it is for.
- Advice names its subject and consequence: pass.
- Claims grounded: pass. First-person line (John runs iter0 and builds its site with Claude Code and Codex) is true and matches the byline of /blog/claude-code-ui-design; John approved adding it on 9 Nov. Hosted endpoint, free name.iter0.app publishing, ChatGPT/Claude Code/Codex sign-in match iter0.com/mcp and the existing README. Registry name unchanged is true (server.json name field unchanged; registry tracks the repository by id 1410979403). Screenshot script run against iter0.com/pricing on 9 Nov and saved both files. Ledgerly is labelled made-up.
- Every paragraph adds information: pass.
- Banned words and structures: pass. No em dashes.
- Terms consistent: pass.
- MPR/ALR: not measured (no comparable README reference); DO/DON'T checks find no packed abstractions.
- Title: uses searched words, no number or superlative.
- No roadmap opening or recap ending: pass.
- Passages read and used: pass (above).

## draft.md sha256
908bd814cc2b30d50eaee6de660b139adc7bd879ec7802647a598dbf9fc2234e

## Verify runs
verify-barbara-minto.json, verify-bertrand-russell.json, verify-george-orwell.json: all exit 0, "ok": true.

## Checker exceptions
None.
