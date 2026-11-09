---
name: ui-review
description: Review a rendered website page against its design instructions and a stated visual reference. Use for a bounded UI correction, not a site-wide redesign.
disable-model-invocation: true
argument-hint: "[page URL] [reference] [desktop and mobile widths]"
---

# Review the requested page

Read the user's page, reference and intended change. Ask for a missing detail only when it prevents a useful comparison.

Before editing:

1. Identify the current route, component and owning styles. Preserve unrelated work.
2. Read the project's design note. If instructions appear missing, check the importing file and resolve each relative import from that file's directory. Do not duplicate the note or change permissions to bypass a loading problem.
3. When loaded-memory evidence is needed, ask the user to inspect `/context` in the current terminal session and share the relevant file listing. Do not invent the result or treat an editable `/memory` location as loading proof.
4. Render the current page and reference at the same desktop width, then resize the same page to the requested mobile width. If browser access is unavailable, use supplied current screenshots and state the limits.
5. Name one observed mismatch. For a CSS mismatch, inspect the winning declaration and determine whether its exception was intentional before proposing a repair.

Propose a bounded correction. Keep existing copy, identity, tokens and destinations unless the requested change requires otherwise. Do not invent customer evidence.

After an authorised edit:

- Inspect the same page and width again. Check shared-component consumers affected by the change.
- Exercise relevant focus, menu, form and error states where access permits. Do not submit real payments or customer data for a visual check.
- Report the changed files, visible result and remaining unchecked states. Separate passing code checks from rendered-page evidence.

Do not publish or deploy as part of this skill.
