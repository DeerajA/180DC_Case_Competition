# Case Academy rebuild audit

## Source audit before edits

Confirmed: navigation was React state without URL updates; individual cases had no URLs; the header labeled Learn as “How it works”; mobile landing links were hidden; app navigation was a horizontal strip; navigation JSX was duplicated; no written-response fields or rubric existed; mock practice used a fixed script; case titles/client lines and sector taxonomy were inconsistent; finance was overrepresented in the default collection; difficulty/time bands were inconsistent; Cherry Bekaert appeared in general resources; network-wide copy conflicted with chapter focus; endorsement wording needed qualification; and events were embedded in layout code.

Qualified findings: legacy `?view=` handling did exist in an effect, so “deep links always break” was not established from source alone. They initially rendered Library before switching. Duplicate navigation was CSS-hidden per breakpoint, so duplicate screen-reader announcement was not established. Both patterns were replaced.

Additional findings: completion and interview scoring used incompatible 100% / 0–5 scales; a generic voice notice needed to acknowledge browser-provider processing; draft-saving failures and simultaneous account edits required explicit recovery behavior.

## Data models

Cases: slug and stable ID; question title and distinct client line; track, sector, type, difficulty and minutes; brief/objective/facts; clarifying topics and answers; captioned exhibits; structure, math, model answer, recommendation, risks and impact lens; four case-specific rubric levels; further reading.

Events: title, ISO date, nullable start/end times and venue, description, partners, nullable registration URL, status and preparation-case slugs. Officers edit `app/data/events.ts`. Unknown fields remain TBA.

Account: profile, completions, written answers, dated five-dimensional scores, practice records and opt-in transcripts, math best score and plan tasks. A versioned account row rejects conflicting writes. Browser-only guest records remain separate from account records. Existing account completions are read from the earlier progress table.

## Implemented phases

1. Audit and schemas.
2. Real routes and legacy query redirects; one responsive navigation; normalized 25-case catalog.
3. Three response boxes, autosave, comparison view, five-dimensional rubric, tracks and filters.
4. Rule-based solo practice with fact answers, stage checks, intentional skips, timer and structure checklist; partner script and candidate view. No model API is configured; ChatGPT sign-in is not model authorization. Partner mode is one-device, not shared-room synchronization.
5. Five habits, six primers, timed ten-question math drill, four-week checklist; official resource links checked September 26, 2026.
6. Data-driven event, conditional registration/calendar, past-event empty state, progress charts, profile, export and delete controls.
7. Seven new fictional cases. See NEW-CASES-REVIEW.md for briefs, exhibits, arithmetic and model answers before publication.

## Validation

Passed TypeScript and production build. `node scripts/check-academy.mjs` checks catalog shape, unique slugs/client lines, track mix, seven sectors, difficulty/time bands, exhibit dimensions, primer targets, event gates and rule-based interview behavior, including “banana” and the pantry weekly-capacity question.

The case arithmetic was reviewed against the supplied teaching assumptions; unknown denominators remain unknown rather than invented. SummitGear now explicitly derives relative margin from indexed revenue and profit. Financial source claims remain distinguished from fictional assumptions.

Not yet verified end-to-end: browser navigation/Back/Forward, 375/768/1280 layouts and keyboard flow, and authenticated account persistence/deletion. The supervised preview was not reachable in the available browser session, and the preview troubleshooting skill's required control-browser skill is unavailable. Do not call these browser acceptance checks passed. A production build is not a substitute for them.

## Publication

This rebuild is a saved review version. The previous public version remains live. The uploaded brief requires review of the seven new cases before publishing. No production data migration has been deployed by this rebuild yet; the generated schema migration was applied only to the local preview database.

## Verification and content pass (September 28, 2026)

Browser checks now run against a local preview:

- Every view and case URL loads directly, legacy `?view=` links redirect, unknown paths return 404, and Back/Forward work.
- The landing header and app menu work at 375px; 375px and 768px have no horizontal page scroll.
- The interviewer rejects "banana" and answers the pantry capacity question with 400 households/week.
- A case can be answered, scored and completed signed out, and signed-in progress saves to the account and appears in Progress.
- Every external link resolves.

Problems found and fixed in this pass:

1. **Filler exhibits.** Sixteen Intermediate/Advanced cases met the two-exhibit rule with a "Decision context and evidence gaps" table that repeated the facts with "What would validate this?". Each now has a real second exhibit, used in the worked math, and in most cases it changes or qualifies the answer: attendance scenarios (arts), transport and retention (youth), grant and reach (clinic), late-shift reach (transit), risk-weighted funding (donors), new-customer demand (refill), renewal rates (software), a PPA alternative (solar), the academic calendar (HarborLight), store-group COGS (BrightCart), pilot-cluster economics (NovaPay), market and margin inputs (FlexForge), serving costs (PulseView), annual economics (TerraRoots), cohort P&L (SummitGear), synergy scenarios (Northstar), share-price sensitivity (Cedar), valuation inputs (Oakline), sensitivities (Lumen) and receivables (finance integration).
2. **Brief = objective in all 32 cases.** Every case now has a client-situation brief separate from the objective. The interviewer opens with both.
3. **Templated solution and rubric text.** Brainstorm prompts, impact lenses and the four rubric levels are now written per case. The checker enforces uniqueness and rejects rubric notes that paste the model answer.
4. **Clarifying answers.** The seven newer cases used whole sentences split into words (including "the", "is", "in") as topics. All cases now have clean keyword topics, including answers for common follow-ups such as competitors, timing and access. Matching now uses light stemming and counts each question word once. 54 natural questions across the library are in the checker.
5. **Guest progress on sign-in.** Signed-out progress used to stay hidden after sign-in. Signed-in members with browser progress now see a prompt to add it to their account, and the merge keeps both sides.
6. **Structure checklist.** Members no longer have to tick every branch to continue. The screen shows how many expected branches their answer covered.
7. **Further reading.** Every case links its Learn primer, plus verified external sources where relevant. Internal links open in the same tab.
8. **Corrections.** FlexForge's title said "aerospace" while the case is about EV battery hardware. BrightCart and NovaPay now have enough data to finish the calculation instead of stopping at unknowns.
9. **Dead code removed.** `app/academy-client.tsx`, `app/cases.ts`, `app/chapter-cases.ts`, `app/deal-cases.ts` and the unused `/api/progress` and `/api/me` routes. The Cherry Bekaert study now appears only in the finance-integration elective.

Every new figure was recomputed independently. `CASE-REVIEW.md` (regenerate with `node scripts/case-review.mjs > CASE-REVIEW.md`) lists every case's brief, exhibits, math and model answer for review before publishing.
