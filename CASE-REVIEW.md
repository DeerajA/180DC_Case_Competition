# Case review

Every case in the library, generated from `app/data/catalog.ts` and `app/data/new-cases.ts`. All clients, quantities, rates and budgets are fictional teaching assumptions. Use this to check each brief, exhibit and calculation before publishing.

Regenerate after editing cases: `node scripts/case-review.mjs > CASE-REVIEW.md`.

## Social impact core

### Can the pantry close its capacity gap?

*A regional food pantry · Operations · Beginner, 25 min · `/academy/cases/pantry-capacity`*

A regional food pantry in a fast-growing county turned away about 100 households a week last quarter. The board has approved a modest budget increase and wants a plan it can start next quarter.

**Objective:** Serve 25% more households without increasing annual operating cost by more than $45,000.

**Question:** Which option meets the target most efficiently? What would you test before rollout?

**Facts**

- Current capacity is 400 households per week; demand is 500.
- The pantry opens 4 days per week for 5 hours per day.
- One service station processes 5 households per hour. Four stations are staffed, but intake and packing create delays.

**Exhibit: Operating options (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Option | Weekly added capacity | Annual cost |
| --- | --- | --- |
| Add one staffed station | 100 households | $52,000 |
| Appointment scheduling + prepacked boxes | 120 households | $28,000 |
| Add Saturday opening | 80 households | $40,000 |

**Worked math**

- Target gap: 500 − 400 = 100 households/week.
- Scheduling and prepacking reach 520/week, costing $24,000 less than a new station.
- Pilot two pickup windows for four weeks; track throughput, wait time, missed appointments, and client satisfaction.

**Model answer:** A 25% increase means 100 more households weekly. Scheduling and prepacking add 120 at $28,000 annually, meeting both constraints. Validate staff time, client accessibility, food choice, and no-show rates in a pilot.

**Recommendation:** Pilot appointment scheduling with a walk-in allocation and prepacked boxes, then scale if access and service quality hold.

### Can a ticket increase sustain the museum?

*A community arts museum · Profitability · Intermediate, 35 min · `/academy/cases/arts`*

A community arts museum ended last year $90,000 short and covered the gap from reserves it cannot draw on again. Half its visitors enter free or discounted through community access programs. The finance committee has proposed raising general admission from $10 to $14.

**Objective:** Close a $90,000 annual operating gap while protecting access for low-income visitors.

**Question:** Does the ticket increase close the gap by itself, and what happens if full-price attendance falls?

**Facts**

- Annual attendance is 30,000. General admission is $10; half of visitors pay the full rate.
- Variable visitor cost is $2. Fixed program and facility costs are $435,000.
- Grants and donations total $210,000; all other earned income totals $45,000.

**Exhibit: Financial snapshot (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Current | Proposed |
| --- | --- | --- |
| Full-price admissions | 15,000 | 15,000 |
| Ticket price | $10 | $14 |
| Discount/free visitors | 15,000 | 15,000 |
| Annual incremental marketing cost | $0 | $8,000 |

**Exhibit: Full-price attendance scenarios at $14** (Fictional planning scenarios. Free and discounted visitors are unchanged.)

| Full-price visitor change | Full-price visitors | Ticket revenue | Variable cost saved |
| --- | --- | --- | --- |
| No change | 15,000 | $210,000 | $0 |
| −10% | 13,500 | $189,000 | $3,000 |
| −20% | 12,000 | $168,000 | $6,000 |

**Worked math**

- Baseline check: income $150,000 + $210,000 + $45,000 = $405,000; costs 30,000 × $2 + $435,000 = $495,000; gap = $90,000.
- No change: 15,000 × $4 = $60,000 − $8,000 marketing = $52,000 net; $38,000 still open.
- −10%: $189,000 − $150,000 + $3,000 − $8,000 = $34,000 net; $56,000 still open.
- −20%: $168,000 − $150,000 + $6,000 − $8,000 = $16,000 net; $74,000 still open.
- Even with no attendance loss, the increase closes only 58% of the gap ($52,000 ÷ $90,000).

**Model answer:** No. At best the $4 increase nets $52,000 and leaves $38,000 open. A 10% drop in full-price visitors cuts the net gain to $34,000, and a 20% drop to $16,000. Pricing can be part of the answer, but not the whole answer.

**Recommendation:** Do not rely on admission pricing alone. Pilot the full-price increase and secure at least $38,000 through a complementary funding stream.

### Where should the youth program grow?

*An after-school STEM nonprofit · Market entry & growth · Intermediate, 35 min · `/academy/cases/youth`*

An after-school STEM nonprofit has run a waitlisted program in one county for four years. A regional funder will back a one-year pilot in one new county, and the board must choose between North and South County.

**Objective:** Select one of two counties for a one-year pilot serving at least 150 students.

**Question:** Which county should launch first, and what would have to be true for you to change your answer?

**Facts**

- Program quality requires a local school partner and two instructors.
- Annual pilot budget cannot exceed $180,000.
- Figures below are fictional planning assumptions; verify real demand locally.

**Exhibit: County comparison (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Factor | North County | South County |
| --- | --- | --- |
| Potential students | 800 | 500 |
| Expected enrollment rate | 25% | 36% |
| Annual pilot cost | $170,000 | $145,000 |
| School partner | Signed MOU | Verbal interest |

**Exhibit: Delivery readiness (fictional planning estimates)** (Costs are annual. Retention is the share of enrolled students still attending in spring.)

| Factor | North County | South County |
| --- | --- | --- |
| School partner | Signed MOU | Verbal interest |
| After-school transport | Needed: $8,000/year | Not needed |
| Expected spring retention | 70% | 80% |

**Worked math**

- Enrollment: North 800 × 25% = 200; South 500 × 36% = 180. Both clear the 150-student floor.
- Full cost: North $170,000 + $8,000 transport = $178,000 (under the $180,000 cap); South $145,000.
- Still attending in spring: North 200 × 70% = 140; South 180 × 80% = 144.
- Cost per retained student: North $178,000 ÷ 140 ≈ $1,271; South $145,000 ÷ 144 ≈ $1,007.
- Budget headroom: North $2,000; South $35,000.

**Model answer:** South keeps slightly more students through spring (144 vs 140) at about $1,007 per retained student versus $1,271, with $35,000 of budget headroom. North’s advantage is its signed MOU. The choice turns on partner risk: South is the better program if its district signs, and North is the safer launch if it will not.

**Recommendation:** Pursue South County with a firm deadline (for example, eight weeks) to turn verbal interest into a signed MOU. If the district does not sign, launch in North, where the agreement is already in place.

### How should the mobile clinic price partner visits?

*A mobile preventive-care nonprofit · Pricing · Intermediate, 35 min · `/academy/cases/clinic`*

A mobile preventive-care nonprofit parks a clinic van at partner employers and treats their workers for free. Partners pay a fee per visit. The current contracts expire this year, and the director must set a new fee.

**Objective:** Set a partner fee that covers incremental costs while retaining access for patients.

**Question:** Which price scenario better supports the mission and finances?

**Facts**

- The clinic serves patients free of charge; partner employers fund visits.
- A visit costs $38 in variable supplies and staffing. Annual fixed mobile-unit cost is $120,000.
- Partner demand is estimated at 6,000 visits per year at $65, or 5,000 visits at $75.

**Exhibit: Price scenarios (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Scenario | Visits | Fee / visit |
| --- | --- | --- |
| A | 6,000 | $65 |
| B | 5,000 | $75 |

**Exhibit: Funding constraints and reach (fictional)** (Annual figures unless stated.)

| Constraint | Value | Source |
| --- | --- | --- |
| Minimum annual surplus | $50,000 | Board policy (van replacement) |
| Visits by patients with no regular doctor | 60% | Last year’s intake data |
| Foundation grant for visits above 5,000 | $10/visit, capped at $10,000 | Draft grant letter |

**Worked math**

- Contribution per visit: A $65 − $38 = $27; B $75 − $38 = $37.
- Surplus: A $27 × 6,000 − $120,000 = $42,000; B $37 × 5,000 − $120,000 = $65,000.
- On fees alone, only B meets the $50,000 surplus policy.
- With the grant, A adds 1,000 × $10 = $10,000, reaching $52,000 and clearing the policy.
- A delivers 1,000 more visits; at 60%, about 600 more are for patients with no regular doctor.

**Model answer:** On fees alone, B earns $65,000 and A $42,000, so only B meets the $50,000 policy. If the foundation grant is confirmed, A reaches $52,000 and adds 1,000 visits, about 600 of them for patients with no regular doctor. Recommend A if the grant is committed and B otherwise.

**Recommendation:** Offer partners the $65 fee on condition that the grant for extra visits is signed. If it is not committed before contracts go out, set the fee at $75.

### Can partners scale literacy without diluting outcomes?

*A literacy nonprofit with strong local outcomes · Market entry & growth · Advanced, 45 min · `/academy/cases/literacy`*

A literacy nonprofit tutors 600 early readers one-on-one and has strong reading-gain results. A state grant would fund growth to 1,200 children within two years, but the board will not double headquarters staff. A partner-training model, where schools deliver the program with coaching, has been piloted at two sites.

**Objective:** Double children served from 600 to 1,200 in two years without doubling headquarters staff.

**Question:** Should the organization switch entirely to partners?

**Facts**

- Direct delivery costs $400 per child.
- A partner-training model costs $90 per child in central support and $250 per child for partner delivery.
- Partner model pilots achieved 75% of the direct program’s learning gain.

**Exhibit: Scale alternatives (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Model | Cost / child | Relative learning gain |
| --- | --- | --- |
| Direct delivery | $400 | 100% |
| Partner training | $340 | 75% |

**Exhibit: Decision context and evidence gaps** (Qualitative evidence / supplied planning assumptions)

| Evidence | Direct | Partner |
| --- | --- | --- |
| Relative measured gain | 100% | 75% |
| Headquarters staffing constraint | Cannot double | Must validate support workload |
| Subgroup outcomes | Not supplied | Not supplied |

**Worked math**

- Partner model saves $60 per child, or $72,000 across 1,200 children.
- Outcome-adjusted cost: $340 ÷ 0.75 ≈ $453 per full-gain equivalent, above direct delivery at $400.
- Break-even quality: partners need 85% of the direct gain to match ($340 ÷ $400).
- Mixed model example: 600 direct + 600 partner costs $444,000 for 1,050 full-gain equivalents, about $423 each.
- Run a staged partner pilot with coaching and a learning-gain threshold.

**Model answer:** No immediate full switch. Partner delivery costs 15% less per child but currently delivers 25% less learning gain. Cost per full-gain equivalent: direct $400; partner $340 ÷ .75 ≈ $453. Improve quality first.

**Recommendation:** Scale a mixed model while improving partner instruction; expand partner seats only when outcome-adjusted costs improve.

### Should two housing nonprofits combine back offices?

*Two neighborhood housing nonprofits · Partnerships & M&A · Advanced, 45 min · `/academy/cases/merger`*

Two neighborhood housing nonprofits with overlapping service areas each run their own finance, HR and IT. Their boards are exploring a merger to cut administrative costs, but residents and funders know them as separate organizations.

**Objective:** Determine whether a merger produces sustainable savings without weakening community trust.

**Question:** What is the simple payback period, and would you recommend merging?

**Facts**

- Combined annual administration costs are $1.2 million.
- A merger could eliminate 15% of overlapping administration costs.
- One-time integration cost is $300,000; annual new governance and technology costs are $35,000.

**Exhibit: Merger economics (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Item | Calculation | Value |
| --- | --- | --- |
| Gross annual savings | 15% × $1.2m | $180,000 |
| New annual costs | Governance + systems | $35,000 |
| One-time integration | Transition | $300,000 |

**Exhibit: Decision context and evidence gaps** (Qualitative evidence / supplied planning assumptions)

| Decision evidence | Merger | Shared services |
| --- | --- | --- |
| Modeled savings | Quantified in exhibit 1 | Not yet costed |
| Community consultation | Not completed | Not completed |
| Restricted grant permissions | Not confirmed | Not confirmed |

**Worked math**

- Annual net savings: $180,000 − $35,000 = $145,000.
- Payback: $300,000 ÷ $145,000 ≈ 2.1 years.
- Sensitivity: if savings reach only 10% ($120,000), net savings are $85,000 and payback ≈ 3.5 years.
- Conduct legal and donor diligence and compare a shared-services partnership.

**Model answer:** Net annual savings = $145,000; simple payback ≈ 2.07 years. Financial case is plausible, but a merger requires governance, culture, donor restrictions, service continuity, and community input diligence.

**Recommendation:** Proceed to formal diligence, with shared services as a lower-risk alternative before committing to a merger.

### Which transit pilot reaches shift workers?

*A city mobility office · Operations · Intermediate, 35 min · `/academy/cases/transit`*

A mid-sized city’s buses stop running before many late shifts end at hospitals, warehouses and hotels. Workers without cars rely on expensive rides or long walks home. The mobility office has $500,000 for a one-year pilot and two proposals.

**Objective:** Improve access to jobs for shift workers with a $500,000 one-year pilot.

**Question:** Which program meets the target, and what else should be measured?

**Facts**

- Existing buses stop before many late shifts end.
- The city is evaluating a shuttle and a ride voucher program.
- The pilot target is at least 20,000 completed rides per year.

**Exhibit: Options (illustrative)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Option | Budget | Expected rides |
| --- | --- | --- |
| Night shuttle | $460,000 | 24,000 |
| Ride vouchers | $400,000 | 18,000 |

**Exhibit: Who the rides reach (planning estimates)** (Late-shift workers are those on shifts ending 10pm–4am.)

| Metric | Night shuttle | Ride vouchers |
| --- | --- | --- |
| Rides by late-shift workers | 18,000 | 16,200 |
| Share of all rides | 75% | 90% |
| Target workers living more than ½ mile from a stop | 30% | 0% (door to door) |

**Worked math**

- Cost per ride: shuttle $460,000 ÷ 24,000 ≈ $19.17; vouchers $400,000 ÷ 18,000 ≈ $22.22.
- Only the shuttle meets the 20,000-ride target.
- Cost per late-shift ride: shuttle $460,000 ÷ 18,000 ≈ $25.56; vouchers $400,000 ÷ 16,200 ≈ $24.69.
- The shuttle still delivers 1,800 more late-shift rides (18,000 vs 16,200), but 30% of target workers live beyond its stops.
- Budget left over with the shuttle: $500,000 − $460,000 = $40,000.

**Model answer:** The night shuttle is the only option that meets the 20,000-ride target (24,000 rides at about $19.17 each), and it delivers more late-shift rides (18,000 vs 16,200). Vouchers are slightly cheaper per late-shift ride ($24.69 vs $25.56) and reach workers far from routes. Recommend the shuttle and use the $40,000 left in the budget for targeted vouchers.

**Recommendation:** Pilot the night shuttle on the densest job corridors and use the remaining $40,000 for vouchers for late-shift workers who live more than ½ mile from a stop. Measure late-shift rides, not just total rides.

### How can the nonprofit replace an expiring grant?

*A community mental-health nonprofit · Funding & sustainability · Intermediate, 35 min · `/academy/cases/donors`*

A community mental-health nonprofit relies on a $120,000 foundation grant that ends next year and pays for two counselors. The executive director wants a replacement plan that does not swap one funding dependency for another.

**Objective:** Replace a $120,000 grant expiring next year without creating a concentration risk.

**Question:** How much of the grant gap can these plans cover on paper?

**Facts**

- The nonprofit has 2,000 prior donors.
- A reactivation campaign can reach 800 lapsed donors with an estimated 12% response and $250 average gift.
- A new corporate partner may provide $70,000, but approval is uncertain.

**Exhibit: Funding paths (fictional)** (Annual amounts before campaign costs.)

| Path | Expected value | Confidence |
| --- | --- | --- |
| Donor reactivation | 800 × 12% × $250 | Medium |
| Corporate partnership | $70,000 | Low |
| Recurring-gift upgrade | 200 donors × $10/month × 12 | Medium |

**Exhibit: Campaign costs and planning probabilities (fictional)** (Probabilities are the development team’s planning estimates.)

| Path | Upfront cost | Planning probability |
| --- | --- | --- |
| Donor reactivation | $6,000 | 80% |
| Corporate partnership | $0 (staff time) | 40% |
| Recurring-gift upgrade | $2,000 | 90% |

**Worked math**

- Reactivation: 800 × 12% = 96 donors × $250 = $24,000.
- Recurring upgrade: 200 × $10 × 12 = $24,000.
- On paper: $24,000 + $70,000 + $24,000 = $118,000, minus $8,000 of campaign costs = $110,000; $10,000 short.
- Risk-weighted: $24,000 × 80% + $70,000 × 40% + $24,000 × 90% = $68,800, minus $8,000 = $60,800; about $59,200 short.
- Concentration: the corporate gift would be $70,000 ÷ $118,000 ≈ 59% of the new money.

**Model answer:** On paper the three paths raise $118,000, or $110,000 after campaign costs, still $10,000 short. Weighted by likelihood they are worth about $60,800, leaving roughly $59,000 at risk. And the corporate gift would be 59% of the new money, recreating the concentration the nonprofit wants to avoid.

**Recommendation:** Launch the reactivation and recurring-gift campaigns now. Pursue at least two more institutional prospects so that no single funder provides more than about a third of the replacement, and plan a contingency for the risk-weighted gap, such as a phased counselor schedule.

### Should the community center invest in solar?

*A fictional community center evaluating rooftop solar · Funding & sustainability · Intermediate, 35 min · `/academy/cases/solar`*

A community center that runs youth and senior programs pays about $30,000 a year for electricity. A state grant will cover $60,000 of a $180,000 rooftop solar system. The board approves capital projects only if they pay back within five years.

**Objective:** Assess whether a solar investment meets a five-year simple payback threshold and produces positive ten-year value.

**Question:** Calculate payback and net present value in both cases. Would you proceed?

**Facts**

- Installed cost is $180,000. A confirmed grant offsets $60,000 upfront.
- Electricity savings are expected to be $28,000 per year; maintenance is $4,000 per year.
- Assume constant annual cash flows for ten years, no residual value, and no taxes. Use an 8% discount rate and a provided ten-year annuity factor of 6.71.
- A downside case reduces electricity savings by 25%, leaving maintenance unchanged.

**Exhibit: Base and downside cases (fictional)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Base | Downside |
| --- | --- | --- |
| Annual electricity savings | $28,000 | $21,000 |
| Annual maintenance | $4,000 | $4,000 |
| Net initial investment | $120,000 | $120,000 |

**Exhibit: Alternative: power purchase agreement (fictional quote)** (Annual net savings after maintenance. Under a PPA the developer owns and maintains the system.)

| Metric | Own the system | Power purchase agreement |
| --- | --- | --- |
| Upfront cost to the center | $120,000 (after grant) | $0 |
| Annual net savings, base | $24,000 | $6,000 |
| Annual net savings, downside | $17,000 | $4,500 |
| Uses the $60,000 grant | Yes | No |

**Worked math**

- Net investment = $180,000 − $60,000 = $120,000.
- Base: net savings $28,000 − $4,000 = $24,000; payback $120,000 ÷ $24,000 = 5 years; NPV $24,000 × 6.71 − $120,000 = $41,040.
- Downside: $21,000 − $4,000 = $17,000; payback ≈ 7.06 years; NPV $17,000 × 6.71 − $120,000 = −$5,930.
- PPA: NPV $6,000 × 6.71 = $40,260 in the base case and $4,500 × 6.71 = $30,195 in the downside, with no capital at risk.

**Model answer:** Owning the system pays back in exactly 5 years with an NPV of $41,040 in the base case, but in the downside payback stretches to about 7 years and NPV turns negative (−$5,930). The PPA gives nearly the same base value ($40,260) with no upfront cost and stays positive in the downside ($30,195).

**Recommendation:** Favor the PPA unless the center can validate generation and savings well enough to rule out the downside. If it chooses to own the system, require a roof inspection and a performance guarantee first.

### Can a neighborhood banking pilot break even?

*A fictional credit union partnering with community organizations · Market entry & growth · Advanced, 45 min · `/academy/cases/banking`*

A fictional credit union wants to open savings accounts for people in neighborhoods without a branch, working through community organizations that host sign-up and cash-access days. It will fund a pilot only if recurring operations at least break even.

**Objective:** Evaluate a branchless savings-account pilot serving 2,000 new members while breaking even on annual operations.

**Question:** Does the base case break even? How many members are required at the base deposit level?

**Facts**

- The pilot expects 2,000 new members with average deposits of $1,500 each.
- Annual net interest contribution is 3% of average deposit balances, after interest paid and funding costs.
- Servicing costs are $18 per member annually. Partner operations cost $45,000 per year.
- One-time setup costs $60,000. Ignore tax and any fee revenue. Deposit principal is not revenue.

**Exhibit: Pilot assumptions (fictional)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Driver | Base case | Downside |
| --- | --- | --- |
| New members | 2,000 | 1,500 |
| Average deposits | $1,500 | $1,200 |
| Annual net interest contribution rate | 3% | 3% |

**Exhibit: Operating costs (fictional)** (Qualitative evidence / supplied planning assumptions)

| Operating cost | Annual recurring | One-time |
| --- | --- | --- |
| Member servicing | $18/member | $0 |
| Partner operations | $45,000 | $0 |
| Setup | $0 | $60,000 |

**Worked math**

- Average deposits = 2,000 × $1,500 = $3 million; annual net interest contribution = $90,000.
- Operating surplus = $90,000 − 2,000 × $18 − $45,000 = $9,000.
- Break-even members = $45,000 ÷ ($1,500 × 3% − $18) = 1,666.67, rounded to 1,667.
- Setup payback = $60,000 ÷ $9,000 ≈ 6.67 years, excluding time value of money.
- Downside contribution = 1,500 × $1,200 × 3% = $54,000; surplus = $54,000 − $27,000 − $45,000 = −$18,000.

**Model answer:** Base net interest contribution is $90,000. Servicing costs $36,000 and partner operations $45,000, leaving $9,000 recurring annual surplus. Member contribution is $45−$18=$27, so annual operating break-even is 1,667 members, rounded up. Setup payback at base surplus is about 6.67 years.

**Recommendation:** Run a staged pilot with deposit and retention checkpoints. The base case covers recurring costs, but upfront recovery is slow and the downside requires subsidy or redesign.

### How could local banking reduce travel burdens?

*NovaPay Rural Banking (fictional) · Impact measurement · Intermediate, 35 min · `/academy/cases/novapay`*

NovaPay, a fictional rural banking cooperative, wants to let people open accounts and deposit or withdraw cash at local general stores that already take utility payments. Many rural households lack an account and travel hours to reach a bank. A foundation will fund a pilot if NovaPay can show the benefit to households and a path to covering store costs.

**Objective:** Estimate the net annual benefit to households in a 50-store pilot and test whether pilot stores can break even.

**Question:** What is the annual net benefit to households, and can pilot stores break even?

**Facts**

- NovaPay’s network has 15,000 rural stores. The pilot would use 50 of them, serving about 30,000 nearby households.
- 40% of those households lack an account; assume half of them adopt.
- Unbanked households spend about $9 a month and a three-hour round trip reaching a bank. Assume local service removes that cost.
- A comparable network broke even at about 25 transactions per store per week after 18 months. Treat this as a benchmark, not a guarantee.

**Exhibit: Pilot planning inputs (fictional)** (Fictional teaching assumptions; units shown in cells.)

| Metric | Input | Interpretation |
| --- | --- | --- |
| Unbanked households | 40% | Of households near pilot stores |
| Planning adoption | 50% | Of unbanked households |
| Travel cost avoided | $9 / month | Per adopting household |
| Comparator break-even | 25 transactions / week | Per store |

**Exhibit: Pilot cluster economics (fictional)** (Planning assumptions for a 50-store pilot.)

| Driver | Value | Unit |
| --- | --- | --- |
| Households near pilot stores | 30,000 | Households |
| Pilot stores | 50 | Stores |
| Transactions per adopting household | 2 | Per month |
| Fee paid by household | $1 | Per transaction |
| Store fixed cost | $50 | Per store per week |
| Network contribution | $2 | Per transaction |

**Worked math**

- Adopters: 30,000 × 40% × 50% = 6,000 households.
- Gross savings: 6,000 × $9 × 12 = $648,000 a year.
- Fees: 2 × 12 × $1 = $24 per household; net saving $108 − $24 = $84, or $504,000 a year.
- Weekly transactions: 6,000 × 2 × 12 ÷ 52 ≈ 2,769, or about 55 per store.
- Store break-even: $50 ÷ $2 = 25 transactions a week, matching the comparator. Stores still break even if adoption reaches only 45% of plan (25 ÷ 55.4).

**Model answer:** About 6,000 households adopt, saving $84 each after fees, or roughly $504,000 a year. At about 55 transactions per store per week, pilot stores clear the 25-transaction break-even comfortably: adoption could fall to 45% of plan and stores would still cover costs. The big uncertainties are whether adopters really stop travelling to banks and whether stores can handle cash safely.

**Recommendation:** Fund the 50-store pilot, starting with payments and deposits. Set six-month gates on adoption (at least 45% of plan), fraud and cash-handling errors, and a household survey confirming fewer bank trips.

### How many households could use a mobile food market?

*FreshRoute, a fictional Mecklenburg-area food nonprofit · Market sizing · Beginner, 25 min · `/academy/cases/mobile-market`*

FreshRoute, a fictional food nonprofit near Charlotte, wants to run a mobile market that brings fresh produce to neighborhoods without a nearby grocery store. Before buying a truck, the board wants to know whether enough households would use it to fill a 1,500-household weekly pilot.

**Objective:** Estimate weekly reachable demand before committing to a 1,500-household weekly pilot.

**Question:** How many households would use the mobile market each week, and is the 1,500-household pilot the right size?

**Facts**

- Assume 100,000 households in the fictional service area; this is not real county census data.
- 20% face the target access barrier; 10% of those households would use the proposed route each week.
- Count households once, not individual visits.

**Exhibit: Demand funnel** (Fictional teaching assumptions; units shown in cells.)

| Input | Assumption | Unit |
| --- | --- | --- |
| Service-area households | 100,000 | Households |
| Target access barrier | 20% | Share of households |
| Weekly adoption | 10% | Share of eligible households |

**Worked math**

- Eligible households = 100,000 × 20% = 20,000.
- Weekly reachable demand = 20,000 × 10% = 2,000 households.

**Model answer:** Modeled demand is 2,000 households per week, above the 1,500-household pilot capacity by 500. This is a demand hypothesis, not validated enrollment.

**Recommendation:** Test route-level demand and prioritize underserved neighborhoods before allocating capacity.

### Which mentoring outcome should the board trust?

*NextStep, a fictional youth mentoring nonprofit · Impact measurement · Intermediate, 35 min · `/academy/cases/mentoring-outcomes`*

NextStep, a fictional youth mentoring nonprofit, ran a one-year pilot pairing 100 middle schoolers with adult mentors. A funder will pay to expand if the board can show that at least 60% of enrolled students became more engaged in school. Staff say the pilot succeeded because 70% of survey respondents reported improvement.

**Objective:** Assess whether a 100-participant pilot justifies expansion based on attendance and school engagement.

**Question:** Does the evidence show the pilot met the funder’s 60% bar, and what should NextStep measure next?

**Facts**

- 100 students enrolled; 80 completed at least 75% of mentoring sessions.
- Among 60 survey respondents, 42 report improved school engagement. Of the 40 nonrespondents, 15 did not complete the program.
- The funder wants evidence of improvement for at least 60% of enrolled students. No comparison group exists.

**Exhibit: Participation** (Fictional teaching assumptions; units shown in cells.)

| Measure | Count | Denominator |
| --- | --- | --- |
| Enrolled | 100 | Eligible pilot participants |
| Session completers | 80 | 100 enrolled |

**Exhibit: Outcome survey** (Fictional teaching assumptions; units shown in cells.)

| Measure | Count | Denominator |
| --- | --- | --- |
| Respondents | 60 | 100 enrolled |
| Report improved engagement | 42 | 60 respondents |
| Nonrespondents | 40 | 100 enrolled |
| Nonrespondents who did not complete | 15 | 40 nonrespondents |

**Worked math**

- Completion = 80 ÷ 100 = 80%.
- Reported improvement among respondents = 42 ÷ 60 = 70%.
- Known improvement among enrolled students = 42 ÷ 100 = 42%; if every nonrespondent improved, the upper bound is 82%.
- Nonrespondents skew toward non-completers: 15 of 40 (38%) did not complete, versus 5 of 60 respondents (8%).

**Model answer:** No. The 70% figure covers respondents only. Of all 100 enrolled students, only 42 are known to have improved, so the true share lies between 42% and 82%. Nonrespondents are disproportionately non-completers, so the real figure is probably toward the low end. And without a comparison group, improvement cannot be attributed to mentoring.

**Recommendation:** Follow up with nonrespondents and use consistent pre/post measures before expanding; consider an ethical comparison design.

### Which arts program creates more sustained participation?

*OpenStage, a fictional community arts nonprofit · Impact measurement · Intermediate, 35 min · `/academy/cases/arts-outcomes`*

OpenStage, a fictional community arts nonprofit, has a $60,000 grant to spend on either large drop-in workshops or small cohorts that meet weekly. The funder cares about people still participating six months later, not one-time attendance.

**Objective:** Choose how to allocate a $60,000 grant to maximize participants still engaged after six months.

**Question:** Which option produces more people still engaged at six months per dollar, and how confident can you be?

**Facts**

- Each program uses the entire $60,000 budget.
- Costs include all delivery and follow-up expenses for this exercise.
- Participants are distinct people; retention definitions are the same across both options.

**Exhibit: Delivery options** (Fictional teaching assumptions; units shown in cells.)

| Option | Participants | Program cost |
| --- | --- | --- |
| Large workshops | 300 | $60,000 |
| Small cohorts | 200 | $60,000 |

**Exhibit: Six-month outcomes** (Fictional teaching assumptions; units shown in cells.)

| Option | Retained share | Evidence limitation |
| --- | --- | --- |
| Large workshops | 40% | One previous cohort, mostly first-time participants |
| Small cohorts | 75% | One previous cohort, mostly returning participants |

**Worked math**

- Workshop cost per participant = $60,000/300 = $200; cohorts = $60,000/200 = $300.
- Retained participants: workshops 300 × 40% = 120; cohorts 200 × 75% = 150.
- Cost per retained participant: workshops $500; cohorts $400.

**Model answer:** Small cohorts reach fewer people but retain 150 versus 120, at $400 versus $500 per retained participant. The catch is who enrolled: cohort participants were mostly returning, so part of their higher retention may reflect who joined rather than the format.

**Recommendation:** Favor small cohorts under the stated sustained-participation goal; validate the outcomes and preserve accessible entry opportunities.

### Can volunteer scheduling cover every delivery shift?

*NeighborCart, a fictional volunteer delivery nonprofit · Operations · Beginner, 25 min · `/academy/cases/volunteer-shifts`*

NeighborCart, a fictional nonprofit, delivers groceries to homebound seniors using volunteers. It needs 60 delivery shifts filled each week and has 80 active volunteers. Last month, several deliveries were missed when volunteers did not show up.

**Objective:** Cover 60 weekly delivery shifts without exceeding 80 available volunteers.

**Question:** How many volunteers should NeighborCart schedule each week, and how should it handle no-shows?

**Facts**

- One volunteer covers one shift weekly; expected show-up is 80%.
- There are 80 available volunteers and no paid backup in the initial model.
- Treat attendance as an average; actual daily coverage is uncertain.

**Exhibit: Weekly staffing** (Fictional teaching assumptions; units shown in cells.)

| Driver | Value | Unit |
| --- | --- | --- |
| Required filled shifts | 60 | Shifts/week |
| Expected show-up | 80% | Share of scheduled |
| Available volunteers | 80 | People |

**Worked math**

- Required scheduled volunteers = 60 / 80% = 75.
- Remaining recruitment capacity = 80 − 75 = 5 volunteers.

**Model answer:** Schedule 75 volunteers for 60 expected filled shifts, leaving five available for a reserve pool. Expected coverage is not a guarantee of daily coverage.

**Recommendation:** Pilot a shift-specific confirmation and reserve process; track missed deliveries and avoid routine overbooking that wastes volunteer time.

### Which growth plan should a nonprofit take to its board?

*BridgeHouse, a fictional housing-navigation nonprofit · Market entry & growth · Advanced, 45 min · `/academy/cases/board-strategy`*

BridgeHouse, a fictional nonprofit, helps families find and keep stable housing. A foundation has offered $120,000 for one year if at least 80 households are still housed after six months. The board must choose between expanding its own navigators and training community partners to deliver the program.

**Objective:** Recommend a one-year strategy within $120,000 to support at least 80 households in sustaining housing for six months.

**Question:** Which option should BridgeHouse recommend to its board, and what would the three-slide brief say?

**Facts**

- Option A expands direct navigation; option B trains community partners.
- Use projected sustained-housing rates as planning assumptions, not proven effects.
- The board needs a three-slide decision brief: recommendation, evidence, and implementation gates.

**Exhibit: Annual delivery** (Fictional teaching assumptions; units shown in cells.)

| Option | Households served | Total budget |
| --- | --- | --- |
| A: direct navigation | 120 | $120,000 |
| B: partner training | 180 | $108,000 |

**Exhibit: Projected outcomes** (Fictional teaching assumptions; units shown in cells.)

| Option | Base sustained-housing rate | Downside rate |
| --- | --- | --- |
| A | 70% | 60% |
| B | 50% | 35% |

**Exhibit: Readiness evidence** (Fictional teaching assumptions; units shown in cells.)

| Factor | A | B |
| --- | --- | --- |
| Delivery partner | Existing team | Verbal interest only |
| Reach | Current neighborhoods | Wider geography |
| Outcome evidence | Small prior pilot | Unvalidated transfer estimate |

**Worked math**

- A base sustained households = 120 × 70% = 84; cost per outcome ≈ $1,428.57.
- B base = 180 × 50% = 90; cost per outcome = $1,200.
- Downside: A = 72; B = 63. Neither meets the 80-household goal in the downside.
- B has $12,000 budget headroom, but no quantified benefit from spending it; do not assume it rescues outcomes.

**Model answer:** B looks more efficient in the base case, but its partnership and outcomes are less certain. A conditional direct-delivery pilot is defensible; neither strategy guarantees the goal.

**Recommendation:** Present a conditional A recommendation with outcome and staffing checkpoints; cost a partner pilot before committing the full program. A well-supported conditional B recommendation can also score well.

## Interview fundamentals

### Can refill retail pay for itself?

*Loop Market, a fictional refill retailer · Profitability · Intermediate, 35 min · `/academy/cases/refill`*

Loop Market, a fictional grocery retailer, sells 60,000 units a year of packaged household staples. Customers have asked for a refill station with reusable containers. The owner will launch only if the program improves annual operating profit.

**Objective:** Choose whether to launch a reusable-container program that must earn a positive annual operating contribution.

**Question:** What happens to annual operating profit, and should the retailer launch?

**Facts**

- Current packaged-product demand is 60,000 units per year at $8 per unit.
- The pilot would shift 20,000 of those units to refills; total unit demand stays unchanged.
- Refills sell at $7.20 and cost $3.80 per unit, including washing and handling. Packaged units cost $4.50 each.
- Pilot equipment costs $18,000 upfront and lasts three years with no residual value. Additional annual operating cost is $9,000. Ignore tax, financing, and changes in working capital.

**Exhibit: Product-level economics (fictional)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Packaged product | Refill |
| --- | --- | --- |
| Selling price / unit | $8.00 | $7.20 |
| Variable cost / unit | $4.50 | $3.80 |
| Annual units after pilot | 40,000 | 20,000 |

**Exhibit: Pilot demand scenarios (fictional)** (Annual units. New-customer units are purchases the store would not otherwise make.)

| Scenario | Refill price | Units shifted from packaged | New-customer refill units |
| --- | --- | --- | --- |
| Base | $7.20 | 20,000 | 0 |
| New customers | $7.20 | 20,000 | 6,000 |
| Higher price | $8.00 | 16,000 | 0 |

**Worked math**

- Contribution per unit: packaged $8.00 − $4.50 = $3.50; refill $7.20 − $3.80 = $3.40.
- Base: shifting 20,000 units loses 20,000 × $0.10 = $2,000; fixed costs add $9,000 + $6,000 depreciation; profit falls $17,000.
- New customers: 6,000 × $3.40 = $20,400 − $2,000 − $15,000 = +$3,400.
- Break-even new refill units at $7.20: ($2,000 + $15,000) ÷ $3.40 = 5,000 a year.
- Higher price: refill contribution $4.20; 16,000 × ($4.20 − $3.50) = $11,200 − $15,000 = −$3,800.
- First-year cash in the base case: −$2,000 − $9,000 − $18,000 = −$29,000.

**Model answer:** Moving existing buyers to refills loses money: contribution falls $2,000 and fixed costs add $15,000, so profit drops $17,000. The program pays only if it attracts new customers: about 5,000 new refill units a year breaks even, and 6,000 gives +$3,400. Raising the refill price to $8.00 still loses $3,800 if it pushes 4,000 buyers back to packaged goods.

**Recommendation:** Do not launch on current assumptions. Run a low-cost test, such as a single refill shelf, to find out whether refills bring in at least 5,000 units a year from new customers before buying the $18,000 of equipment.

### Which subscription channel pays back sooner?

*CivicDesk, a fictional software provider for nonprofits · Market entry & growth · Intermediate, 35 min · `/academy/cases/software`*

CivicDesk, a fictional company, sells case-management software to small nonprofits for $120 a month. It has budget for one acquisition channel next year: its own sales team, or a partner program run through nonprofit associations. Investors want each new customer to pay back its acquisition cost within 12 months.

**Objective:** Select a twelve-month customer-acquisition channel while keeping modeled payback within twelve months.

**Question:** Which channel meets the modeled payback target and produces a better first-year contribution?

**Facts**

- A new organization pays $120 monthly; gross margin is 80%.
- The direct-sales channel costs $144,000 and is expected to sign 120 organizations.
- The partner channel costs $90,000 and is expected to sign 100 organizations. Partners also receive 15% of first-year revenue.
- Assume all customers start at the beginning of the year and remain for twelve months. Ignore existing customers, overhead, tax, and revenue growth.

**Exhibit: Channel comparison (fictional)** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Direct sales | Partner channel |
| --- | --- | --- |
| Acquisition spend | $144,000 | $90,000 |
| New customers | 120 | 100 |
| Additional first-year commission | 0% | 15% of revenue |

**Exhibit: Second-year renewal (from a small prior pilot)** (Share of first-year customers who renew for year 2. No partner commission in year 2.)

| Metric | Direct sales | Partner channel |
| --- | --- | --- |
| Year-2 renewal rate | 90% | 75% |
| Year-2 commission | 0% | 0% |

**Worked math**

- Monthly gross profit = $120 × 80% = $96.
- Direct: $144,000 ÷ 120 = $1,200 CAC; $1,200 ÷ $96 = 12.5 months.
- Partner: $90,000 ÷ 100 = $900 CAC; commission $18/month; net $78/month; payback ≈ 11.5 months.
- Year 1: direct 120 × $96 × 12 − $144,000 = −$5,760; partner 100 × $78 × 12 − $90,000 = $3,600.
- Year 2: direct 120 × 90% × $96 × 12 = $124,416; partner 100 × 75% × $96 × 12 = $86,400.
- Two-year total: direct $118,656; partner $90,000.

**Model answer:** Partner payback is about 11.5 months, which meets the target; direct is 12.5 months and misses it. But direct customers renew more (90% vs 75%), so over two years direct contributes $118,656 against the partner channel’s $90,000. The 12-month rule favors partners; two-year value favors direct.

**Recommendation:** Use the partner channel to meet the payback rule, and ask whether the direct team can cut acquisition cost by about $48 per customer (to $1,152). That would bring direct payback to 12 months and make it the better long-term channel.

### Can a campus coffee shop support its costs?

*HarborLight Coffee Co. (fictional) · Market sizing · Intermediate, 35 min · `/academy/cases/harborlight`*

HarborLight Coffee Co., a fictional local roaster, has been offered a five-year lease on a 1,200-square-foot space next to a university campus. The owner wants to know whether the location can support itself before signing.

**Objective:** Size the coffee-shop opportunity and test whether its projected contribution supports signing a lease.

**Question:** Estimate annual revenue and operating surplus. How does 6% capture change the recommendation?

**Facts**

- Teaching assumptions: 30,000 people live, work, or study nearby; 15% buy coffee regularly; the proposed shop captures 8% of those buyers. Students and campus traffic are already included.
- Each captured customer makes 3 visits per week and spends $5.50 per visit. Assume 52 weeks at this demand level before testing academic seasonality.
- Annual rent is $28 per square foot for 1,200 square feet. Added exercise assumptions: COGS are 30% of sales; baseline labor is 28% of sales and other operating costs are 15%. These are case assumptions, not industry benchmarks.
- For the downside calculation, hold baseline labor, rent, and other operating costs fixed, and let only COGS vary with sales. Exclude build-out, financing, tax, and owner compensation.

**Exhibit: Market and occupancy assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Driver | Assumption | Unit |
| --- | --- | --- |
| Potential regular buyers | 15% of 30,000 | People |
| Capture rate | 8% | Share of buyers |
| Purchase frequency | 3 | Visits / week |
| Average ticket | $5.50 | Per visit |
| Rent | 1,200 × $28 | Per year |

**Exhibit: Academic calendar (fictional)** (Demand is relative to a normal term week.)

| Period | Weeks | Demand vs. term weeks |
| --- | --- | --- |
| Fall and spring terms | 32 | 100% |
| Summer and breaks | 20 | 40% |

**Worked math**

- Buyers: 30,000 × 15% = 4,500; captured customers: 4,500 × 8% = 360.
- Annual revenue at 52 full weeks: 360 × 3 × $5.50 × 52 = $308,880.
- Rent: 1,200 × $28 = $33,600. COGS $92,664; labor $86,486.40; other costs $46,332.
- Base surplus: $308,880 − $92,664 − $86,486.40 − $46,332 − $33,600 = $49,797.60.
- At 6% capture: 270 customers; revenue $231,660; COGS $69,498; surplus −$4,256.40.
- Academic calendar: effective weeks = 32 + 20 × 40% = 40; revenue = 360 × 3 × $5.50 × 40 = $237,600.
- Seasonal surplus: $237,600 − $71,280 COGS − $86,486.40 − $46,332 − $33,600 ≈ −$98, roughly break-even.

**Model answer:** At 8% capture and 52 full weeks, 360 regular customers generate $308,880 and about $49,800 of operating surplus before owner pay and financing. But at 6% capture the shop loses about $4,300, and adjusting for the academic calendar (20 weeks at 40% demand) cuts revenue to $237,600 and surplus to roughly break-even. The 52-week base case overstates the opportunity.

**Recommendation:** Do not sign a five-year lease on these numbers. Negotiate a shorter lease or seasonal rent, plan a leaner summer staffing model, and recheck the seasonal case if labor can flex with demand.

### Why are grocery profits falling?

*BrightCart Grocery (fictional) · Profitability · Intermediate, 35 min · `/academy/cases/brightcart`*

BrightCart, a fictional 40-store regional grocer, kept revenue flat at $620 million, but store contribution fell 18%. Twelve stores switched produce suppliers during the year, and store managers blame the new supplier. The CFO wants the decline explained before acting.

**Objective:** Explain what drove the 18% fall in store contribution and decide whether to reverse the supplier switch.

**Question:** What explains the decline, and should BrightCart reverse the supplier switch?

**Facts**

- Revenue was $620m in both years. Store contribution (before corporate overhead) fell from $62.0m to $50.84m.
- Cost of goods sold rose $7.6m and store labor rose $3.56m; other store costs were flat.
- Twelve stores switched produce suppliers. Their shrink (spoiled or lost stock) runs two percentage points above the chain average.

**Exhibit: Chain store P&L ($ millions, fictional)** (Store contribution is before corporate overhead.)

| Line | Prior year | Current year |
| --- | --- | --- |
| Revenue | 620.0 | 620.0 |
| Cost of goods sold | 421.6 | 429.2 |
| Store labor | 86.8 | 90.36 |
| Other store costs | 49.6 | 49.6 |
| Store contribution | 62.0 | 50.84 |

**Exhibit: COGS change by store group ($ millions, fictional)** (Shrink is measured in percentage points of revenue versus the chain average.)

| Store group | Stores | Revenue | COGS change | Shrink vs. chain average |
| --- | --- | --- | --- | --- |
| Switched supplier | 12 | 180 | +5.4 | +2.0 pts |
| All other stores | 28 | 440 | +2.2 | 0.0 pts |

**Worked math**

- Decline: $62.0m − $50.84m = $11.16m (18%).
- Bridge: COGS +$7.6m (68% of the decline) + labor +$3.56m (32%) = $11.16m.
- Switched stores: +$5.4m of COGS, 48% of the decline, from 29% of revenue ($180m ÷ $620m).
- Shrink: 2 pts × $180m = $3.6m of the $5.4m; the remaining $1.8m is likely purchase price or mix.
- Other stores’ COGS rose $2.2m on $440m (0.5 pts), so the switched group stands out.

**Model answer:** The decline is fully explained: COGS +$7.6m and labor +$3.56m. The 12 switched stores account for $5.4m, nearly half the decline, from 29% of revenue, and about $3.6m of that is extra shrink. That points strongly at the supplier but does not prove it: store-specific issues could also play a part. Labor is a separate, smaller problem.

**Recommendation:** Revert two or three switched stores to the old supplier as an eight-week controlled test and compare their shrink with the other switched stores. Separately, review labor scheduling, which accounts for about a third of the decline.

### Should an industrial supplier enter EV battery hardware?

*FlexForge Industrial (fictional) · Market entry & growth · Advanced, 45 min · `/academy/cases/flexforge`*

FlexForge, a fictional maker of industrial fasteners, is weighing a $40 million move into battery-enclosure hardware for electric vehicles. The market is growing fast but dominated by three incumbents, and automakers take years to qualify a new supplier.

**Objective:** Decide whether to commit $40 million to enter EV battery-enclosure hardware now, or what evidence to require first.

**Question:** What could FlexForge earn by year five, and should it commit the full $40 million now?

**Facts**

- The market is about $600 million today and assumed to grow 14% a year for five years. Three incumbent suppliers hold 70% share.
- Tooling and certification require $40 million upfront. Qualification takes three to four years before production orders.
- FlexForge already sells other fasteners to two automakers. That does not shorten qualification.
- At scale, a supplier earns about a 12% operating margin. A 5–8% year-five share is a scenario, not a forecast.

**Exhibit: Entry assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Driver | Assumption | Status |
| --- | --- | --- |
| Market growth | 14% per year | Fictional scenario |
| Upfront investment | $40m | Before orders |
| Qualification | 3–4 years | Before production |
| Year-five share | 5–8% | To be validated |

**Exhibit: Market and margin inputs (fictional)** (Planning assumptions.)

| Input | Value | Note |
| --- | --- | --- |
| Current market size | $600m | Annual sales |
| Operating margin at scale | 12% | Of revenue |
| First production revenue | Year 4 | After qualification |
| Year-five share scenario | 5–8% | Needs customer commitments |

**Worked math**

- Five-year growth factor: 1.14^5 ≈ 1.925, so the market reaches about $600m × 1.925 ≈ $1,155m.
- Year-five revenue: 5% share ≈ $58m; 8% share ≈ $92m.
- Year-five operating profit at 12%: about $6.9m–$11.1m.
- Revenue only starts in year 4, so by year 5 FlexForge has at most two years of partial profit against $40m spent upfront. Even at the high case, recovering $40m takes about 3.6 years of full-scale profit ($40m ÷ $11.1m).
- Compare staged options (qualify one part first, partner with an incumbent, or license) before committing the full amount.

**Model answer:** The market could reach about $1.16 billion by year five; a 5–8% share means roughly $58–92 million of revenue and $7–11 million of operating profit a year. But nothing arrives until year 4 and the $40 million is spent upfront, so even the high case likely does not pay back until well after year 6, before working capital. The share assumption is the swing factor, and it depends on winning qualification against entrenched incumbents.

**Recommendation:** Do not commit the full $40 million now. Fund qualification of one product with one automaker, and require a supply commitment before the main tooling investment.

### Which streaming price model works better?

*PulseView Streaming (fictional) · Pricing · Intermediate, 35 min · `/academy/cases/pulseview`*

PulseView, a fictional streaming service with 8 million subscribers at $10 a month, needs to grow revenue this year. Leadership is split between raising the price to $12 and launching a $6 ad-supported tier.

**Objective:** Compare a price increase and ad-tier launch using explicit assumptions and separate new customers from downgrades.

**Question:** Which scenario produces more monthly revenue, and which uncertainty could change the result?

**Facts**

- PulseView has 8 million subscribers paying $10 a month. A previous $1 price increase caused 4% churn; plan on 8% churn for a $2 increase.
- The ad tier would cost $6 a month, and advertising would add $4 per ad-tier user each month.
- Assume 1.6 million ad-tier users: 1.2 million existing subscribers downgrade and 0.4 million are new. The remaining 6.8 million stay at $10.
- Compare revenue first, then contribution after the serving costs in Exhibit 2. Ignore one-time implementation costs.

**Exhibit: Explicit teaching scenarios** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Price increase | Ad-supported tier |
| --- | --- | --- |
| Main subscription price | $12 | $10 |
| Retained main-tier users | 7.36m | 6.8m |
| Ad-tier users | 0 | 1.6m |
| Ad-tier total monthly revenue / user | Not applicable | $10 = $6 fee + $4 ads |

**Exhibit: Cost to serve and churn range (fictional)** (Monthly figures.)

| Driver | Value | Applies to |
| --- | --- | --- |
| Serving cost | $3.00 per subscriber per month | All subscribers |
| Ad operations cost | $0.50 per ad-tier user per month | Ad tier only |
| Churn after a $2 increase | 4–12% range; 8% planning case | Price increase |

**Worked math**

- Baseline revenue: 8m × $10 = $80m per month.
- Price scenario: 8m × 92% × $12 = $88.32m.
- Ad scenario: 6.8m × $10 + 1.6m × ($6 + $4) = $84m.
- Contribution after serving costs: price 7.36m × ($12 − $3) = $66.24m; ad 6.8m × $7 + 1.6m × ($10 − $3.50) = $58.0m; baseline 8m × $7 = $56m.
- At 12% churn the price increase still contributes 7.04m × $9 = $63.36m.
- Contribution parity: 8m × (1 − c) × $9 = $58m, so churn would have to exceed about 19.4%.

**Model answer:** At 8% churn the price increase brings in $88.32m a month against $84m for the ad tier. After serving costs the gap widens: $66.24m versus $58.0m, and the price increase stays ahead unless churn exceeds about 19%, well above the 4–12% range. The ad tier wins only on subscriber count (8.4m vs 7.36m).

**Recommendation:** Raise the price to $12, since it wins on revenue and contribution across the plausible churn range. Revisit the ad tier if subscriber growth becomes the priority, and test ad pricing in one market first.

### How can coffee farmers capture more value?

*TerraRoots Agri-Cooperative (fictional) · Market entry & growth · Intermediate, 35 min · `/academy/cases/terraroots`*

TerraRoots, a fictional cooperative of 2,000 smallholder coffee farmers, sells green beans through brokers, and its members receive about 30% of the final retail value. The board is weighing two ways to capture more: selling directly to foreign roasters, or building its own roasting facility for the domestic market.

**Objective:** Compare export and processing options on net farmer income, timing, and risk.

**Question:** Which path raises farmer income more, and should the cooperative build the roasting facility now?

**Facts**

- The cooperative supports 2,000 farmers, who receive about 30% of final retail value today. Direct exports could raise that share to 45%.
- Direct buyer relationships take 12–18 months to establish.
- A roasting facility requires $2 million upfront. Roasted coffee sells for 3–4 times the raw-bean price, before roasting costs, yield loss, distribution and marketing.
- Building domestic distribution is expected to take two to three years. Treat this as a planning scenario.

**Exhibit: Strategic options** (Fictional teaching assumptions.)

| Item | Direct export | Domestic processing |
| --- | --- | --- |
| Headline value | 30% → 45% share of retail value | 3–4× raw-bean selling price |
| Setup horizon | 12–18 months | 2–3 years to build distribution |
| Upfront capital | None stated (annual costs in Exhibit 2) | $2m |

**Exhibit: Illustrative annual economics at current volume (fictional)** (Annual figures unless stated.)

| Input | Value | Note |
| --- | --- | --- |
| Retail value of the co-op’s coffee | $8.0m / year | At current volume |
| Export certification and logistics | $0.5m / year | Once direct buyers are in place |
| Beans diverted to roasting | $0.8m / year | Raw-bean value; 10% of volume |
| Roasting yield loss | 18% | Weight lost in roasting |
| Roasting, packaging, distribution, marketing | $1.2m / year | At full distribution |

**Worked math**

- Export: 45% × $8.0m = $3.6m − $0.5m = $3.1m vs $2.4m today: +$0.7m a year, about $350 per farmer.
- Roasting at 3.5× (midpoint): $0.8m × 3.5 × (1 − 18%) = $2.296m revenue − $0.8m beans − $1.2m costs ≈ $0.3m a year.
- Roasting payback: $2.0m ÷ $0.296m ≈ 6.8 years, after a two-to-three-year distribution build.
- Sensitivity: at 3× the roasting margin is about −$0.03m; at 4× about +$0.62m (payback ≈ 3.2 years).
- Export gains start in 12–18 months with no stated upfront capital.

**Model answer:** Direct export adds about $0.7m a year ($350 per farmer) within 12–18 months. Roasting earns about $0.3m a year at the midpoint price, pays back in almost seven years after a two-to-three-year build, and loses money if roasted coffee fetches only 3× the bean price. Export is the better first move.

**Recommendation:** Build direct-export relationships first. Test domestic demand with contract roasting, which needs no capital, and revisit the facility if roasted prices hold near 4× the bean price.

### Should an outdoor retailer keep opening stores?

*SummitGear Outdoor Retail (fictional) · Profitability · Intermediate, 35 min · `/academy/cases/summitgear`*

SummitGear, a fictional outdoor retailer with 20 established stores, opened five new stores during the year. Revenue grew 9%, but profit fell 12%. The CEO wants to open five more stores next year and asks whether the profit drop is just growing pains.

**Objective:** Separate expansion losses from core-store performance before approving additional openings.

**Question:** Can you conclude the profit decline is temporary and approve another expansion cycle?

**Facts**

- SummitGear has 20 established stores and opened five new stores at different points during the year.
- Total revenue rose 9% ($200m to $218m); same-store sales were flat; total profit fell 12% ($20.0m to $17.6m).
- The new stores were open for a combined 30 store-months. Their results include $1.8m of one-time opening costs.

**Exhibit: Reported indicators** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Change | Scope |
| --- | --- | --- |
| Revenue | +9% | Whole chain |
| Same-store sales | 0% | 20 established stores |
| Profit | −12% | Whole chain |
| New stores | 5 | Partial-year openings |

**Exhibit: Profit by store group ($ millions, fictional)** (New-store profit includes $1.8m of one-time opening costs; new stores were open 30 store-months in total.)

| Store group | Revenue, prior | Revenue, current | Profit, prior | Profit, current |
| --- | --- | --- | --- | --- |
| 20 established stores | 200.0 | 200.0 | 20.0 | 20.6 |
| 5 new stores | 0.0 | 18.0 | 0.0 | −3.0 |
| Total | 200.0 | 218.0 | 20.0 | 17.6 |

**Worked math**

- Check: revenue $218m ÷ $200m = +9%; profit $17.6m ÷ $20.0m = −12%.
- Established stores: profit up $0.6m (+3%) on flat sales.
- New stores: −$3.0m, of which $1.8m is one-time; the recurring operating loss is $1.2m.
- Underlying profit excluding opening costs: $20.6m − $1.2m = $19.4m, down 3%, not 12%.
- Productivity: new stores $18m ÷ 30 store-months = $0.6m per store-month vs established $200m ÷ 240 ≈ $0.83m, about 72%.

**Model answer:** Most of the 12% drop is one-time: excluding $1.8m of opening costs, profit is down only 3%, and established stores grew profit 3%. New stores still lose $1.2m a year on operations and sell about 72% of what a mature store sells per month. That is consistent with growing pains, but it does not prove they will mature.

**Recommendation:** Approve a smaller next wave (two or three stores) and require the first five to show a path to break-even, for example reaching 85% of mature sales productivity by month 12, before opening more.

### How large is the local device-repair market?

*FixLoop, a fictional consumer repair shop · Market sizing · Beginner, 25 min · `/academy/cases/repair-demand`*

FixLoop, a fictional phone and laptop repair shop, is deciding whether to hire a second technician. With two technicians it could handle 2,400 jobs a year. The owner wants to know how big the local repair market is first.

**Objective:** Estimate annual repair jobs and compare demand with a 2,400-job shop capacity.

**Question:** How many paid repair jobs does the local market generate a year, and does that justify a second technician?

**Facts**

- Assume 50,000 people with an average of 1.5 eligible devices each.
- Each eligible device generates 0.04 paid repair jobs a year, including repeat jobs.
- FixLoop completed about 900 jobs last year; two other shops and a big-box store’s repair counter compete for the rest.

**Exhibit: Annual demand inputs** (Fictional teaching assumptions; units shown in cells.)

| Driver | Value | Unit |
| --- | --- | --- |
| Population | 50,000 | People |
| Devices per person | 1.5 | Devices/person |
| Paid repairs per device | 0.04 | Jobs/device/year |

**Worked math**

- Installed eligible base = 50,000 × 1.5 = 75,000 devices.
- Annual demand = 75,000 × 0.04 = 3,000 jobs.
- Current share = 900 ÷ 3,000 = 30%. Filling 2,400 jobs would require 80% (2,400 ÷ 3,000).

**Model answer:** The market is about 3,000 paid repair jobs a year. FixLoop did about 900 last year, a 30% share. Filling two technicians’ 2,400-job capacity would take 80% of the market, which is unrealistic with three competitors.

**Recommendation:** Do not hire a full-time second technician yet. Add part-time hours or an overflow arrangement, and revisit if FixLoop’s share rises toward 50%.

### How many prepaid lunches could a campus service sell?

*LunchLane, a fictional campus meal service · Market sizing · Intermediate, 35 min · `/academy/cases/campus-meals`*

LunchLane, a fictional meal service, wants to sell prepaid lunch subscriptions on a large campus. It has access to a shared kitchen that can produce 5,000 meals a week. Before signing the kitchen contract, the founders want an estimate of weekly demand.

**Objective:** Estimate weekly paid lunches and assess a 5,000-meal weekly kitchen limit.

**Question:** How many lunches a week would subscribers buy, and how does that compare with kitchen capacity in the base and downside cases?

**Facts**

- There are 20,000 students, 60% on campus at lunch.
- 25% of on-campus students are addressable customers; 40% of those subscribe.
- Subscribers order three meals weekly; scenario adoption is 25% rather than 40%.

**Exhibit: Funnel** (Fictional teaching assumptions; units shown in cells.)

| Driver | Base | Unit |
| --- | --- | --- |
| Students | 20,000 | People |
| On-campus at lunch | 60% | Share |
| Addressable | 25% | Share of on-campus |
| Subscription adoption | 40% | Share of addressable |

**Exhibit: Frequency and downside** (Fictional teaching assumptions; units shown in cells.)

| Driver | Base | Downside |
| --- | --- | --- |
| Meals per subscriber per week | 3 | 3 |
| Adoption | 40% | 25% |
| Kitchen capacity | 5,000 meals/week | 5,000 meals/week |

**Worked math**

- Addressable students = 20,000 × 60% × 25% = 3,000.
- Base subscribers = 3,000 × 40% = 1,200; demand = 3,600 meals/week.
- Downside = 3,000 × 25% × 3 = 2,250 meals/week.

**Model answer:** Base demand is 3,600 meals weekly, or 72% of capacity; downside is 2,250, or 45%. Neither estimate establishes profitability.

**Recommendation:** Use prepaid trial orders to validate demand; request unit contribution and fixed costs before a launch decision.

## Advanced electives

### What should an acquirer pay for analytics software?

*AeroQuant Analytics (fictional) · Partnerships & M&A · Advanced, 45 min · `/academy/cases/aeroquant`*

A fictional aviation-software company is considering buying AeroQuant, a fast-growing start-up whose analytics tools airlines use to plan maintenance. The founders are asking for a price at the top of recent deal multiples, citing cross-selling potential.

**Objective:** Assess a proposed acquisition using $8m ARR, a fictional 6–9× EV/ARR range, and uncertain cross-selling.

**Question:** What range is supported and how should synergy and retention affect the offer?

**Facts**

- The target has $8 million ARR, 35% reported annual growth, and 12 airline customers with multi-year contracts.
- For this exercise only, assume the supplied 6–9× transaction multiples represent enterprise value / ARR on a comparable basis. They are fictional, not current market observations.
- Management projects $3 million annual cross-sell revenue by year two. Associated margins, timing, probability, and integration costs are not supplied.
- The two technical founders have not signed retention agreements. Cash, debt, and other purchase-price adjustments are also missing.

**Exhibit: Acquisition inputs** (Units shown in column headings and cells; fictional teaching assumptions.)

| Input | Value | Qualification |
| --- | --- | --- |
| ARR | $8m | Current |
| Illustrative EV / ARR | 6–9× | Teaching assumption |
| Cross-sell revenue | $3m per year | Unproven year-two target |
| Founder retention | Unsigned | Key diligence issue |

**Exhibit: Decision context and evidence gaps** (Qualitative evidence / supplied planning assumptions)

| Diligence area | Potential value | Uncertainty |
| --- | --- | --- |
| Cross-selling | $3m annual revenue opportunity | Margin, timing and probability unknown |
| Retention | Founders have expertise | Post-close retention unproven |
| Equity bridge | Enterprise multiple available | Cash and debt unknown |

**Worked math**

- Enterprise value: $8m × 6–9 = $48–72m, conditional on genuinely comparable multiples.
- Bridge EV to equity using verified cash, debt, and other relevant claims and adjustments.
- Model synergy revenue × incremental margin, less tax, capex, working capital, and integration costs, with timing and probability.
- Validate customer concentration, renewal terms, technology ownership, and founder dependency.
- Consider milestone-based contingent payment, while recognizing an earn-out alone does not ensure retention.

**Model answer:** The illustrative enterprise-value range is $48–72 million. Equity purchase price requires cash, debt, and other adjustments. The $3 million revenue synergy cannot simply be added or multiplied into a justified premium; value its risk-adjusted incremental cash flows after costs. Founder retention is a major condition for proceeding.

**Recommendation:** Proceed to diligence with a conditional offer range. Require a credible technical transition and retention plan, and avoid paying all projected synergy value upfront.

### Do synergies justify an acquisition premium?

*Northstar, a fictional professional-services acquirer · Partnerships & M&A · Intermediate, 35 min · `/academy/cases/northstar`*

Northstar, a fictional professional-services firm, is negotiating to buy a smaller rival. The seller wants a premium over standalone value, and Northstar’s deal team argues that savings from combining offices justify it.

**Objective:** Assess whether five years of $2m annual pretax synergies justify a premium above $80m standalone enterprise value.

**Question:** Calculate standalone equity value and the maximum synergy premium under these assumptions.

**Facts**

- Standalone enterprise value is $80m; debt is $12m and cash is $4m.
- Annual pretax cost savings are $2m for five years; tax is 25%.
- Use a supplied five-year present-value factor of 4.0. Integration costs $6m at closing, with no tax benefit assumed.

**Exhibit: Deal assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Value | Basis |
| --- | --- | --- |
| Standalone EV | $80m | Before synergies |
| Debt / cash | $12m / $4m | At closing |
| Annual savings | $2m | Pretax, years 1–5 |
| PV factor / integration | 4.0 / $6m | Aftertax savings / upfront cost |

**Exhibit: Synergy scenarios (fictional)** (Pretax annual savings; 25% tax; $6m integration cost at closing in all cases.)

| Scenario | Annual pretax savings | Years received | PV factor |
| --- | --- | --- | --- |
| Base | $2.0m | Years 1–5 | 4.00 |
| Delayed | $2.0m | Years 2–5 | 3.07 |
| Upside | $2.5m | Years 1–5 | 4.00 |

**Worked math**

- Equity value = $80m − $12m + $4m = $72m.
- Annual aftertax savings = $2m × 75% = $1.5m.
- Base: PV of savings = $1.5m × 4.0 = $6m; minus $6m integration = $0.
- Delayed: $1.5m × 3.07 − $6m ≈ −$1.4m.
- Upside: $2.5m × 75% × 4.0 − $6m = $1.5m.
- These are five-year benefits only; do not add perpetual savings or a terminal value without evidence.

**Model answer:** Equity value is $72m. In the base case the synergies are worth exactly the $6m integration cost, so they justify no premium. If savings slip a year they destroy about $1.4m; only in the upside do they support up to $1.5m of premium, well below the $5m the seller wants.

**Recommendation:** Offer standalone value. If the seller insists on a premium, tie up to $1.5m to an earn-out that pays only if savings reach the upside level.

### Would an all-stock deal increase earnings per share?

*Cedar, a fictional technology acquirer · Partnerships & M&A · Intermediate, 35 min · `/academy/cases/cedar`*

Cedar, a fictional technology company, plans to buy a smaller software firm by issuing new shares. The CEO wants to tell investors the deal increases earnings per share.

**Objective:** Evaluate EPS accretion for a $60m all-stock purchase using $1.2m annual aftertax synergies.

**Question:** Calculate new shares, pro forma EPS with and without synergies, and accretion.

**Facts**

- Acquirer net income is $30m with 10m shares at $40 each.
- Target net income is $6m and its equity purchase price is $60m.
- Recurring aftertax synergies are $1.2m. Ignore purchase-accounting adjustments, financing changes and one-time costs for this simplified calculation.

**Exhibit: Deal assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Acquirer | Target / deal |
| --- | --- | --- |
| Net income | $30m | $6m |
| Shares / price | 10m / $40 | $60m equity price |
| Annual aftertax synergy | — | $1.2m |

**Exhibit: Sensitivity to Cedar’s share price at closing (fictional)** ($60m equity price paid in new Cedar shares; includes $1.2m of synergies.)

| Cedar share price | New shares issued | Pro forma EPS | Accretion |
| --- | --- | --- | --- |
| $35 | 1.71m | $3.18 | 5.9% |
| $40 | 1.50m | $3.23 | 7.8% |
| $45 | 1.33m | $3.28 | 9.4% |

**Worked math**

- Standalone EPS = $30m ÷ 10m = $3.00.
- New shares = $60m ÷ $40 = 1.5m; total shares = 11.5m.
- With synergies: ($30m + $6m + $1.2m) ÷ 11.5m = $3.2348, or 7.83% accretion.
- Without synergies: $36m ÷ 11.5m = $3.1304, or 4.35% accretion.
- P/E check: Cedar trades at $40 ÷ $3.00 ≈ 13.3× earnings and pays $60m ÷ $6m = 10× for the target. Buying earnings at a lower P/E than your own is accretive even without synergies.
- At $35 a share: 1.71m new shares; EPS $3.18 with synergies (+5.9%) and $3.07 without (+2.4%).

**Model answer:** The deal issues 1.5m shares and lifts EPS to $3.23 (+7.8%) with synergies, or $3.13 (+4.3%) without, and stays accretive even if Cedar’s shares fall to $35. The accretion comes mainly from paying 10× earnings with stock valued at 13.3×, not from synergies, and accretion alone does not prove the deal creates value.

**Recommendation:** Continue diligence; use cash-flow valuation alongside EPS before recommending approval.

### What are the clinic’s sustainable earnings?

*Oakline, a fictional clinic group · Partnerships & M&A · Intermediate, 35 min · `/academy/cases/oakline`*

A fictional healthcare investor is considering buying Oakline, a group of outpatient clinics. The seller is asking $36m, pointing to last year’s earnings. The investor’s team needs to know what Oakline really earns on a recurring basis.

**Objective:** Assess the $36m asking enterprise value against normalized and downside EBITDA.

**Question:** Calculate normalized EBITDA, the asking multiple, and the downside multiple.

**Facts**

- Revenue is $20m and reported operating expenses are $16m; treat the difference as EBITDA in this simplified exhibit.
- Expenses include $0.8m of verified one-time relocation costs.
- The clinic needs $0.3m of additional recurring annual staffing expense. Asking enterprise value is $36m.
- Downside: $2m of revenue disappears at a 40% contribution margin, after the normalization adjustments.

**Exhibit: Deal assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Value | Treatment |
| --- | --- | --- |
| Reported EBITDA | $4m | Starting point |
| One-time relocation | $0.8m | Add back |
| Missing recurring staffing | $0.3m | Deduct |
| Lost revenue / margin | $2m / 40% | Downside scenario |

**Exhibit: Valuation inputs (fictional)** (Multiples are enterprise value ÷ normalized EBITDA.)

| Input | Value | Note |
| --- | --- | --- |
| Comparable clinic deals | 7.0–8.5× | Recent transactions |
| Largest payer’s share of revenue | 35% | Contract renews in six months |
| Probability of the $2m revenue loss | 30% | Diligence estimate |

**Worked math**

- Reported EBITDA = $20m − $16m = $4m.
- Normalized EBITDA = $4m + $0.8m − $0.3m = $4.5m; asking multiple $36m ÷ $4.5m = 8.0× (9.0× on reported).
- Downside: $2m × 40% = $0.8m lost; EBITDA $3.7m; $36m ÷ $3.7m ≈ 9.7×.
- Comparable range: $4.5m × 7.0–8.5 = $31.5m–$38.25m; downside $3.7m × 7.0–8.5 = $25.9m–$31.45m.
- Probability-weighted EBITDA: 70% × $4.5m + 30% × $3.7m = $4.26m; at the 7.75× midpoint ≈ $33.0m.

**Model answer:** Normalized EBITDA is $4.5m, so $36m is 8.0×, inside the 7.0–8.5× comparable range. But there is a 30% chance of losing $0.8m of EBITDA when the largest payer renews. Weighted for that, EBITDA is about $4.26m and a midpoint multiple gives about $33m.

**Recommendation:** Offer about $33m, or $36m with part of the price held back until the largest payer’s contract renews.

### Should the software company buy or build?

*Lumen, a fictional software provider · Partnerships & M&A · Intermediate, 35 min · `/academy/cases/lumen`*

Lumen, a fictional software provider for logistics firms, needs an analytics capability its customers keep asking for. It can build one in-house or buy a small analytics company.

**Objective:** Compare buy and build NPVs over three years at a 10% discount rate.

**Question:** Compute each NPV and recommend an option under these assumptions.

**Facts**

- Build requires $6m now and yields cash flows of $0m, $2m and $3m in years 1–3.
- Buy requires $8m now and yields cash flows of $3m, $4m and $4m in years 1–3.
- Use a 10% discount rate. Cash flows are incremental, aftertax and received at year-end.
- For this exercise, both options have zero residual value after year 3 and all integration costs are included.

**Exhibit: Deal assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Option | Initial investment | Year 1 / 2 / 3 cash flow |
| --- | --- | --- |
| Build | $6m | $0m / $2m / $3m |
| Buy | $8m | $3m / $4m / $4m |
| Discount rate | 10% | Zero residual value |

**Exhibit: Sensitivities (fictional)** (Apply one sensitivity at a time.)

| Sensitivity | Change | Applies to |
| --- | --- | --- |
| Acquired-customer churn | Cash flows 20% lower in years 1–3 | Buy |
| Platform residual value | $4m of value left at end of year 3 | Build |

**Worked math**

- Build NPV = −6 + 0/1.1 + 2/1.1² + 3/1.1³ ≈ −$2.09m.
- Buy NPV = −8 + 3/1.1 + 4/1.1² + 4/1.1³ ≈ +$1.04m.
- Buy exceeds build by about $3.13m in the base case.
- Buy with 20% lower cash flows: −8 + 2.4/1.1 + 3.2/1.1² + 3.2/1.1³ ≈ −$0.77m.
- Build with $4m residual value: −$2.09m + 4/1.1³ ≈ +$0.91m.

**Model answer:** Build NPV is about −$2.09m and buy about +$1.04m, so buying wins in the base case. But the ranking flips if acquired customers churn (buy falls to −$0.77m) or if the built platform keeps $4m of value (build rises to +$0.91m).

**Recommendation:** Favor buying, but protect against churn with an earn-out tied to customer retention, and test whether a built platform would really keep $4m of value.

### Can a portfolio finance integration pay back?

*A fictional PE-backed services portfolio · Partnerships & M&A · Intermediate, 35 min · `/academy/cases/finance-integration`*

A fictional private-equity-owned services group has bought four companies in three years, and each still runs its own accounting system. The CFO proposes a $500,000 program to move everyone onto one system.

**Objective:** Evaluate a $500,000 integration investment over five years using an 8% discount rate.

**Question:** Calculate net annual benefit, simple payback and NPV. What should management measure before rollout?

**Facts**

- Source context: Cherry Bekaert describes an unnamed PE-backed business using five accounting systems and fragmented billing. It reports 30% faster billing cycles after standardization.
- All financial assumptions below are invented for this exercise; they are not publisher-reported results.
- The program costs $500,000 now, saves $240,000 annually and adds $90,000 of annual operating costs.
- Assume five years of steady aftertax net savings, no terminal value, and a supplied 8% annuity factor of 3.993.

**Exhibit: Deal assumptions** (Units shown in column headings and cells; fictional teaching assumptions.)

| Metric | Value | Provenance |
| --- | --- | --- |
| Upfront investment | $500,000 | Fictional assumption |
| Annual savings / added costs | $240,000 / $90,000 | Fictional, aftertax |
| Five-year PV factor | 3.993 | Supplied assumption |
| Faster billing cycles | 30% | Publisher-reported; not DSO |

**Exhibit: Receivables data (fictional)** (DSO is days sales outstanding: average days to collect an invoice.)

| Metric | Value | Note |
| --- | --- | --- |
| Annual revenue | $24m | Across the group |
| Current DSO | 60 days | Group average |
| DSO after the pilot entity’s migration | 52 days | One entity, three months |

**Worked math**

- Annual net benefit = $240,000 − $90,000 = $150,000.
- Simple payback = $500,000 ÷ $150,000 ≈ 3.33 years; this ignores discounting.
- NPV = $150,000 × 3.993 − $500,000 = $98,950.
- Cash released if the group matches the pilot: $24m ÷ 365 × 8 days ≈ $526,000, one time.
- That one-time cash roughly covers the $500,000 investment, but it rests on one entity’s three-month result.

**Model answer:** Annual net benefit is $150,000, simple payback is 3.33 years and NPV is $98,950. If the pilot’s DSO improvement holds across the group, faster collections would also release about $526,000 of cash once, almost covering the upfront cost.

**Recommendation:** Proceed with a staged pilot if the fictional benefits can be validated; gate each entity rollout on reconciliations and control readiness.
