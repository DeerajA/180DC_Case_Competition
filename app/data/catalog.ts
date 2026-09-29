import type {AcademyCase} from './case-model';
import {newCases} from './new-cases';
export const migratedCases:AcademyCase[]=[
  {
    "id": "pantry",
    "slug": "pantry-capacity",
    "title": "Can the pantry close its capacity gap?",
    "client": "A regional food pantry",
    "track": "Social impact core",
    "sector": "Food & health",
    "caseType": "Operations",
    "difficulty": "Beginner",
    "minutes": 25,
    "brief": "A regional food pantry in a fast-growing county turned away about 100 households a week last quarter. The board has approved a modest budget increase and wants a plan it can start next quarter.",
    "objective": "Serve 25% more households without increasing annual operating cost by more than $45,000.",
    "facts": [
      "Current capacity is 400 households per week; demand is 500.",
      "The pantry opens 4 days per week for 5 hours per day.",
      "One service station processes 5 households per hour. Four stations are staffed, but intake and packing create delays."
    ],
    "question": "Which option meets the target most efficiently? What would you test before rollout?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Serve 25% more households without increasing annual operating cost by more than $45,000."
      },
      {
        "topics": [
          "capacity",
          "weekly",
          "demand",
          "households",
          "turned",
          "gap",
          "serve"
        ],
        "answer": "Current capacity is 400 households per week; demand is about 500."
      },
      {
        "topics": [
          "hours",
          "days",
          "open",
          "schedule",
          "saturday",
          "weekend"
        ],
        "answer": "The pantry opens 4 days per week, 5 hours per day: 20 hours weekly."
      },
      {
        "topics": [
          "station",
          "stations",
          "throughput",
          "staff",
          "volunteers",
          "intake",
          "packing",
          "bottleneck"
        ],
        "answer": "Four staffed stations each process 5 households per hour (4 × 5 × 20 = 400 a week). Intake and on-the-spot packing are the slowest steps."
      },
      {
        "topics": [
          "budget",
          "cost",
          "costs",
          "money",
          "funding",
          "afford"
        ],
        "answer": "The maximum additional annual operating cost is $45,000."
      },
      {
        "topics": [
          "clients",
          "internet",
          "phone",
          "access",
          "transport",
          "digital"
        ],
        "answer": "About a third of clients have no reliable internet access; most arrive by bus or on foot."
      },
      {
        "topics": [
          "timeline",
          "when",
          "start",
          "deadline"
        ],
        "answer": "The board wants the change in place next quarter."
      }
    ],
    "exhibits": [
      {
        "title": "Operating options (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Option",
            "Weekly added capacity",
            "Annual cost"
          ],
          [
            "Add one staffed station",
            "100 households",
            "$52,000"
          ],
          [
            "Appointment scheduling + prepacked boxes",
            "120 households",
            "$28,000"
          ],
          [
            "Add Saturday opening",
            "80 households",
            "$40,000"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Translate target to weekly capacity: 400 × 1.25 = 500.",
        "Map bottlenecks across intake, packing, and pickup.",
        "Compare capacity, cost, equity, and execution risk."
      ],
      "math": [
        "Target gap: 500 − 400 = 100 households/week.",
        "Scheduling and prepacking reach 520/week, costing $24,000 less than a new station.",
        "Pilot two pickup windows for four weeks; track throughput, wait time, missed appointments, and client satisfaction."
      ],
      "modelAnswer": "A 25% increase means 100 more households weekly. Scheduling and prepacking add 120 at $28,000 annually, meeting both constraints. Validate staff time, client accessibility, food choice, and no-show rates in a pilot.",
      "recommendation": "Pilot appointment scheduling with a walk-in allocation and prepacked boxes, then scale if access and service quality hold.",
      "risks": [
        "Digital scheduling could exclude clients without reliable internet.",
        "Prepacking can reduce client choice and create food waste."
      ],
      "impactLens": "Count distinct households served each week, not visits. Watch whether scheduling pushes out clients without phones or internet, and whether prepacked boxes increase waste or reduce culturally appropriate food choices.",
      "brainstorm": "Beyond the three options in the exhibit, what else could raise weekly capacity, and what would each cost clients in choice or access?"
    },
    "rubricNotes": [
      "Picks an option without converting 25% into 100 households or checking the $45,000 cap.",
      "Finds the 100-household gap but compares options on only capacity or cost, or misses that Saturday opening falls short.",
      "Shows scheduling plus prepacking is the only option meeting both constraints (+120 households for $28,000) and recommends it.",
      "Level 3, plus a pilot with a walk-in allowance for clients without internet and a success metric such as wait time or households served."
    ],
    "furtherReading": [
      {
        "title": "Learn: Operations primer",
        "url": "/academy/learn/operations"
      }
    ]
  },
  {
    "id": "arts",
    "slug": "arts",
    "title": "Can a ticket increase sustain the museum?",
    "client": "A community arts museum",
    "track": "Social impact core",
    "sector": "Arts & culture",
    "caseType": "Profitability",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A community arts museum ended last year $90,000 short and covered the gap from reserves it cannot draw on again. Half its visitors enter free or discounted through community access programs. The finance committee has proposed raising general admission from $10 to $14.",
    "objective": "Close a $90,000 annual operating gap while protecting access for low-income visitors.",
    "facts": [
      "Annual attendance is 30,000. General admission is $10; half of visitors pay the full rate.",
      "Variable visitor cost is $2. Fixed program and facility costs are $435,000.",
      "Grants and donations total $210,000; all other earned income totals $45,000."
    ],
    "question": "Does the ticket increase close the gap by itself, and what happens if full-price attendance falls?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Close a $90,000 annual operating gap while protecting access for low-income visitors."
      },
      {
        "topics": [
          "visitors",
          "attendance",
          "annual",
          "people",
          "many"
        ],
        "answer": "Annual attendance is 30,000. Half pay the full $10 rate; half enter free or discounted."
      },
      {
        "topics": [
          "cost",
          "costs",
          "variable",
          "fixed",
          "expenses"
        ],
        "answer": "Each visitor costs about $2 in variable cost. Fixed program and facility costs are $435,000."
      },
      {
        "topics": [
          "grants",
          "donations",
          "income",
          "revenue",
          "funding",
          "earned",
          "shop"
        ],
        "answer": "Grants and donations total $210,000; other earned income such as the shop and rentals totals $45,000."
      },
      {
        "topics": [
          "gap",
          "deficit",
          "shortfall",
          "reserves"
        ],
        "answer": "The gap is $90,000 a year. Reserves covered it last year and cannot cover it again."
      },
      {
        "topics": [
          "elasticity",
          "sensitive",
          "drop",
          "demand",
          "competitors",
          "comparable"
        ],
        "answer": "We have not tested price sensitivity. Exhibit 2 shows the attendance scenarios the committee wants you to consider."
      },
      {
        "topics": [
          "marketing",
          "promotion",
          "advertise"
        ],
        "answer": "Promoting the new price would cost about $8,000 a year."
      }
    ],
    "exhibits": [
      {
        "title": "Financial snapshot (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Current",
            "Proposed"
          ],
          [
            "Full-price admissions",
            "15,000",
            "15,000"
          ],
          [
            "Ticket price",
            "$10",
            "$14"
          ],
          [
            "Discount/free visitors",
            "15,000",
            "15,000"
          ],
          [
            "Annual incremental marketing cost",
            "$0",
            "$8,000"
          ]
        ]
      },
      {
        "units": "Fictional planning scenarios. Free and discounted visitors are unchanged.",
        "title": "Full-price attendance scenarios at $14",
        "rows": [
          [
            "Full-price visitor change",
            "Full-price visitors",
            "Ticket revenue",
            "Variable cost saved"
          ],
          [
            "No change",
            "15,000",
            "$210,000",
            "$0"
          ],
          [
            "−10%",
            "13,500",
            "$189,000",
            "$3,000"
          ],
          [
            "−20%",
            "12,000",
            "$168,000",
            "$6,000"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Reconcile baseline revenue, cost, and the stated gap.",
        "Split price × volume from fixed and variable costs.",
        "Assess attendance elasticity and mission access."
      ],
      "math": [
        "Baseline check: income $150,000 + $210,000 + $45,000 = $405,000; costs 30,000 × $2 + $435,000 = $495,000; gap = $90,000.",
        "No change: 15,000 × $4 = $60,000 − $8,000 marketing = $52,000 net; $38,000 still open.",
        "−10%: $189,000 − $150,000 + $3,000 − $8,000 = $34,000 net; $56,000 still open.",
        "−20%: $168,000 − $150,000 + $6,000 − $8,000 = $16,000 net; $74,000 still open.",
        "Even with no attendance loss, the increase closes only 58% of the gap ($52,000 ÷ $90,000)."
      ],
      "modelAnswer": "No. At best the $4 increase nets $52,000 and leaves $38,000 open. A 10% drop in full-price visitors cuts the net gain to $34,000, and a 20% drop to $16,000. Pricing can be part of the answer, but not the whole answer.",
      "recommendation": "Do not rely on admission pricing alone. Pilot the full-price increase and secure at least $38,000 through a complementary funding stream.",
      "risks": [
        "The plan assumes full-price attendance holds steady; test demand before rollout.",
        "Price increases could lower attendance."
      ],
      "impactLens": "Keep free and discounted entry untouched and track visits by low-income residents separately. A higher general price can also deter first-time visitors who earn just above the discount threshold.",
      "brainstorm": "What other revenue or cost levers could close the remaining $38,000 without making the museum harder to reach for low-income visitors?"
    },
    "rubricNotes": [
      "Says the price rise works because $4 × 15,000 = $60,000, ignoring marketing and the remaining gap.",
      "Nets out marketing ($52,000) but does not test the attendance scenarios or the effect on access.",
      "Shows the gap stays open in every scenario ($38,000–$74,000) and recommends pairing a price test with another funding source.",
      "Level 3, plus a way to protect discounted access, a second source sized to the remaining gap, and a rule to stop the price test if full-price attendance falls more than about 10%."
    ],
    "furtherReading": [
      {
        "title": "Learn: Profitability primer",
        "url": "/academy/learn/profitability"
      }
    ]
  },
  {
    "id": "youth",
    "slug": "youth",
    "title": "Where should the youth program grow?",
    "client": "An after-school STEM nonprofit",
    "track": "Social impact core",
    "sector": "Education & youth",
    "caseType": "Market entry & growth",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "An after-school STEM nonprofit has run a waitlisted program in one county for four years. A regional funder will back a one-year pilot in one new county, and the board must choose between North and South County.",
    "objective": "Select one of two counties for a one-year pilot serving at least 150 students.",
    "facts": [
      "Program quality requires a local school partner and two instructors.",
      "Annual pilot budget cannot exceed $180,000.",
      "Figures below are fictional planning assumptions; verify real demand locally."
    ],
    "question": "Which county should launch first, and what would have to be true for you to change your answer?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Select one of two counties for a one-year pilot serving at least 150 students."
      },
      {
        "topics": [
          "students",
          "demand",
          "potential",
          "eligible",
          "many",
          "population"
        ],
        "answer": "North has about 800 potential students; South about 500."
      },
      {
        "topics": [
          "enrollment",
          "conversion",
          "rate",
          "signup",
          "interest"
        ],
        "answer": "Expected enrollment is 25% in North and 36% in South, based on interest surveys."
      },
      {
        "topics": [
          "cost",
          "costs",
          "budget",
          "cap",
          "money"
        ],
        "answer": "North would cost $170,000 and South $145,000. The cap is $180,000."
      },
      {
        "topics": [
          "partner",
          "partners",
          "school",
          "mou",
          "agreement",
          "district"
        ],
        "answer": "North has a signed MOU with a middle school. South’s district has given verbal interest only."
      },
      {
        "topics": [
          "transport",
          "bus",
          "buses",
          "travel",
          "walk"
        ],
        "answer": "North’s host school needs an after-school bus costing $8,000 a year. South’s site is within walking distance for most students."
      },
      {
        "topics": [
          "retention",
          "attendance",
          "dropout",
          "stay",
          "spring"
        ],
        "answer": "Similar sites keep 70–80% of students through spring. Exhibit 2 has the site estimates."
      },
      {
        "topics": [
          "instructors",
          "staff",
          "staffing",
          "hire"
        ],
        "answer": "Each pilot needs two instructors; both are included in the costs."
      }
    ],
    "exhibits": [
      {
        "title": "County comparison (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Factor",
            "North County",
            "South County"
          ],
          [
            "Potential students",
            "800",
            "500"
          ],
          [
            "Expected enrollment rate",
            "25%",
            "36%"
          ],
          [
            "Annual pilot cost",
            "$170,000",
            "$145,000"
          ],
          [
            "School partner",
            "Signed MOU",
            "Verbal interest"
          ]
        ]
      },
      {
        "units": "Costs are annual. Retention is the share of enrolled students still attending in spring.",
        "title": "Delivery readiness (fictional planning estimates)",
        "rows": [
          [
            "Factor",
            "North County",
            "South County"
          ],
          [
            "School partner",
            "Signed MOU",
            "Verbal interest"
          ],
          [
            "After-school transport",
            "Needed: $8,000/year",
            "Not needed"
          ],
          [
            "Expected spring retention",
            "70%",
            "80%"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Demand and reach: eligible population × realistic conversion.",
        "Feasibility: partners, staffing, transport, and schedule.",
        "Economics and impact: cost per participant and outcomes."
      ],
      "math": [
        "Enrollment: North 800 × 25% = 200; South 500 × 36% = 180. Both clear the 150-student floor.",
        "Full cost: North $170,000 + $8,000 transport = $178,000 (under the $180,000 cap); South $145,000.",
        "Still attending in spring: North 200 × 70% = 140; South 180 × 80% = 144.",
        "Cost per retained student: North $178,000 ÷ 140 ≈ $1,271; South $145,000 ÷ 144 ≈ $1,007.",
        "Budget headroom: North $2,000; South $35,000."
      ],
      "modelAnswer": "South keeps slightly more students through spring (144 vs 140) at about $1,007 per retained student versus $1,271, with $35,000 of budget headroom. North’s advantage is its signed MOU. The choice turns on partner risk: South is the better program if its district signs, and North is the safer launch if it will not.",
      "recommendation": "Pursue South County with a firm deadline (for example, eight weeks) to turn verbal interest into a signed MOU. If the district does not sign, launch in North, where the agreement is already in place.",
      "risks": [
        "South’s verbal interest may not become a signed agreement in time.",
        "Survey-based enrollment rates may overstate actual sign-ups in both counties.",
        "North has only $2,000 of budget headroom for any cost overrun."
      ],
      "impactLens": "Judge the counties on students who keep attending, not sign-ups. Check whether either county’s eligible students include groups the current program underserves, such as girls or students without home internet.",
      "brainstorm": "What could you do to reduce South’s partner risk or North’s transport cost before the launch decision?"
    },
    "rubricNotes": [
      "Picks North because it has more potential students, without checking cost or retention.",
      "Calculates enrollment and cost per enrolled student but ignores transport or retention.",
      "Includes the $8,000 transport cost and spring retention, compares cost per retained student, and weighs that against partner certainty.",
      "Level 3, plus a clear decision rule (an MOU deadline with North as the fallback) and a metric such as spring retention."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market entry & growth primer",
        "url": "/academy/learn/market-entry"
      }
    ]
  },
  {
    "id": "clinic",
    "slug": "clinic",
    "title": "How should the mobile clinic price partner visits?",
    "client": "A mobile preventive-care nonprofit",
    "track": "Social impact core",
    "sector": "Food & health",
    "caseType": "Pricing",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A mobile preventive-care nonprofit parks a clinic van at partner employers and treats their workers for free. Partners pay a fee per visit. The current contracts expire this year, and the director must set a new fee.",
    "objective": "Set a partner fee that covers incremental costs while retaining access for patients.",
    "facts": [
      "The clinic serves patients free of charge; partner employers fund visits.",
      "A visit costs $38 in variable supplies and staffing. Annual fixed mobile-unit cost is $120,000.",
      "Partner demand is estimated at 6,000 visits per year at $65, or 5,000 visits at $75."
    ],
    "question": "Which price scenario better supports the mission and finances?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Set a partner fee that covers incremental costs while retaining access for patients."
      },
      {
        "topics": [
          "fee",
          "price",
          "charge",
          "pay",
          "partners",
          "employers"
        ],
        "answer": "Partners would buy about 6,000 visits a year at $65, or 5,000 at $75, based on partner surveys."
      },
      {
        "topics": [
          "patients",
          "free",
          "cost",
          "charge",
          "who"
        ],
        "answer": "Patients pay nothing; partner employers fund the visits."
      },
      {
        "topics": [
          "cost",
          "costs",
          "variable",
          "supplies",
          "staff",
          "staffing",
          "fixed",
          "van"
        ],
        "answer": "Each visit costs $38 in supplies and staffing. The van’s fixed cost is $120,000 a year."
      },
      {
        "topics": [
          "surplus",
          "reserve",
          "replacement",
          "policy",
          "board"
        ],
        "answer": "Board policy requires a $50,000 annual surplus to fund van replacement."
      },
      {
        "topics": [
          "grant",
          "foundation",
          "funding",
          "subsidy"
        ],
        "answer": "A foundation has offered $10 per visit above 5,000, capped at $10,000, in a draft letter."
      },
      {
        "topics": [
          "uninsured",
          "doctor",
          "access",
          "reach",
          "primary",
          "care"
        ],
        "answer": "About 60% of visits last year were for patients with no regular doctor."
      }
    ],
    "exhibits": [
      {
        "title": "Price scenarios (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Scenario",
            "Visits",
            "Fee / visit"
          ],
          [
            "A",
            "6,000",
            "$65"
          ],
          [
            "B",
            "5,000",
            "$75"
          ]
        ]
      },
      {
        "units": "Annual figures unless stated.",
        "title": "Funding constraints and reach (fictional)",
        "rows": [
          [
            "Constraint",
            "Value",
            "Source"
          ],
          [
            "Minimum annual surplus",
            "$50,000",
            "Board policy (van replacement)"
          ],
          [
            "Visits by patients with no regular doctor",
            "60%",
            "Last year’s intake data"
          ],
          [
            "Foundation grant for visits above 5,000",
            "$10/visit, capped at $10,000",
            "Draft grant letter"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Calculate contribution per visit and annual surplus.",
        "Test partner willingness to pay and volume sensitivity.",
        "Weight financial sustainability against patients served."
      ],
      "math": [
        "Contribution per visit: A $65 − $38 = $27; B $75 − $38 = $37.",
        "Surplus: A $27 × 6,000 − $120,000 = $42,000; B $37 × 5,000 − $120,000 = $65,000.",
        "On fees alone, only B meets the $50,000 surplus policy.",
        "With the grant, A adds 1,000 × $10 = $10,000, reaching $52,000 and clearing the policy.",
        "A delivers 1,000 more visits; at 60%, about 600 more are for patients with no regular doctor."
      ],
      "modelAnswer": "On fees alone, B earns $65,000 and A $42,000, so only B meets the $50,000 policy. If the foundation grant is confirmed, A reaches $52,000 and adds 1,000 visits, about 600 of them for patients with no regular doctor. Recommend A if the grant is committed and B otherwise.",
      "recommendation": "Offer partners the $65 fee on condition that the grant for extra visits is signed. If it is not committed before contracts go out, set the fee at $75.",
      "risks": [
        "Partner demand estimates are uncertain.",
        "The grant is a draft offer, and its $10,000 cap means it will not grow with volume.",
        "Employer-funded care misses people who do not work for partners."
      ],
      "impactLens": "Treat visits by patients with no regular doctor as the outcome that matters. Employer-funded visits skip people who are not employed by partners, so track who is still unreached.",
      "brainstorm": "How could the clinic serve more patients without regular care while still meeting the surplus policy, beyond choosing a fee?"
    },
    "rubricNotes": [
      "Picks the fee with more revenue or more visits without computing surplus.",
      "Calculates both surpluses correctly but does not test them against the $50,000 policy or the grant.",
      "Shows B meets the policy on fees, A meets it only with the grant, and makes the choice conditional on the grant.",
      "Level 3, plus translates extra visits into patients without regular care and sets a decision deadline tied to the grant letter."
    ],
    "furtherReading": [
      {
        "title": "Learn: Pricing primer",
        "url": "/academy/learn/pricing"
      }
    ]
  },
  {
    "id": "literacy",
    "slug": "literacy",
    "title": "Can partners scale literacy without diluting outcomes?",
    "client": "A literacy nonprofit with strong local outcomes",
    "track": "Social impact core",
    "sector": "Education & youth",
    "caseType": "Market entry & growth",
    "difficulty": "Advanced",
    "minutes": 45,
    "brief": "A literacy nonprofit tutors 600 early readers one-on-one and has strong reading-gain results. A state grant would fund growth to 1,200 children within two years, but the board will not double headquarters staff. A partner-training model, where schools deliver the program with coaching, has been piloted at two sites.",
    "objective": "Double children served from 600 to 1,200 in two years without doubling headquarters staff.",
    "facts": [
      "Direct delivery costs $400 per child.",
      "A partner-training model costs $90 per child in central support and $250 per child for partner delivery.",
      "Partner model pilots achieved 75% of the direct program’s learning gain."
    ],
    "question": "Should the organization switch entirely to partners?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Double children served from 600 to 1,200 in two years without doubling headquarters staff."
      },
      {
        "topics": [
          "cost",
          "costs",
          "direct",
          "delivery",
          "child",
          "per"
        ],
        "answer": "Direct delivery costs $400 per child."
      },
      {
        "topics": [
          "partner",
          "partners",
          "training",
          "model",
          "schools",
          "delivery",
          "cost"
        ],
        "answer": "Partner delivery costs $90 per child in central support plus $250 in partner delivery: $340 in total."
      },
      {
        "topics": [
          "outcomes",
          "learning",
          "gain",
          "results",
          "effectiveness",
          "reading"
        ],
        "answer": "Partner pilots achieved 75% of the direct program’s reading gain."
      },
      {
        "topics": [
          "staff",
          "headquarters",
          "hq",
          "hiring",
          "coaches"
        ],
        "answer": "Headquarters cannot double. Coaching for partner sites is covered by the $90 central support cost."
      },
      {
        "topics": [
          "subgroup",
          "subgroups",
          "equity",
          "english",
          "learners"
        ],
        "answer": "Subgroup results were not collected in the pilot."
      },
      {
        "topics": [
          "pilot",
          "sites",
          "sample",
          "size"
        ],
        "answer": "Two partner sites with about 80 children in total."
      },
      {
        "topics": [
          "funding",
          "grant",
          "budget",
          "cap"
        ],
        "answer": "The grant pays per child served; it does not set a cost cap."
      }
    ],
    "exhibits": [
      {
        "title": "Scale alternatives (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Model",
            "Cost / child",
            "Relative learning gain"
          ],
          [
            "Direct delivery",
            "$400",
            "100%"
          ],
          [
            "Partner training",
            "$340",
            "75%"
          ]
        ]
      },
      {
        "title": "Decision context and evidence gaps",
        "units": "Qualitative evidence / supplied planning assumptions",
        "rows": [
          [
            "Evidence",
            "Direct",
            "Partner"
          ],
          [
            "Relative measured gain",
            "100%",
            "75%"
          ],
          [
            "Headquarters staffing constraint",
            "Cannot double",
            "Must validate support workload"
          ],
          [
            "Subgroup outcomes",
            "Not supplied",
            "Not supplied"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Define growth in outcomes, not merely enrollment.",
        "Compare unit economics and outcome-adjusted economics.",
        "Assess partner quality assurance and funding model."
      ],
      "math": [
        "Partner model saves $60 per child, or $72,000 across 1,200 children.",
        "Outcome-adjusted cost: $340 ÷ 0.75 ≈ $453 per full-gain equivalent, above direct delivery at $400.",
        "Break-even quality: partners need 85% of the direct gain to match ($340 ÷ $400).",
        "Mixed model example: 600 direct + 600 partner costs $444,000 for 1,050 full-gain equivalents, about $423 each.",
        "Run a staged partner pilot with coaching and a learning-gain threshold."
      ],
      "modelAnswer": "No immediate full switch. Partner delivery costs 15% less per child but currently delivers 25% less learning gain. Cost per full-gain equivalent: direct $400; partner $340 ÷ .75 ≈ $453. Improve quality first.",
      "recommendation": "Scale a mixed model while improving partner instruction; expand partner seats only when outcome-adjusted costs improve.",
      "risks": [
        "Partners vary in instructional quality.",
        "The relative learning-gain measure may hide differences among student groups."
      ],
      "impactLens": "The outcome is reading gain per child, not children enrolled. Before scaling, check whether the 25% gap is concentrated among the children who most need help, such as English learners.",
      "brainstorm": "What could raise the partner model’s learning gain toward 85% of the direct program?"
    },
    "rubricNotes": [
      "Recommends partners because they are cheaper per child.",
      "Notes the lower learning gain but does not combine cost and gain into one measure.",
      "Computes outcome-adjusted cost ($453 vs $400), rejects a full switch, and proposes a mixed or staged model.",
      "Level 3, plus the 85% break-even gain, a quality gate for adding partner sites, and a plan to check subgroup outcomes."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      },
      {
        "title": "Acumen: Lean Data approach to impact measurement",
        "url": "https://acumen.org/lean-data/"
      }
    ]
  },
  {
    "id": "merger",
    "slug": "merger",
    "title": "Should two housing nonprofits combine back offices?",
    "client": "Two neighborhood housing nonprofits",
    "track": "Social impact core",
    "sector": "Housing & community",
    "caseType": "Partnerships & M&A",
    "difficulty": "Advanced",
    "minutes": 45,
    "brief": "Two neighborhood housing nonprofits with overlapping service areas each run their own finance, HR and IT. Their boards are exploring a merger to cut administrative costs, but residents and funders know them as separate organizations.",
    "objective": "Determine whether a merger produces sustainable savings without weakening community trust.",
    "facts": [
      "Combined annual administration costs are $1.2 million.",
      "A merger could eliminate 15% of overlapping administration costs.",
      "One-time integration cost is $300,000; annual new governance and technology costs are $35,000."
    ],
    "question": "What is the simple payback period, and would you recommend merging?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Determine whether a merger produces sustainable savings without weakening community trust."
      },
      {
        "topics": [
          "admin",
          "administration",
          "costs",
          "overhead",
          "back",
          "office"
        ],
        "answer": "Combined annual administration costs are $1.2 million."
      },
      {
        "topics": [
          "savings",
          "synergy",
          "synergies",
          "overlap",
          "eliminate"
        ],
        "answer": "A consultant estimates 15% of overlapping administration costs could be eliminated."
      },
      {
        "topics": [
          "integration",
          "upfront",
          "transition",
          "one",
          "time"
        ],
        "answer": "One-time integration costs are $300,000."
      },
      {
        "topics": [
          "governance",
          "technology",
          "systems",
          "new",
          "recurring"
        ],
        "answer": "New governance and technology costs would be $35,000 a year."
      },
      {
        "topics": [
          "community",
          "residents",
          "trust",
          "clients",
          "consultation"
        ],
        "answer": "No resident consultation has happened yet."
      },
      {
        "topics": [
          "grants",
          "restricted",
          "funders",
          "donors",
          "permissions"
        ],
        "answer": "Several grants restrict funds to one organization’s programs; permissions are not confirmed."
      },
      {
        "topics": [
          "shared",
          "services",
          "alternative",
          "partnership"
        ],
        "answer": "A shared-services agreement has not been costed."
      },
      {
        "topics": [
          "staff",
          "layoffs",
          "jobs",
          "roles"
        ],
        "answer": "Most savings would come from three or four overlapping administrative roles."
      }
    ],
    "exhibits": [
      {
        "title": "Merger economics (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Item",
            "Calculation",
            "Value"
          ],
          [
            "Gross annual savings",
            "15% × $1.2m",
            "$180,000"
          ],
          [
            "New annual costs",
            "Governance + systems",
            "$35,000"
          ],
          [
            "One-time integration",
            "Transition",
            "$300,000"
          ]
        ]
      },
      {
        "title": "Decision context and evidence gaps",
        "units": "Qualitative evidence / supplied planning assumptions",
        "rows": [
          [
            "Decision evidence",
            "Merger",
            "Shared services"
          ],
          [
            "Modeled savings",
            "Quantified in exhibit 1",
            "Not yet costed"
          ],
          [
            "Community consultation",
            "Not completed",
            "Not completed"
          ],
          [
            "Restricted grant permissions",
            "Not confirmed",
            "Not confirmed"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Strategic and mission fit.",
        "Net recurring synergies and one-time costs.",
        "Governance, restricted funding, people, and client impact."
      ],
      "math": [
        "Annual net savings: $180,000 − $35,000 = $145,000.",
        "Payback: $300,000 ÷ $145,000 ≈ 2.1 years.",
        "Sensitivity: if savings reach only 10% ($120,000), net savings are $85,000 and payback ≈ 3.5 years.",
        "Conduct legal and donor diligence and compare a shared-services partnership."
      ],
      "modelAnswer": "Net annual savings = $145,000; simple payback ≈ 2.07 years. Financial case is plausible, but a merger requires governance, culture, donor restrictions, service continuity, and community input diligence.",
      "recommendation": "Proceed to formal diligence, with shared services as a lower-risk alternative before committing to a merger.",
      "risks": [
        "Savings may require service cuts.",
        "Restricted grants and board commitments may limit integration."
      ],
      "impactLens": "Protect front-line housing services and resident relationships. Measure service continuity, such as households housed and caseload per worker, through the transition, not just administrative savings.",
      "brainstorm": "What alternatives to a full merger could capture part of the savings with less risk to community trust?"
    },
    "rubricNotes": [
      "Recommends merging because savings are $180,000, ignoring new and one-time costs.",
      "Computes net savings and payback correctly but treats the decision as purely financial.",
      "Gets $145,000 net savings and about 2.1-year payback, then makes the recommendation conditional on grants, governance and community input.",
      "Level 3, plus a savings sensitivity, a costed shared-services comparison, and service-continuity metrics for the transition."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      }
    ]
  },
  {
    "id": "transit",
    "slug": "transit",
    "title": "Which transit pilot reaches shift workers?",
    "client": "A city mobility office",
    "track": "Social impact core",
    "sector": "Public sector & transit",
    "caseType": "Operations",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A mid-sized city’s buses stop running before many late shifts end at hospitals, warehouses and hotels. Workers without cars rely on expensive rides or long walks home. The mobility office has $500,000 for a one-year pilot and two proposals.",
    "objective": "Improve access to jobs for shift workers with a $500,000 one-year pilot.",
    "facts": [
      "Existing buses stop before many late shifts end.",
      "The city is evaluating a shuttle and a ride voucher program.",
      "The pilot target is at least 20,000 completed rides per year."
    ],
    "question": "Which program meets the target, and what else should be measured?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Improve access to jobs for shift workers with a $500,000 one-year pilot."
      },
      {
        "topics": [
          "budget",
          "cost",
          "money",
          "funding"
        ],
        "answer": "The pilot budget is $500,000 for one year."
      },
      {
        "topics": [
          "buses",
          "bus",
          "routes",
          "schedule",
          "service",
          "existing"
        ],
        "answer": "Existing routes stop by about 10pm; many shifts end between 11pm and 3am."
      },
      {
        "topics": [
          "shuttle",
          "night",
          "fixed"
        ],
        "answer": "The night shuttle costs $460,000 and is expected to deliver 24,000 rides on fixed routes."
      },
      {
        "topics": [
          "voucher",
          "vouchers",
          "rideshare",
          "taxi",
          "door"
        ],
        "answer": "Ride vouchers cost $400,000 and are expected to deliver 18,000 door-to-door rides."
      },
      {
        "topics": [
          "target",
          "goal",
          "rides",
          "minimum"
        ],
        "answer": "The pilot target is at least 20,000 completed rides a year."
      },
      {
        "topics": [
          "workers",
          "employers",
          "late",
          "shift",
          "who",
          "riders"
        ],
        "answer": "The target group is workers on shifts ending between 10pm and 4am. Exhibit 2 shows how many rides reach them."
      },
      {
        "topics": [
          "safety",
          "accessibility",
          "wheelchair",
          "lighting"
        ],
        "answer": "Stops need lighting, and both options must be wheelchair accessible."
      }
    ],
    "exhibits": [
      {
        "title": "Options (illustrative)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Option",
            "Budget",
            "Expected rides"
          ],
          [
            "Night shuttle",
            "$460,000",
            "24,000"
          ],
          [
            "Ride vouchers",
            "$400,000",
            "18,000"
          ]
        ]
      },
      {
        "units": "Late-shift workers are those on shifts ending 10pm–4am.",
        "title": "Who the rides reach (planning estimates)",
        "rows": [
          [
            "Metric",
            "Night shuttle",
            "Ride vouchers"
          ],
          [
            "Rides by late-shift workers",
            "18,000",
            "16,200"
          ],
          [
            "Share of all rides",
            "75%",
            "90%"
          ],
          [
            "Target workers living more than ½ mile from a stop",
            "30%",
            "0% (door to door)"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Clarify who is underserved and when.",
        "Compare reach, cost, reliability, and equity.",
        "Set baseline and outcomes beyond rides."
      ],
      "math": [
        "Cost per ride: shuttle $460,000 ÷ 24,000 ≈ $19.17; vouchers $400,000 ÷ 18,000 ≈ $22.22.",
        "Only the shuttle meets the 20,000-ride target.",
        "Cost per late-shift ride: shuttle $460,000 ÷ 18,000 ≈ $25.56; vouchers $400,000 ÷ 16,200 ≈ $24.69.",
        "The shuttle still delivers 1,800 more late-shift rides (18,000 vs 16,200), but 30% of target workers live beyond its stops.",
        "Budget left over with the shuttle: $500,000 − $460,000 = $40,000."
      ],
      "modelAnswer": "The night shuttle is the only option that meets the 20,000-ride target (24,000 rides at about $19.17 each), and it delivers more late-shift rides (18,000 vs 16,200). Vouchers are slightly cheaper per late-shift ride ($24.69 vs $25.56) and reach workers far from routes. Recommend the shuttle and use the $40,000 left in the budget for targeted vouchers.",
      "recommendation": "Pilot the night shuttle on the densest job corridors and use the remaining $40,000 for vouchers for late-shift workers who live more than ½ mile from a stop. Measure late-shift rides, not just total rides.",
      "risks": [
        "Low route density could depress ridership.",
        "Some shift workers live beyond fixed routes."
      ],
      "impactLens": "The outcome is workers getting to and from late shifts reliably, and keeping those jobs. Track rides by late-shift workers, job retention at partner employers, and gaps for people living beyond the routes.",
      "brainstorm": "How could the city reach the 30% of late-shift workers who live far from shuttle stops without breaking the budget?"
    },
    "rubricNotes": [
      "Picks vouchers because they cost less in total.",
      "Computes cost per ride and picks the shuttle, but ignores who the rides reach.",
      "Shows only the shuttle hits 20,000 rides, compares cost per late-shift ride, and names the far-from-route gap.",
      "Level 3, plus a use for the $40,000 headroom for uncovered workers and outcome metrics such as job retention."
    ],
    "furtherReading": [
      {
        "title": "Learn: Operations primer",
        "url": "/academy/learn/operations"
      }
    ]
  },
  {
    "id": "donors",
    "slug": "donors",
    "title": "How can the nonprofit replace an expiring grant?",
    "client": "A community mental-health nonprofit",
    "track": "Social impact core",
    "sector": "Food & health",
    "caseType": "Funding & sustainability",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A community mental-health nonprofit relies on a $120,000 foundation grant that ends next year and pays for two counselors. The executive director wants a replacement plan that does not swap one funding dependency for another.",
    "objective": "Replace a $120,000 grant expiring next year without creating a concentration risk.",
    "facts": [
      "The nonprofit has 2,000 prior donors.",
      "A reactivation campaign can reach 800 lapsed donors with an estimated 12% response and $250 average gift.",
      "A new corporate partner may provide $70,000, but approval is uncertain."
    ],
    "question": "How much of the grant gap can these plans cover on paper?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Replace a $120,000 grant expiring next year without creating a concentration risk."
      },
      {
        "topics": [
          "grant",
          "expiring",
          "foundation",
          "ends",
          "counselors"
        ],
        "answer": "The $120,000 grant ends next year and funds two counselors."
      },
      {
        "topics": [
          "donors",
          "donor",
          "base",
          "prior",
          "lapsed"
        ],
        "answer": "There are 2,000 prior donors; 800 lapsed donors can be reached."
      },
      {
        "topics": [
          "response",
          "rate",
          "gift",
          "average",
          "campaign",
          "reactivation"
        ],
        "answer": "Expect about 12% of reached lapsed donors to respond, with a $250 average gift."
      },
      {
        "topics": [
          "recurring",
          "monthly",
          "upgrade"
        ],
        "answer": "About 200 recurring donors could each add $10 a month."
      },
      {
        "topics": [
          "corporate",
          "company",
          "sponsor",
          "partner"
        ],
        "answer": "A corporate partner may give $70,000, but approval is uncertain."
      },
      {
        "topics": [
          "costs",
          "cost",
          "expenses",
          "campaign"
        ],
        "answer": "The reactivation campaign costs $6,000; the recurring-upgrade campaign costs $2,000."
      },
      {
        "topics": [
          "probability",
          "likelihood",
          "confidence",
          "risk"
        ],
        "answer": "Exhibit 2 gives planning probabilities for each path."
      },
      {
        "topics": [
          "timing",
          "when",
          "deadline",
          "months"
        ],
        "answer": "The grant’s last payment arrives in 10 months."
      }
    ],
    "exhibits": [
      {
        "units": "Annual amounts before campaign costs.",
        "title": "Funding paths (fictional)",
        "rows": [
          [
            "Path",
            "Expected value",
            "Confidence"
          ],
          [
            "Donor reactivation",
            "800 × 12% × $250",
            "Medium"
          ],
          [
            "Corporate partnership",
            "$70,000",
            "Low"
          ],
          [
            "Recurring-gift upgrade",
            "200 donors × $10/month × 12",
            "Medium"
          ]
        ]
      },
      {
        "units": "Probabilities are the development team’s planning estimates.",
        "title": "Campaign costs and planning probabilities (fictional)",
        "rows": [
          [
            "Path",
            "Upfront cost",
            "Planning probability"
          ],
          [
            "Donor reactivation",
            "$6,000",
            "80%"
          ],
          [
            "Corporate partnership",
            "$0 (staff time)",
            "40%"
          ],
          [
            "Recurring-gift upgrade",
            "$2,000",
            "90%"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Quantify the funding gap and timing.",
        "Diversify recurring, institutional, and earned support.",
        "Risk-adjust uncertain commitments and protect service continuity."
      ],
      "math": [
        "Reactivation: 800 × 12% = 96 donors × $250 = $24,000.",
        "Recurring upgrade: 200 × $10 × 12 = $24,000.",
        "On paper: $24,000 + $70,000 + $24,000 = $118,000, minus $8,000 of campaign costs = $110,000; $10,000 short.",
        "Risk-weighted: $24,000 × 80% + $70,000 × 40% + $24,000 × 90% = $68,800, minus $8,000 = $60,800; about $59,200 short.",
        "Concentration: the corporate gift would be $70,000 ÷ $118,000 ≈ 59% of the new money."
      ],
      "modelAnswer": "On paper the three paths raise $118,000, or $110,000 after campaign costs, still $10,000 short. Weighted by likelihood they are worth about $60,800, leaving roughly $59,000 at risk. And the corporate gift would be 59% of the new money, recreating the concentration the nonprofit wants to avoid.",
      "recommendation": "Launch the reactivation and recurring-gift campaigns now. Pursue at least two more institutional prospects so that no single funder provides more than about a third of the replacement, and plan a contingency for the risk-weighted gap, such as a phased counselor schedule.",
      "risks": [
        "Campaign costs reduce net proceeds.",
        "A prospective partnership is not committed cash."
      ],
      "impactLens": "The outcome at stake is counseling capacity: two counselors and their caseloads. Plan so that clients do not face a gap in care if funding arrives late.",
      "brainstorm": "What other sources could fill the risk-weighted gap without depending on a single funder?"
    },
    "rubricNotes": [
      "Adds the three paths to $118,000 and says the gap is nearly closed.",
      "Notices the shortfall or the costs, but treats the corporate gift as certain.",
      "Nets out costs, risk-weights the paths (about $60,800), and flags the corporate gift as 59% of new funding.",
      "Level 3, plus a diversified plan with a concentration limit and a contingency that protects client services."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      }
    ]
  },
  {
    "id": "refill",
    "slug": "refill",
    "title": "Can refill retail pay for itself?",
    "client": "Loop Market, a fictional refill retailer",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Profitability",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "Loop Market, a fictional grocery retailer, sells 60,000 units a year of packaged household staples. Customers have asked for a refill station with reusable containers. The owner will launch only if the program improves annual operating profit.",
    "objective": "Choose whether to launch a reusable-container program that must earn a positive annual operating contribution.",
    "facts": [
      "Current packaged-product demand is 60,000 units per year at $8 per unit.",
      "The pilot would shift 20,000 of those units to refills; total unit demand stays unchanged.",
      "Refills sell at $7.20 and cost $3.80 per unit, including washing and handling. Packaged units cost $4.50 each.",
      "Pilot equipment costs $18,000 upfront and lasts three years with no residual value. Additional annual operating cost is $9,000. Ignore tax, financing, and changes in working capital."
    ],
    "question": "What happens to annual operating profit, and should the retailer launch?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Choose whether to launch a reusable-container program that must earn a positive annual operating contribution."
      },
      {
        "topics": [
          "demand",
          "units",
          "volume",
          "sales"
        ],
        "answer": "Packaged demand is 60,000 units a year at $8 per unit."
      },
      {
        "topics": [
          "shift",
          "switch",
          "cannibalize",
          "cannibalization",
          "existing",
          "customers"
        ],
        "answer": "In the base case, 20,000 units move from packaged to refill and total demand stays the same."
      },
      {
        "topics": [
          "price",
          "refill",
          "charge"
        ],
        "answer": "Refills would sell for $7.20."
      },
      {
        "topics": [
          "cost",
          "costs",
          "variable",
          "washing",
          "handling"
        ],
        "answer": "Refills cost $3.80 per unit including washing; packaged units cost $4.50."
      },
      {
        "topics": [
          "equipment",
          "capex",
          "investment",
          "upfront",
          "depreciation"
        ],
        "answer": "Equipment costs $18,000 upfront and lasts three years with no residual value."
      },
      {
        "topics": [
          "operating",
          "opex",
          "staff",
          "labor"
        ],
        "answer": "The program adds $9,000 a year in operating cost."
      },
      {
        "topics": [
          "new",
          "acquisition",
          "attract",
          "growth",
          "incremental"
        ],
        "answer": "Exhibit 2 includes a scenario where refills attract new customers."
      },
      {
        "topics": [
          "environment",
          "waste",
          "packaging",
          "containers",
          "reuse"
        ],
        "answer": "Each refill avoids one single-use container. Reuse rates are untested."
      }
    ],
    "exhibits": [
      {
        "title": "Product-level economics (fictional)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Packaged product",
            "Refill"
          ],
          [
            "Selling price / unit",
            "$8.00",
            "$7.20"
          ],
          [
            "Variable cost / unit",
            "$4.50",
            "$3.80"
          ],
          [
            "Annual units after pilot",
            "40,000",
            "20,000"
          ]
        ]
      },
      {
        "units": "Annual units. New-customer units are purchases the store would not otherwise make.",
        "title": "Pilot demand scenarios (fictional)",
        "rows": [
          [
            "Scenario",
            "Refill price",
            "Units shifted from packaged",
            "New-customer refill units"
          ],
          [
            "Base",
            "$7.20",
            "20,000",
            "0"
          ],
          [
            "New customers",
            "$7.20",
            "20,000",
            "6,000"
          ],
          [
            "Higher price",
            "$8.00",
            "16,000",
            "0"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Compare incremental economics against the existing model.",
        "Separate variable contribution, recurring costs, and capital spending.",
        "Evaluate customer willingness to pay and environmental outcomes."
      ],
      "math": [
        "Contribution per unit: packaged $8.00 − $4.50 = $3.50; refill $7.20 − $3.80 = $3.40.",
        "Base: shifting 20,000 units loses 20,000 × $0.10 = $2,000; fixed costs add $9,000 + $6,000 depreciation; profit falls $17,000.",
        "New customers: 6,000 × $3.40 = $20,400 − $2,000 − $15,000 = +$3,400.",
        "Break-even new refill units at $7.20: ($2,000 + $15,000) ÷ $3.40 = 5,000 a year.",
        "Higher price: refill contribution $4.20; 16,000 × ($4.20 − $3.50) = $11,200 − $15,000 = −$3,800.",
        "First-year cash in the base case: −$2,000 − $9,000 − $18,000 = −$29,000."
      ],
      "modelAnswer": "Moving existing buyers to refills loses money: contribution falls $2,000 and fixed costs add $15,000, so profit drops $17,000. The program pays only if it attracts new customers: about 5,000 new refill units a year breaks even, and 6,000 gives +$3,400. Raising the refill price to $8.00 still loses $3,800 if it pushes 4,000 buyers back to packaged goods.",
      "recommendation": "Do not launch on current assumptions. Run a low-cost test, such as a single refill shelf, to find out whether refills bring in at least 5,000 units a year from new customers before buying the $18,000 of equipment.",
      "risks": [
        "Customers may reject a refill price above the packaged alternative.",
        "Environmental benefits depend on container reuse rates and washing requirements."
      ],
      "impactLens": "The environmental benefit is containers avoided, and it counts only if customers reuse containers many times. Measure reuse rate alongside profit.",
      "brainstorm": "What could lower the refill station’s costs or bring in new customers?"
    },
    "rubricNotes": [
      "Compares prices only ($7.20 vs $8.00) and decides on that basis.",
      "Computes contribution per unit but misses depreciation or the $9,000 operating cost.",
      "Shows −$17,000 in the base case and identifies about 5,000 new-customer units as the condition for launch.",
      "Level 3, plus a cheap test with a go/no-go threshold and an environmental metric such as reuse rate."
    ],
    "furtherReading": [
      {
        "title": "Learn: Profitability primer",
        "url": "/academy/learn/profitability"
      }
    ]
  },
  {
    "id": "software",
    "slug": "software",
    "title": "Which subscription channel pays back sooner?",
    "client": "CivicDesk, a fictional software provider for nonprofits",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Market entry & growth",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "CivicDesk, a fictional company, sells case-management software to small nonprofits for $120 a month. It has budget for one acquisition channel next year: its own sales team, or a partner program run through nonprofit associations. Investors want each new customer to pay back its acquisition cost within 12 months.",
    "objective": "Select a twelve-month customer-acquisition channel while keeping modeled payback within twelve months.",
    "facts": [
      "A new organization pays $120 monthly; gross margin is 80%.",
      "The direct-sales channel costs $144,000 and is expected to sign 120 organizations.",
      "The partner channel costs $90,000 and is expected to sign 100 organizations. Partners also receive 15% of first-year revenue.",
      "Assume all customers start at the beginning of the year and remain for twelve months. Ignore existing customers, overhead, tax, and revenue growth."
    ],
    "question": "Which channel meets the modeled payback target and produces a better first-year contribution?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Select a twelve-month customer-acquisition channel while keeping modeled payback within twelve months."
      },
      {
        "topics": [
          "price",
          "pricing",
          "monthly",
          "subscription"
        ],
        "answer": "Customers pay $120 a month."
      },
      {
        "topics": [
          "margin",
          "gross",
          "cost"
        ],
        "answer": "Gross margin is 80%."
      },
      {
        "topics": [
          "direct",
          "sales",
          "team"
        ],
        "answer": "Direct sales costs $144,000 and should sign 120 organizations."
      },
      {
        "topics": [
          "partner",
          "partners",
          "associations",
          "commission",
          "channel"
        ],
        "answer": "The partner channel costs $90,000 and should sign 100 organizations; partners also get 15% of first-year revenue."
      },
      {
        "topics": [
          "payback",
          "target",
          "investors",
          "rule"
        ],
        "answer": "Investors require payback within 12 months."
      },
      {
        "topics": [
          "churn",
          "retention",
          "renewal",
          "renew"
        ],
        "answer": "Exhibit 2: 90% of direct customers and 75% of partner customers renew for year 2."
      },
      {
        "topics": [
          "timing",
          "start",
          "ramp"
        ],
        "answer": "Assume all customers start at the beginning of the year and stay for twelve months."
      }
    ],
    "exhibits": [
      {
        "title": "Channel comparison (fictional)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Direct sales",
            "Partner channel"
          ],
          [
            "Acquisition spend",
            "$144,000",
            "$90,000"
          ],
          [
            "New customers",
            "120",
            "100"
          ],
          [
            "Additional first-year commission",
            "0%",
            "15% of revenue"
          ]
        ]
      },
      {
        "units": "Share of first-year customers who renew for year 2. No partner commission in year 2.",
        "title": "Second-year renewal (from a small prior pilot)",
        "rows": [
          [
            "Metric",
            "Direct sales",
            "Partner channel"
          ],
          [
            "Year-2 renewal rate",
            "90%",
            "75%"
          ],
          [
            "Year-2 commission",
            "0%",
            "0%"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Translate revenue into monthly gross profit per customer.",
        "Include channel commissions without double-counting acquisition spend.",
        "Compare payback and cohort contribution, then test retention."
      ],
      "math": [
        "Monthly gross profit = $120 × 80% = $96.",
        "Direct: $144,000 ÷ 120 = $1,200 CAC; $1,200 ÷ $96 = 12.5 months.",
        "Partner: $90,000 ÷ 100 = $900 CAC; commission $18/month; net $78/month; payback ≈ 11.5 months.",
        "Year 1: direct 120 × $96 × 12 − $144,000 = −$5,760; partner 100 × $78 × 12 − $90,000 = $3,600.",
        "Year 2: direct 120 × 90% × $96 × 12 = $124,416; partner 100 × 75% × $96 × 12 = $86,400.",
        "Two-year total: direct $118,656; partner $90,000."
      ],
      "modelAnswer": "Partner payback is about 11.5 months, which meets the target; direct is 12.5 months and misses it. But direct customers renew more (90% vs 75%), so over two years direct contributes $118,656 against the partner channel’s $90,000. The 12-month rule favors partners; two-year value favors direct.",
      "recommendation": "Use the partner channel to meet the payback rule, and ask whether the direct team can cut acquisition cost by about $48 per customer (to $1,152). That would bring direct payback to 12 months and make it the better long-term channel.",
      "risks": [
        "Customers acquired gradually through the year produce less first-year contribution than this simplified cohort model.",
        "Channel partners could bring less engaged customers or negotiate higher commissions."
      ],
      "impactLens": "For small nonprofits, the value is staff time saved on case management. Partner-sourced customers who leave may never get that value, so track product use as well as renewals.",
      "brainstorm": "How could CivicDesk reduce direct-sales acquisition cost, or improve partner-channel retention?"
    },
    "rubricNotes": [
      "Picks direct because it signs more customers.",
      "Calculates acquisition cost but misses the partner commission in monthly contribution.",
      "Gets 12.5 vs about 11.5 months and first-year contribution, and notes the renewal difference.",
      "Level 3, plus the two-year comparison and a concrete lever (such as cutting direct CAC to $1,152) that reconciles the payback rule with long-term value."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market entry & growth primer",
        "url": "/academy/learn/market-entry"
      }
    ]
  },
  {
    "id": "solar",
    "slug": "solar",
    "title": "Should the community center invest in solar?",
    "client": "A fictional community center evaluating rooftop solar",
    "track": "Social impact core",
    "sector": "Housing & community",
    "caseType": "Funding & sustainability",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A community center that runs youth and senior programs pays about $30,000 a year for electricity. A state grant will cover $60,000 of a $180,000 rooftop solar system. The board approves capital projects only if they pay back within five years.",
    "objective": "Assess whether a solar investment meets a five-year simple payback threshold and produces positive ten-year value.",
    "facts": [
      "Installed cost is $180,000. A confirmed grant offsets $60,000 upfront.",
      "Electricity savings are expected to be $28,000 per year; maintenance is $4,000 per year.",
      "Assume constant annual cash flows for ten years, no residual value, and no taxes. Use an 8% discount rate and a provided ten-year annuity factor of 6.71.",
      "A downside case reduces electricity savings by 25%, leaving maintenance unchanged."
    ],
    "question": "Calculate payback and net present value in both cases. Would you proceed?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Assess whether a solar investment meets a five-year simple payback threshold and produces positive ten-year value."
      },
      {
        "topics": [
          "cost",
          "installed",
          "price",
          "capex",
          "system"
        ],
        "answer": "The system costs $180,000 installed."
      },
      {
        "topics": [
          "grant",
          "subsidy",
          "state"
        ],
        "answer": "A confirmed $60,000 grant, usable only if the center owns the system."
      },
      {
        "topics": [
          "savings",
          "electricity",
          "bill",
          "utility"
        ],
        "answer": "Expected electricity savings are $28,000 a year; the current bill is about $30,000."
      },
      {
        "topics": [
          "maintenance",
          "upkeep",
          "cost"
        ],
        "answer": "Maintenance is $4,000 a year."
      },
      {
        "topics": [
          "discount",
          "rate",
          "npv",
          "factor",
          "annuity"
        ],
        "answer": "Use 8% and a ten-year annuity factor of 6.71."
      },
      {
        "topics": [
          "payback",
          "threshold",
          "hurdle",
          "board"
        ],
        "answer": "The board requires simple payback within five years."
      },
      {
        "topics": [
          "downside",
          "risk",
          "generation"
        ],
        "answer": "The downside case has electricity savings 25% lower."
      },
      {
        "topics": [
          "ppa",
          "lease",
          "alternative",
          "developer",
          "third",
          "party"
        ],
        "answer": "A developer quoted a power purchase agreement: no upfront cost and about $6,000 a year in savings."
      },
      {
        "topics": [
          "roof",
          "condition",
          "repair",
          "age"
        ],
        "answer": "The roof is 12 years old and has not been inspected."
      }
    ],
    "exhibits": [
      {
        "title": "Base and downside cases (fictional)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Base",
            "Downside"
          ],
          [
            "Annual electricity savings",
            "$28,000",
            "$21,000"
          ],
          [
            "Annual maintenance",
            "$4,000",
            "$4,000"
          ],
          [
            "Net initial investment",
            "$120,000",
            "$120,000"
          ]
        ]
      },
      {
        "units": "Annual net savings after maintenance. Under a PPA the developer owns and maintains the system.",
        "title": "Alternative: power purchase agreement (fictional quote)",
        "rows": [
          [
            "Metric",
            "Own the system",
            "Power purchase agreement"
          ],
          [
            "Upfront cost to the center",
            "$120,000 (after grant)",
            "$0"
          ],
          [
            "Annual net savings, base",
            "$24,000",
            "$6,000"
          ],
          [
            "Annual net savings, downside",
            "$17,000",
            "$4,500"
          ],
          [
            "Uses the $60,000 grant",
            "Yes",
            "No"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Confirm net investment and eligible grant conditions.",
        "Evaluate simple payback and discounted lifetime cash flows.",
        "Test production, savings, roof condition, and maintenance risk."
      ],
      "math": [
        "Net investment = $180,000 − $60,000 = $120,000.",
        "Base: net savings $28,000 − $4,000 = $24,000; payback $120,000 ÷ $24,000 = 5 years; NPV $24,000 × 6.71 − $120,000 = $41,040.",
        "Downside: $21,000 − $4,000 = $17,000; payback ≈ 7.06 years; NPV $17,000 × 6.71 − $120,000 = −$5,930.",
        "PPA: NPV $6,000 × 6.71 = $40,260 in the base case and $4,500 × 6.71 = $30,195 in the downside, with no capital at risk."
      ],
      "modelAnswer": "Owning the system pays back in exactly 5 years with an NPV of $41,040 in the base case, but in the downside payback stretches to about 7 years and NPV turns negative (−$5,930). The PPA gives nearly the same base value ($40,260) with no upfront cost and stays positive in the downside ($30,195).",
      "recommendation": "Favor the PPA unless the center can validate generation and savings well enough to rule out the downside. If it chooses to own the system, require a roof inspection and a performance guarantee first.",
      "risks": [
        "Roof repairs or lower generation can materially reduce returns.",
        "A grant commitment may still include reimbursement timing and eligibility conditions."
      ],
      "impactLens": "Money saved on electricity funds youth and senior programs, so state the savings in program terms. Count the capital tied up too: it cannot go to programs if the system underperforms.",
      "brainstorm": "What other ways could the center cut energy costs or reduce the risk of the investment?"
    },
    "rubricNotes": [
      "Approves because the 5-year payback meets the threshold, ignoring the downside.",
      "Computes base and downside correctly but does not compare alternatives.",
      "Shows ownership fails in the downside and compares it with the PPA’s lower-risk value.",
      "Level 3, plus a roof inspection or performance guarantee as a condition and savings expressed in program terms."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      }
    ]
  },
  {
    "id": "banking",
    "slug": "banking",
    "title": "Can a neighborhood banking pilot break even?",
    "client": "A fictional credit union partnering with community organizations",
    "track": "Social impact core",
    "sector": "Financial inclusion",
    "caseType": "Market entry & growth",
    "difficulty": "Advanced",
    "minutes": 45,
    "brief": "A fictional credit union wants to open savings accounts for people in neighborhoods without a branch, working through community organizations that host sign-up and cash-access days. It will fund a pilot only if recurring operations at least break even.",
    "objective": "Evaluate a branchless savings-account pilot serving 2,000 new members while breaking even on annual operations.",
    "facts": [
      "The pilot expects 2,000 new members with average deposits of $1,500 each.",
      "Annual net interest contribution is 3% of average deposit balances, after interest paid and funding costs.",
      "Servicing costs are $18 per member annually. Partner operations cost $45,000 per year.",
      "One-time setup costs $60,000. Ignore tax and any fee revenue. Deposit principal is not revenue."
    ],
    "question": "Does the base case break even? How many members are required at the base deposit level?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Evaluate a branchless savings-account pilot serving 2,000 new members while breaking even on annual operations."
      },
      {
        "topics": [
          "members",
          "accounts",
          "customers",
          "signups"
        ],
        "answer": "The pilot expects 2,000 new members."
      },
      {
        "topics": [
          "deposits",
          "balance",
          "balances",
          "savings"
        ],
        "answer": "Average deposits are $1,500 per member."
      },
      {
        "topics": [
          "interest",
          "margin",
          "spread",
          "revenue",
          "income"
        ],
        "answer": "Net interest contribution is 3% of average balances, after interest paid and funding costs."
      },
      {
        "topics": [
          "servicing",
          "cost",
          "costs",
          "member"
        ],
        "answer": "Servicing costs $18 per member a year."
      },
      {
        "topics": [
          "partner",
          "partners",
          "organizations",
          "operations"
        ],
        "answer": "Partner operations cost $45,000 a year."
      },
      {
        "topics": [
          "setup",
          "upfront",
          "launch",
          "one",
          "time"
        ],
        "answer": "One-time setup costs $60,000."
      },
      {
        "topics": [
          "fees",
          "fee",
          "charges"
        ],
        "answer": "The pilot is fee-free; there is no fee revenue."
      },
      {
        "topics": [
          "downside",
          "risk"
        ],
        "answer": "The downside case has 1,500 members with $1,200 average deposits."
      }
    ],
    "exhibits": [
      {
        "title": "Pilot assumptions (fictional)",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Driver",
            "Base case",
            "Downside"
          ],
          [
            "New members",
            "2,000",
            "1,500"
          ],
          [
            "Average deposits",
            "$1,500",
            "$1,200"
          ],
          [
            "Annual net interest contribution rate",
            "3%",
            "3%"
          ]
        ]
      },
      {
        "title": "Operating costs (fictional)",
        "units": "Qualitative evidence / supplied planning assumptions",
        "rows": [
          [
            "Operating cost",
            "Annual recurring",
            "One-time"
          ],
          [
            "Member servicing",
            "$18/member",
            "$0"
          ],
          [
            "Partner operations",
            "$45,000",
            "$0"
          ],
          [
            "Setup",
            "$0",
            "$60,000"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Separate deposit balances from income.",
        "Calculate unit contribution and recurring break-even.",
        "Evaluate access, trust, regulatory requirements, and member behavior."
      ],
      "math": [
        "Average deposits = 2,000 × $1,500 = $3 million; annual net interest contribution = $90,000.",
        "Operating surplus = $90,000 − 2,000 × $18 − $45,000 = $9,000.",
        "Break-even members = $45,000 ÷ ($1,500 × 3% − $18) = 1,666.67, rounded to 1,667.",
        "Setup payback = $60,000 ÷ $9,000 ≈ 6.67 years, excluding time value of money.",
        "Downside contribution = 1,500 × $1,200 × 3% = $54,000; surplus = $54,000 − $27,000 − $45,000 = −$18,000."
      ],
      "modelAnswer": "Base net interest contribution is $90,000. Servicing costs $36,000 and partner operations $45,000, leaving $9,000 recurring annual surplus. Member contribution is $45−$18=$27, so annual operating break-even is 1,667 members, rounded up. Setup payback at base surplus is about 6.67 years.",
      "recommendation": "Run a staged pilot with deposit and retention checkpoints. The base case covers recurring costs, but upfront recovery is slow and the downside requires subsidy or redesign.",
      "risks": [
        "Low retained balances reduce income.",
        "Onboarding, compliance, and cash-access costs may exceed the assumptions."
      ],
      "impactLens": "The outcome is members who keep a savings balance and stop using costly alternatives such as check cashers. Track active accounts and balances after 12 months, not just sign-ups.",
      "brainstorm": "How could the credit union lower cost per member or raise balances without adding fees for low-income members?"
    },
    "rubricNotes": [
      "Treats the $3 million of deposits as revenue.",
      "Computes the $9,000 surplus but misses the break-even or the downside.",
      "Finds the $9,000 surplus, 1,667 break-even members and the −$18,000 downside.",
      "Level 3, plus staged checkpoints on members and balances and a view on whether a setup subsidy is justified by impact."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market entry & growth primer",
        "url": "/academy/learn/market-entry"
      }
    ]
  },
  {
    "id": "harborlight",
    "slug": "harborlight",
    "title": "Can a campus coffee shop support its costs?",
    "client": "HarborLight Coffee Co. (fictional)",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Market sizing",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "HarborLight Coffee Co., a fictional local roaster, has been offered a five-year lease on a 1,200-square-foot space next to a university campus. The owner wants to know whether the location can support itself before signing.",
    "objective": "Size the coffee-shop opportunity and test whether its projected contribution supports signing a lease.",
    "facts": [
      "Teaching assumptions: 30,000 people live, work, or study nearby; 15% buy coffee regularly; the proposed shop captures 8% of those buyers. Students and campus traffic are already included.",
      "Each captured customer makes 3 visits per week and spends $5.50 per visit. Assume 52 weeks at this demand level before testing academic seasonality.",
      "Annual rent is $28 per square foot for 1,200 square feet. Added exercise assumptions: COGS are 30% of sales; baseline labor is 28% of sales and other operating costs are 15%. These are case assumptions, not industry benchmarks.",
      "For the downside calculation, hold baseline labor, rent, and other operating costs fixed, and let only COGS vary with sales. Exclude build-out, financing, tax, and owner compensation."
    ],
    "question": "Estimate annual revenue and operating surplus. How does 6% capture change the recommendation?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Size the coffee-shop opportunity and test whether its projected contribution supports signing a lease."
      },
      {
        "topics": [
          "population",
          "people",
          "market",
          "nearby",
          "students",
          "size"
        ],
        "answer": "About 30,000 people live, work or study nearby."
      },
      {
        "topics": [
          "coffee",
          "buyers",
          "regular",
          "drink",
          "drinkers"
        ],
        "answer": "About 15% of them buy coffee regularly."
      },
      {
        "topics": [
          "capture",
          "share",
          "rate"
        ],
        "answer": "The base case assumes HarborLight captures 8% of regular buyers."
      },
      {
        "topics": [
          "competitors",
          "competition",
          "nearby",
          "shops"
        ],
        "answer": "Three coffee shops operate within two blocks."
      },
      {
        "topics": [
          "visits",
          "frequency",
          "week",
          "often"
        ],
        "answer": "Each captured customer visits 3 times a week."
      },
      {
        "topics": [
          "ticket",
          "price",
          "spend",
          "average"
        ],
        "answer": "The average ticket is $5.50."
      },
      {
        "topics": [
          "rent",
          "lease",
          "space",
          "square"
        ],
        "answer": "Rent is $28 per square foot for 1,200 square feet, on a five-year lease."
      },
      {
        "topics": [
          "cogs",
          "labor",
          "costs",
          "margin",
          "expenses"
        ],
        "answer": "COGS is 30% of sales; baseline labor 28% and other operating costs 15% of base-case sales. These are case assumptions, not industry benchmarks."
      },
      {
        "topics": [
          "summer",
          "seasonality",
          "breaks",
          "calendar",
          "semester"
        ],
        "answer": "Exhibit 2: 32 term weeks at full demand and 20 weeks at 40% of term demand."
      }
    ],
    "exhibits": [
      {
        "title": "Market and occupancy assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Driver",
            "Assumption",
            "Unit"
          ],
          [
            "Potential regular buyers",
            "15% of 30,000",
            "People"
          ],
          [
            "Capture rate",
            "8%",
            "Share of buyers"
          ],
          [
            "Purchase frequency",
            "3",
            "Visits / week"
          ],
          [
            "Average ticket",
            "$5.50",
            "Per visit"
          ],
          [
            "Rent",
            "1,200 × $28",
            "Per year"
          ]
        ]
      },
      {
        "units": "Demand is relative to a normal term week.",
        "title": "Academic calendar (fictional)",
        "rows": [
          [
            "Period",
            "Weeks",
            "Demand vs. term weeks"
          ],
          [
            "Fall and spring terms",
            "32",
            "100%"
          ],
          [
            "Summer and breaks",
            "20",
            "40%"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Market size — how many potential daily customers are in the area: students, faculty and staff, nearby residents, and commuters passing through.",
        "Revenue — average ticket size × visit frequency × addressable customers who choose HarborLight over alternatives.",
        "Costs — rent, labor, cost of goods sold (coffee, milk, cups, pastries), equipment, and one-time build-out costs.",
        "Competition and differentiation — how many existing coffee shops are nearby, what they charge, and why a customer would switch to a new option.",
        "Risks — seasonality around academic breaks and summer session, lease terms and length of commitment, and staffing turnover common in food service."
      ],
      "math": [
        "Buyers: 30,000 × 15% = 4,500; captured customers: 4,500 × 8% = 360.",
        "Annual revenue at 52 full weeks: 360 × 3 × $5.50 × 52 = $308,880.",
        "Rent: 1,200 × $28 = $33,600. COGS $92,664; labor $86,486.40; other costs $46,332.",
        "Base surplus: $308,880 − $92,664 − $86,486.40 − $46,332 − $33,600 = $49,797.60.",
        "At 6% capture: 270 customers; revenue $231,660; COGS $69,498; surplus −$4,256.40.",
        "Academic calendar: effective weeks = 32 + 20 × 40% = 40; revenue = 360 × 3 × $5.50 × 40 = $237,600.",
        "Seasonal surplus: $237,600 − $71,280 COGS − $86,486.40 − $46,332 − $33,600 ≈ −$98, roughly break-even."
      ],
      "modelAnswer": "At 8% capture and 52 full weeks, 360 regular customers generate $308,880 and about $49,800 of operating surplus before owner pay and financing. But at 6% capture the shop loses about $4,300, and adjusting for the academic calendar (20 weeks at 40% demand) cuts revenue to $237,600 and surplus to roughly break-even. The 52-week base case overstates the opportunity.",
      "recommendation": "Do not sign a five-year lease on these numbers. Negotiate a shorter lease or seasonal rent, plan a leaner summer staffing model, and recheck the seasonal case if labor can flex with demand.",
      "risks": [
        "The 52-week demand assumption may overstate summer and holiday visits.",
        "Labor and other costs may be partly flexible; test the downside with realistic staffing constraints."
      ],
      "impactLens": "Commercial case. Seasonal businesses often cut staff hours sharply in summer; if HarborLight opens, plan predictable hours for its team.",
      "brainstorm": "How could HarborLight make the summer weeks pay, or reduce the risk of the lease?"
    },
    "rubricNotes": [
      "Estimates revenue but ignores costs or the lease.",
      "Gets base revenue and surplus but does not test capture or seasonality.",
      "Shows the base surplus (about $49,800), the 6% loss and the near-zero seasonal case, and does not recommend an unconditional go.",
      "Level 3, plus specific de-risking terms (shorter lease, seasonal staffing) and a validation step such as a pop-up test."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market sizing primer",
        "url": "/academy/learn/market-sizing"
      },
      {
        "title": "SBA: Market research and competitive analysis",
        "url": "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis"
      }
    ]
  },
  {
    "id": "brightcart",
    "slug": "brightcart",
    "title": "Why are grocery profits falling?",
    "client": "BrightCart Grocery (fictional)",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Profitability",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "BrightCart, a fictional 40-store regional grocer, kept revenue flat at $620 million, but store contribution fell 18%. Twelve stores switched produce suppliers during the year, and store managers blame the new supplier. The CFO wants the decline explained before acting.",
    "objective": "Explain what drove the 18% fall in store contribution and decide whether to reverse the supplier switch.",
    "facts": [
      "Revenue was $620m in both years. Store contribution (before corporate overhead) fell from $62.0m to $50.84m.",
      "Cost of goods sold rose $7.6m and store labor rose $3.56m; other store costs were flat.",
      "Twelve stores switched produce suppliers. Their shrink (spoiled or lost stock) runs two percentage points above the chain average."
    ],
    "question": "What explains the decline, and should BrightCart reverse the supplier switch?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Explain what drove the 18% fall in store contribution and decide whether to reverse the supplier switch."
      },
      {
        "topics": [
          "revenue",
          "sales"
        ],
        "answer": "Revenue was flat at $620m."
      },
      {
        "topics": [
          "profit",
          "contribution",
          "margin",
          "decline",
          "fell"
        ],
        "answer": "Store contribution fell from $62.0m to $50.84m."
      },
      {
        "topics": [
          "cogs",
          "goods",
          "product",
          "cost"
        ],
        "answer": "COGS rose $7.6m. Exhibit 2 splits the increase by store group."
      },
      {
        "topics": [
          "labor",
          "wages",
          "staff",
          "overtime"
        ],
        "answer": "Store labor rose $3.56m: wage rates rose about 2% and overtime also increased."
      },
      {
        "topics": [
          "supplier",
          "suppliers",
          "produce",
          "switch"
        ],
        "answer": "Twelve stores switched produce suppliers early in the year."
      },
      {
        "topics": [
          "shrink",
          "waste",
          "spoilage",
          "theft"
        ],
        "answer": "Shrink in the switched stores runs two percentage points above the chain average."
      },
      {
        "topics": [
          "mix",
          "promotion",
          "promotions",
          "competitor",
          "competitors",
          "price"
        ],
        "answer": "Category mix and promotions were stable, and no new competitors opened nearby."
      }
    ],
    "exhibits": [
      {
        "units": "Store contribution is before corporate overhead.",
        "title": "Chain store P&L ($ millions, fictional)",
        "rows": [
          [
            "Line",
            "Prior year",
            "Current year"
          ],
          [
            "Revenue",
            "620.0",
            "620.0"
          ],
          [
            "Cost of goods sold",
            "421.6",
            "429.2"
          ],
          [
            "Store labor",
            "86.8",
            "90.36"
          ],
          [
            "Other store costs",
            "49.6",
            "49.6"
          ],
          [
            "Store contribution",
            "62.0",
            "50.84"
          ]
        ]
      },
      {
        "units": "Shrink is measured in percentage points of revenue versus the chain average.",
        "title": "COGS change by store group ($ millions, fictional)",
        "rows": [
          [
            "Store group",
            "Stores",
            "Revenue",
            "COGS change",
            "Shrink vs. chain average"
          ],
          [
            "Switched supplier",
            "12",
            "180",
            "+5.4",
            "+2.0 pts"
          ],
          [
            "All other stores",
            "28",
            "440",
            "+2.2",
            "0.0 pts"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Revenue mix — has the mix shifted toward lower-margin categories, such as produce and fresh foods versus higher-margin packaged goods?",
        "Cost of goods sold — supplier price increases, shrinkage and waste, and increased promotional discounting to defend volume.",
        "Operating costs — labor costs (wage rates and scheduling efficiency), rent escalations, utilities, and store maintenance or repair costs.",
        "One-time or non-recurring items — remodel costs, inventory write-offs, or new store openings still ramping toward maturity.",
        "External factors — new competitor openings nearby, or macro cost pressures like fuel and logistics affecting the whole industry."
      ],
      "math": [
        "Decline: $62.0m − $50.84m = $11.16m (18%).",
        "Bridge: COGS +$7.6m (68% of the decline) + labor +$3.56m (32%) = $11.16m.",
        "Switched stores: +$5.4m of COGS, 48% of the decline, from 29% of revenue ($180m ÷ $620m).",
        "Shrink: 2 pts × $180m = $3.6m of the $5.4m; the remaining $1.8m is likely purchase price or mix.",
        "Other stores’ COGS rose $2.2m on $440m (0.5 pts), so the switched group stands out."
      ],
      "modelAnswer": "The decline is fully explained: COGS +$7.6m and labor +$3.56m. The 12 switched stores account for $5.4m, nearly half the decline, from 29% of revenue, and about $3.6m of that is extra shrink. That points strongly at the supplier but does not prove it: store-specific issues could also play a part. Labor is a separate, smaller problem.",
      "recommendation": "Revert two or three switched stores to the old supplier as an eight-week controlled test and compare their shrink with the other switched stores. Separately, review labor scheduling, which accounts for about a third of the decline.",
      "risks": [
        "The switched stores may differ in other ways (location, size, management) that also raise shrink.",
        "Reverting suppliers may carry contract penalties.",
        "Labor growth may reflect wage rates that cannot be scheduled away."
      ],
      "impactLens": "Commercial case. Produce shrink is also food waste, so fixing it helps margins and the environment. Make sure any fix does not reduce fresh-produce availability in lower-income neighborhoods.",
      "brainstorm": "Besides reversing the supplier, what could reduce shrink in the switched stores?"
    },
    "rubricNotes": [
      "Blames the supplier without quantifying anything.",
      "Computes the COGS and labor increases but does not bridge them to the $11.16m decline or split by store group.",
      "Bridges the full decline, shows the switched stores’ outsized share and the shrink component, and calls it strong evidence rather than proof.",
      "Level 3, plus a controlled reversal test with a metric and a separate labor action."
    ],
    "furtherReading": [
      {
        "title": "Learn: Profitability primer",
        "url": "/academy/learn/profitability"
      }
    ]
  },
  {
    "id": "novapay",
    "slug": "novapay",
    "title": "How could local banking reduce travel burdens?",
    "client": "NovaPay Rural Banking (fictional)",
    "track": "Social impact core",
    "sector": "Financial inclusion",
    "caseType": "Impact measurement",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "NovaPay, a fictional rural banking cooperative, wants to let people open accounts and deposit or withdraw cash at local general stores that already take utility payments. Many rural households lack an account and travel hours to reach a bank. A foundation will fund a pilot if NovaPay can show the benefit to households and a path to covering store costs.",
    "objective": "Estimate the net annual benefit to households in a 50-store pilot and test whether pilot stores can break even.",
    "facts": [
      "NovaPay’s network has 15,000 rural stores. The pilot would use 50 of them, serving about 30,000 nearby households.",
      "40% of those households lack an account; assume half of them adopt.",
      "Unbanked households spend about $9 a month and a three-hour round trip reaching a bank. Assume local service removes that cost.",
      "A comparable network broke even at about 25 transactions per store per week after 18 months. Treat this as a benchmark, not a guarantee."
    ],
    "question": "What is the annual net benefit to households, and can pilot stores break even?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Estimate the net annual benefit to households in a 50-store pilot and test whether pilot stores can break even."
      },
      {
        "topics": [
          "stores",
          "network",
          "agents",
          "shops"
        ],
        "answer": "NovaPay has 15,000 stores; the pilot uses 50."
      },
      {
        "topics": [
          "households",
          "population",
          "many",
          "nearby"
        ],
        "answer": "About 30,000 households live near the pilot stores."
      },
      {
        "topics": [
          "unbanked",
          "account",
          "accounts",
          "bank"
        ],
        "answer": "40% of those households lack an account."
      },
      {
        "topics": [
          "adoption",
          "uptake",
          "adopt",
          "signup"
        ],
        "answer": "The plan assumes half of unbanked households adopt."
      },
      {
        "topics": [
          "travel",
          "trip",
          "distance",
          "hours"
        ],
        "answer": "Reaching a bank costs about $9 a month and a three-hour round trip."
      },
      {
        "topics": [
          "fee",
          "fees",
          "charge",
          "price"
        ],
        "answer": "Households would pay $1 per transaction."
      },
      {
        "topics": [
          "transactions",
          "usage",
          "frequency",
          "often"
        ],
        "answer": "Adopting households would make about 2 transactions a month."
      },
      {
        "topics": [
          "breakeven",
          "break",
          "costs",
          "store",
          "fixed"
        ],
        "answer": "Each store’s fixed cost is $50 a week; the network earns $2 per transaction. The comparator broke even at 25 transactions a week."
      },
      {
        "topics": [
          "regulation",
          "regulatory",
          "compliance",
          "fraud",
          "security",
          "cash"
        ],
        "answer": "Agent-banking rules require NovaPay to train and audit every store."
      }
    ],
    "exhibits": [
      {
        "units": "Fictional teaching assumptions; units shown in cells.",
        "title": "Pilot planning inputs (fictional)",
        "rows": [
          [
            "Metric",
            "Input",
            "Interpretation"
          ],
          [
            "Unbanked households",
            "40%",
            "Of households near pilot stores"
          ],
          [
            "Planning adoption",
            "50%",
            "Of unbanked households"
          ],
          [
            "Travel cost avoided",
            "$9 / month",
            "Per adopting household"
          ],
          [
            "Comparator break-even",
            "25 transactions / week",
            "Per store"
          ]
        ]
      },
      {
        "units": "Planning assumptions for a 50-store pilot.",
        "title": "Pilot cluster economics (fictional)",
        "rows": [
          [
            "Driver",
            "Value",
            "Unit"
          ],
          [
            "Households near pilot stores",
            "30,000",
            "Households"
          ],
          [
            "Pilot stores",
            "50",
            "Stores"
          ],
          [
            "Transactions per adopting household",
            "2",
            "Per month"
          ],
          [
            "Fee paid by household",
            "$1",
            "Per transaction"
          ],
          [
            "Store fixed cost",
            "$50",
            "Per store per week"
          ],
          [
            "Network contribution",
            "$2",
            "Per transaction"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Household benefit: adopters × travel cost avoided, net of fees.",
        "Store economics: transactions per store versus break-even.",
        "Feasibility and risk: cash handling, fraud, regulation and trust.",
        "Pilot design: gates on adoption, reliability and verified savings."
      ],
      "math": [
        "Adopters: 30,000 × 40% × 50% = 6,000 households.",
        "Gross savings: 6,000 × $9 × 12 = $648,000 a year.",
        "Fees: 2 × 12 × $1 = $24 per household; net saving $108 − $24 = $84, or $504,000 a year.",
        "Weekly transactions: 6,000 × 2 × 12 ÷ 52 ≈ 2,769, or about 55 per store.",
        "Store break-even: $50 ÷ $2 = 25 transactions a week, matching the comparator. Stores still break even if adoption reaches only 45% of plan (25 ÷ 55.4)."
      ],
      "modelAnswer": "About 6,000 households adopt, saving $84 each after fees, or roughly $504,000 a year. At about 55 transactions per store per week, pilot stores clear the 25-transaction break-even comfortably: adoption could fall to 45% of plan and stores would still cover costs. The big uncertainties are whether adopters really stop travelling to banks and whether stores can handle cash safely.",
      "recommendation": "Fund the 50-store pilot, starting with payments and deposits. Set six-month gates on adoption (at least 45% of plan), fraud and cash-handling errors, and a household survey confirming fewer bank trips.",
      "risks": [
        "Existing bill-payment activity does not prove stores are ready for deposits.",
        "Travel savings could be overstated if users still need bank visits.",
        "Cash-handling and fraud controls at small stores are untested."
      ],
      "impactLens": "The outcome is the time and money households save, plus safer savings. Check whether the poorest and most remote households adopt, and watch for fees or store practices that eat into the benefit.",
      "brainstorm": "What could make adoption stick among the most remote households?"
    },
    "rubricNotes": [
      "Multiplies $9 by all households, or ignores the fee.",
      "Computes adopters and gross savings but not store economics.",
      "Gets about $504,000 of net benefit and shows stores clear break-even at about 55 transactions a week versus 25.",
      "Level 3, plus the 45% adoption margin of safety and pilot gates covering fraud and verified travel savings."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      },
      {
        "title": "Acumen: Lean Data approach to impact measurement",
        "url": "https://acumen.org/lean-data/"
      }
    ]
  },
  {
    "id": "flexforge",
    "slug": "flexforge",
    "title": "Should an industrial supplier enter EV battery hardware?",
    "client": "FlexForge Industrial (fictional)",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Market entry & growth",
    "difficulty": "Advanced",
    "minutes": 45,
    "brief": "FlexForge, a fictional maker of industrial fasteners, is weighing a $40 million move into battery-enclosure hardware for electric vehicles. The market is growing fast but dominated by three incumbents, and automakers take years to qualify a new supplier.",
    "objective": "Decide whether to commit $40 million to enter EV battery-enclosure hardware now, or what evidence to require first.",
    "facts": [
      "The market is about $600 million today and assumed to grow 14% a year for five years. Three incumbent suppliers hold 70% share.",
      "Tooling and certification require $40 million upfront. Qualification takes three to four years before production orders.",
      "FlexForge already sells other fasteners to two automakers. That does not shorten qualification.",
      "At scale, a supplier earns about a 12% operating margin. A 5–8% year-five share is a scenario, not a forecast."
    ],
    "question": "What could FlexForge earn by year five, and should it commit the full $40 million now?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Decide whether to commit $40 million to enter EV battery-enclosure hardware now, or what evidence to require first."
      },
      {
        "topics": [
          "market",
          "size",
          "growth",
          "grow"
        ],
        "answer": "The market is about $600 million today, growing about 14% a year."
      },
      {
        "topics": [
          "competitors",
          "incumbents",
          "competition",
          "share"
        ],
        "answer": "Three incumbents hold 70% of the market."
      },
      {
        "topics": [
          "investment",
          "cost",
          "tooling",
          "capex",
          "upfront"
        ],
        "answer": "Entry requires $40 million upfront for tooling and certification."
      },
      {
        "topics": [
          "qualification",
          "certification",
          "time",
          "timeline",
          "years"
        ],
        "answer": "Qualification takes three to four years before production orders."
      },
      {
        "topics": [
          "customers",
          "automakers",
          "relationships"
        ],
        "answer": "FlexForge sells other fasteners to two automakers, but that does not shorten qualification."
      },
      {
        "topics": [
          "margin",
          "margins",
          "profit"
        ],
        "answer": "Suppliers earn about a 12% operating margin at scale."
      },
      {
        "topics": [
          "working",
          "capital",
          "inventory"
        ],
        "answer": "Working capital is not modeled; expect it to grow with production."
      }
    ],
    "exhibits": [
      {
        "title": "Entry assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Driver",
            "Assumption",
            "Status"
          ],
          [
            "Market growth",
            "14% per year",
            "Fictional scenario"
          ],
          [
            "Upfront investment",
            "$40m",
            "Before orders"
          ],
          [
            "Qualification",
            "3–4 years",
            "Before production"
          ],
          [
            "Year-five share",
            "5–8%",
            "To be validated"
          ]
        ]
      },
      {
        "units": "Planning assumptions.",
        "title": "Market and margin inputs (fictional)",
        "rows": [
          [
            "Input",
            "Value",
            "Note"
          ],
          [
            "Current market size",
            "$600m",
            "Annual sales"
          ],
          [
            "Operating margin at scale",
            "12%",
            "Of revenue"
          ],
          [
            "First production revenue",
            "Year 4",
            "After qualification"
          ],
          [
            "Year-five share scenario",
            "5–8%",
            "Needs customer commitments"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Market attractiveness — size and growth rate of EV battery-enclosure hardware demand, pricing trends, and regulatory tailwinds such as EV adoption incentives.",
        "Competitive landscape — number and strength of existing suppliers, and barriers to entry such as automotive certifications and capital intensity.",
        "Company capability fit — does FlexForge's existing tooling, materials expertise (particularly in high-strength metal forming), and customer relationships in adjacent industrial markets transfer to this new space?",
        "Financial case — required investment, realistic achievable market share, payback period, and expected return measured against FlexForge's other available growth investments."
      ],
      "math": [
        "Five-year growth factor: 1.14^5 ≈ 1.925, so the market reaches about $600m × 1.925 ≈ $1,155m.",
        "Year-five revenue: 5% share ≈ $58m; 8% share ≈ $92m.",
        "Year-five operating profit at 12%: about $6.9m–$11.1m.",
        "Revenue only starts in year 4, so by year 5 FlexForge has at most two years of partial profit against $40m spent upfront. Even at the high case, recovering $40m takes about 3.6 years of full-scale profit ($40m ÷ $11.1m).",
        "Compare staged options (qualify one part first, partner with an incumbent, or license) before committing the full amount."
      ],
      "modelAnswer": "The market could reach about $1.16 billion by year five; a 5–8% share means roughly $58–92 million of revenue and $7–11 million of operating profit a year. But nothing arrives until year 4 and the $40 million is spent upfront, so even the high case likely does not pay back until well after year 6, before working capital. The share assumption is the swing factor, and it depends on winning qualification against entrenched incumbents.",
      "recommendation": "Do not commit the full $40 million now. Fund qualification of one product with one automaker, and require a supply commitment before the main tooling investment.",
      "risks": [
        "Qualifications can slip and working-capital needs can grow before revenue.",
        "A fast-growing market may remain difficult to enter because of incumbent relationships."
      ],
      "impactLens": "Commercial case. EV supply chains can support lower emissions, but the decision should rest on the economics. Count the jobs and plant investment at risk if qualification fails.",
      "brainstorm": "What lower-cost ways could FlexForge test this market before committing $40 million?"
    },
    "rubricNotes": [
      "Recommends entry because the market grows 14% a year.",
      "Sizes year-five revenue but ignores the qualification delay or margins.",
      "Converts share to profit ($7–11m), shows the long payback given year-4 revenue, and recommends a staged entry.",
      "Level 3, plus a specific gate (such as a supply commitment) before the main investment and a comparison with partnering or licensing."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market entry & growth primer",
        "url": "/academy/learn/market-entry"
      }
    ]
  },
  {
    "id": "pulseview",
    "slug": "pulseview",
    "title": "Which streaming price model works better?",
    "client": "PulseView Streaming (fictional)",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Pricing",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "PulseView, a fictional streaming service with 8 million subscribers at $10 a month, needs to grow revenue this year. Leadership is split between raising the price to $12 and launching a $6 ad-supported tier.",
    "objective": "Compare a price increase and ad-tier launch using explicit assumptions and separate new customers from downgrades.",
    "facts": [
      "PulseView has 8 million subscribers paying $10 a month. A previous $1 price increase caused 4% churn; plan on 8% churn for a $2 increase.",
      "The ad tier would cost $6 a month, and advertising would add $4 per ad-tier user each month.",
      "Assume 1.6 million ad-tier users: 1.2 million existing subscribers downgrade and 0.4 million are new. The remaining 6.8 million stay at $10.",
      "Compare revenue first, then contribution after the serving costs in Exhibit 2. Ignore one-time implementation costs."
    ],
    "question": "Which scenario produces more monthly revenue, and which uncertainty could change the result?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Compare a price increase and ad-tier launch using explicit assumptions and separate new customers from downgrades."
      },
      {
        "topics": [
          "subscribers",
          "users",
          "base",
          "members"
        ],
        "answer": "PulseView has 8 million subscribers at $10 a month."
      },
      {
        "topics": [
          "churn",
          "cancel",
          "lose",
          "leave"
        ],
        "answer": "The last $1 increase caused 4% churn. Plan on 8% for a $2 increase, within a 4–12% range."
      },
      {
        "topics": [
          "ad",
          "ads",
          "advertising",
          "tier"
        ],
        "answer": "The ad tier costs $6 a month and earns $4 per user per month in ads. It would have 1.6 million users: 1.2 million downgrades and 0.4 million new."
      },
      {
        "topics": [
          "cost",
          "costs",
          "serving",
          "margin"
        ],
        "answer": "Serving costs $3 per subscriber per month; the ad tier adds $0.50 for ad operations."
      },
      {
        "topics": [
          "competitors",
          "competition",
          "rivals"
        ],
        "answer": "Two main rivals charge $11–13; one has an ad tier."
      },
      {
        "topics": [
          "goal",
          "objective",
          "priority"
        ],
        "answer": "Leadership’s priority this year is monthly revenue."
      }
    ],
    "exhibits": [
      {
        "title": "Explicit teaching scenarios",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Price increase",
            "Ad-supported tier"
          ],
          [
            "Main subscription price",
            "$12",
            "$10"
          ],
          [
            "Retained main-tier users",
            "7.36m",
            "6.8m"
          ],
          [
            "Ad-tier users",
            "0",
            "1.6m"
          ],
          [
            "Ad-tier total monthly revenue / user",
            "Not applicable",
            "$10 = $6 fee + $4 ads"
          ]
        ]
      },
      {
        "units": "Monthly figures.",
        "title": "Cost to serve and churn range (fictional)",
        "rows": [
          [
            "Driver",
            "Value",
            "Applies to"
          ],
          [
            "Serving cost",
            "$3.00 per subscriber per month",
            "All subscribers"
          ],
          [
            "Ad operations cost",
            "$0.50 per ad-tier user per month",
            "Ad tier only"
          ],
          [
            "Churn after a $2 increase",
            "4–12% range; 8% planning case",
            "Price increase"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Price increase path — expected churn rate at the new price point, net revenue impact after accounting for lost subscribers, and resulting competitive price positioning.",
        "Ad-tier path — expected uptake from existing subscribers downgrading to the cheaper tier versus uptake from entirely new subscribers who wouldn't have joined otherwise, ad revenue generated per user, and cannibalization risk from existing full-price subscribers switching down.",
        "Customer segments — how price-sensitive versus price-insensitive subscribers would respond differently to each option.",
        "Longer-term implications — brand positioning effects of introducing a cheaper, ad-supported option, and competitive response risk if rivals match either move."
      ],
      "math": [
        "Baseline revenue: 8m × $10 = $80m per month.",
        "Price scenario: 8m × 92% × $12 = $88.32m.",
        "Ad scenario: 6.8m × $10 + 1.6m × ($6 + $4) = $84m.",
        "Contribution after serving costs: price 7.36m × ($12 − $3) = $66.24m; ad 6.8m × $7 + 1.6m × ($10 − $3.50) = $58.0m; baseline 8m × $7 = $56m.",
        "At 12% churn the price increase still contributes 7.04m × $9 = $63.36m.",
        "Contribution parity: 8m × (1 − c) × $9 = $58m, so churn would have to exceed about 19.4%."
      ],
      "modelAnswer": "At 8% churn the price increase brings in $88.32m a month against $84m for the ad tier. After serving costs the gap widens: $66.24m versus $58.0m, and the price increase stays ahead unless churn exceeds about 19%, well above the 4–12% range. The ad tier wins only on subscriber count (8.4m vs 7.36m).",
      "recommendation": "Raise the price to $12, since it wins on revenue and contribution across the plausible churn range. Revisit the ad tier if subscriber growth becomes the priority, and test ad pricing in one market first.",
      "risks": [
        "Historical churn need not scale linearly.",
        "Ad prices, fill rates, and downgrade rates may differ substantially from the scenario."
      ],
      "impactLens": "Commercial case. A cheaper ad tier widens access for price-sensitive households. If leadership values reach, count it explicitly rather than ignoring it.",
      "brainstorm": "What else could PulseView do to grow revenue beyond these two options?"
    },
    "rubricNotes": [
      "Picks the ad tier because it adds subscribers.",
      "Computes revenue but treats downgrades as new users or ignores serving costs.",
      "Correct revenue ($88.32m vs $84m) and contribution ($66.24m vs $58.0m), with a churn sensitivity.",
      "Level 3, plus the roughly 19% break-even churn and a test plan (such as one market) before full rollout."
    ],
    "furtherReading": [
      {
        "title": "Learn: Pricing primer",
        "url": "/academy/learn/pricing"
      }
    ]
  },
  {
    "id": "terraroots",
    "slug": "terraroots",
    "title": "How can coffee farmers capture more value?",
    "client": "TerraRoots Agri-Cooperative (fictional)",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Market entry & growth",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "TerraRoots, a fictional cooperative of 2,000 smallholder coffee farmers, sells green beans through brokers, and its members receive about 30% of the final retail value. The board is weighing two ways to capture more: selling directly to foreign roasters, or building its own roasting facility for the domestic market.",
    "objective": "Compare export and processing options on net farmer income, timing, and risk.",
    "facts": [
      "The cooperative supports 2,000 farmers, who receive about 30% of final retail value today. Direct exports could raise that share to 45%.",
      "Direct buyer relationships take 12–18 months to establish.",
      "A roasting facility requires $2 million upfront. Roasted coffee sells for 3–4 times the raw-bean price, before roasting costs, yield loss, distribution and marketing.",
      "Building domestic distribution is expected to take two to three years. Treat this as a planning scenario."
    ],
    "question": "Which path raises farmer income more, and should the cooperative build the roasting facility now?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Compare export and processing options on net farmer income, timing, and risk."
      },
      {
        "topics": [
          "farmers",
          "members",
          "cooperative"
        ],
        "answer": "The cooperative has 2,000 member farmers."
      },
      {
        "topics": [
          "share",
          "income",
          "retail",
          "price",
          "receive"
        ],
        "answer": "Farmers receive about 30% of retail value today; direct export could raise it to 45%."
      },
      {
        "topics": [
          "value",
          "volume",
          "revenue"
        ],
        "answer": "The retail value of the co-op’s coffee is about $8.0m a year at current volume."
      },
      {
        "topics": [
          "export",
          "buyers",
          "foreign",
          "certification",
          "logistics"
        ],
        "answer": "Direct buyer relationships take 12–18 months; certification and logistics cost about $0.5m a year."
      },
      {
        "topics": [
          "roasting",
          "facility",
          "plant",
          "capital",
          "upfront"
        ],
        "answer": "A roasting facility costs $2m upfront and about $1.2m a year to run at full distribution."
      },
      {
        "topics": [
          "roasted",
          "multiple",
          "markup"
        ],
        "answer": "Roasted coffee sells for 3–4 times the raw-bean price."
      },
      {
        "topics": [
          "yield",
          "loss",
          "weight"
        ],
        "answer": "Roasting loses about 18% of the beans’ weight."
      },
      {
        "topics": [
          "distribution",
          "domestic",
          "market",
          "brand"
        ],
        "answer": "Building domestic distribution is expected to take two to three years."
      }
    ],
    "exhibits": [
      {
        "units": "Fictional teaching assumptions.",
        "title": "Strategic options",
        "rows": [
          [
            "Item",
            "Direct export",
            "Domestic processing"
          ],
          [
            "Headline value",
            "30% → 45% share of retail value",
            "3–4× raw-bean selling price"
          ],
          [
            "Setup horizon",
            "12–18 months",
            "2–3 years to build distribution"
          ],
          [
            "Upfront capital",
            "None stated (annual costs in Exhibit 2)",
            "$2m"
          ]
        ]
      },
      {
        "units": "Annual figures unless stated.",
        "title": "Illustrative annual economics at current volume (fictional)",
        "rows": [
          [
            "Input",
            "Value",
            "Note"
          ],
          [
            "Retail value of the co-op’s coffee",
            "$8.0m / year",
            "At current volume"
          ],
          [
            "Export certification and logistics",
            "$0.5m / year",
            "Once direct buyers are in place"
          ],
          [
            "Beans diverted to roasting",
            "$0.8m / year",
            "Raw-bean value; 10% of volume"
          ],
          [
            "Roasting yield loss",
            "18%",
            "Weight lost in roasting"
          ],
          [
            "Roasting, packaging, distribution, marketing",
            "$1.2m / year",
            "At full distribution"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Direct export path — price premium versus current middleman-brokered sales, cost and time required to develop certified buyer relationships, and quality or certification requirements (e.g., organic, fair-trade) that export buyers typically demand.",
        "Domestic processing path — capital cost of a roasting facility, margin uplift from selling roasted coffee versus green (unroasted) beans, and local market demand and competitive intensity.",
        "Farmer impact — which path delivers income gains faster and more reliably to the 2,000 member farmers, and how evenly that benefit is distributed across farmers of different sizes.",
        "Risk — currency and export-logistics risk for the export path versus execution and market-building risk (building a brand from nothing) for the domestic path."
      ],
      "math": [
        "Export: 45% × $8.0m = $3.6m − $0.5m = $3.1m vs $2.4m today: +$0.7m a year, about $350 per farmer.",
        "Roasting at 3.5× (midpoint): $0.8m × 3.5 × (1 − 18%) = $2.296m revenue − $0.8m beans − $1.2m costs ≈ $0.3m a year.",
        "Roasting payback: $2.0m ÷ $0.296m ≈ 6.8 years, after a two-to-three-year distribution build.",
        "Sensitivity: at 3× the roasting margin is about −$0.03m; at 4× about +$0.62m (payback ≈ 3.2 years).",
        "Export gains start in 12–18 months with no stated upfront capital."
      ],
      "modelAnswer": "Direct export adds about $0.7m a year ($350 per farmer) within 12–18 months. Roasting earns about $0.3m a year at the midpoint price, pays back in almost seven years after a two-to-three-year build, and loses money if roasted coffee fetches only 3× the bean price. Export is the better first move.",
      "recommendation": "Build direct-export relationships first. Test domestic demand with contract roasting, which needs no capital, and revisit the facility if roasted prices hold near 4× the bean price.",
      "risks": [
        "Gross price premiums may be absorbed by added costs.",
        "Benefits may be distributed unevenly across farmers or coffee grades."
      ],
      "impactLens": "The outcome is net income per farmer. Check how gains are shared: larger farms or higher grades may capture most of the export premium unless the co-op sets rules for distributing it.",
      "brainstorm": "How else could the cooperative raise farmer income without large upfront capital?"
    },
    "rubricNotes": [
      "Chooses roasting because roasted coffee sells for 3–4× more.",
      "Computes the export gain but treats the roasting multiple as profit.",
      "Nets out costs for both paths (+$0.7m vs about $0.3m), shows roasting’s long payback and 3× downside, and recommends export first.",
      "Level 3, plus a low-capital test of domestic demand and a rule for sharing gains fairly among farmers."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market entry & growth primer",
        "url": "/academy/learn/market-entry"
      }
    ]
  },
  {
    "id": "summitgear",
    "slug": "summitgear",
    "title": "Should an outdoor retailer keep opening stores?",
    "client": "SummitGear Outdoor Retail (fictional)",
    "track": "Interview fundamentals",
    "sector": "Commercial",
    "caseType": "Profitability",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "SummitGear, a fictional outdoor retailer with 20 established stores, opened five new stores during the year. Revenue grew 9%, but profit fell 12%. The CEO wants to open five more stores next year and asks whether the profit drop is just growing pains.",
    "objective": "Separate expansion losses from core-store performance before approving additional openings.",
    "facts": [
      "SummitGear has 20 established stores and opened five new stores at different points during the year.",
      "Total revenue rose 9% ($200m to $218m); same-store sales were flat; total profit fell 12% ($20.0m to $17.6m).",
      "The new stores were open for a combined 30 store-months. Their results include $1.8m of one-time opening costs."
    ],
    "question": "Can you conclude the profit decline is temporary and approve another expansion cycle?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Separate expansion losses from core-store performance before approving additional openings."
      },
      {
        "topics": [
          "stores",
          "established",
          "new",
          "openings"
        ],
        "answer": "There are 20 established stores; 5 new stores opened during the year."
      },
      {
        "topics": [
          "revenue",
          "sales",
          "same"
        ],
        "answer": "Revenue rose from $200m to $218m; same-store sales were flat."
      },
      {
        "topics": [
          "profit",
          "earnings",
          "margin"
        ],
        "answer": "Profit fell from $20.0m to $17.6m."
      },
      {
        "topics": [
          "opening",
          "one",
          "time",
          "costs",
          "preopening"
        ],
        "answer": "New-store results include $1.8m of one-time opening costs."
      },
      {
        "topics": [
          "months",
          "open",
          "timing"
        ],
        "answer": "The new stores were open 30 store-months in total."
      },
      {
        "topics": [
          "cannibalization",
          "cannibalize",
          "nearby",
          "overlap"
        ],
        "answer": "Two new stores are within 20 miles of established stores, whose sales dipped slightly."
      },
      {
        "topics": [
          "breakeven",
          "maturity",
          "plan",
          "target"
        ],
        "answer": "The expansion plan assumed new stores break even by month 18."
      }
    ],
    "exhibits": [
      {
        "title": "Reported indicators",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Change",
            "Scope"
          ],
          [
            "Revenue",
            "+9%",
            "Whole chain"
          ],
          [
            "Same-store sales",
            "0%",
            "20 established stores"
          ],
          [
            "Profit",
            "−12%",
            "Whole chain"
          ],
          [
            "New stores",
            "5",
            "Partial-year openings"
          ]
        ]
      },
      {
        "units": "New-store profit includes $1.8m of one-time opening costs; new stores were open 30 store-months in total.",
        "title": "Profit by store group ($ millions, fictional)",
        "rows": [
          [
            "Store group",
            "Revenue, prior",
            "Revenue, current",
            "Profit, prior",
            "Profit, current"
          ],
          [
            "20 established stores",
            "200.0",
            "200.0",
            "20.0",
            "20.6"
          ],
          [
            "5 new stores",
            "0.0",
            "18.0",
            "0.0",
            "−3.0"
          ],
          [
            "Total",
            "200.0",
            "218.0",
            "20.0",
            "17.6"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Revenue — same-store sales trend at the original locations versus total revenue contribution from new stores.",
        "Costs — new-store opening costs (one-time expenses like fixtures and initial marketing), ongoing rent and labor for new locations before they mature to full productivity, and any inventory write-downs.",
        "Product mix — any shift in what's selling toward lower-margin categories like clearance apparel versus higher-margin gear and equipment.",
        "External factors — seasonal weather patterns affecting outdoor gear demand in the current year versus prior years, and any new competitor openings near existing stores."
      ],
      "math": [
        "Check: revenue $218m ÷ $200m = +9%; profit $17.6m ÷ $20.0m = −12%.",
        "Established stores: profit up $0.6m (+3%) on flat sales.",
        "New stores: −$3.0m, of which $1.8m is one-time; the recurring operating loss is $1.2m.",
        "Underlying profit excluding opening costs: $20.6m − $1.2m = $19.4m, down 3%, not 12%.",
        "Productivity: new stores $18m ÷ 30 store-months = $0.6m per store-month vs established $200m ÷ 240 ≈ $0.83m, about 72%."
      ],
      "modelAnswer": "Most of the 12% drop is one-time: excluding $1.8m of opening costs, profit is down only 3%, and established stores grew profit 3%. New stores still lose $1.2m a year on operations and sell about 72% of what a mature store sells per month. That is consistent with growing pains, but it does not prove they will mature.",
      "recommendation": "Approve a smaller next wave (two or three stores) and require the first five to show a path to break-even, for example reaching 85% of mature sales productivity by month 12, before opening more.",
      "risks": [
        "New-store sales may cannibalize established locations.",
        "A planned maturity date is a target, not evidence the stores will reach it."
      ],
      "impactLens": "Commercial case. Openings bring local jobs, and stop-start expansion can mean layoffs later. Pacing growth to proven economics protects those jobs.",
      "brainstorm": "Besides pausing openings, how could SummitGear speed up new-store ramp-up?"
    },
    "rubricNotes": [
      "Approves more stores because revenue grew 9%.",
      "Separates new and established stores but does not remove one-time costs.",
      "Shows underlying profit is down only 3% and quantifies the $1.2m recurring loss and 72% productivity.",
      "Level 3, plus a staged approval with a specific maturity gate."
    ],
    "furtherReading": [
      {
        "title": "Learn: Profitability primer",
        "url": "/academy/learn/profitability"
      }
    ]
  },
  {
    "id": "aeroquant",
    "slug": "aeroquant",
    "title": "What should an acquirer pay for analytics software?",
    "client": "AeroQuant Analytics (fictional)",
    "track": "Advanced electives",
    "sector": "Commercial",
    "caseType": "Partnerships & M&A",
    "difficulty": "Advanced",
    "minutes": 45,
    "brief": "A fictional aviation-software company is considering buying AeroQuant, a fast-growing start-up whose analytics tools airlines use to plan maintenance. The founders are asking for a price at the top of recent deal multiples, citing cross-selling potential.",
    "objective": "Assess a proposed acquisition using $8m ARR, a fictional 6–9× EV/ARR range, and uncertain cross-selling.",
    "facts": [
      "The target has $8 million ARR, 35% reported annual growth, and 12 airline customers with multi-year contracts.",
      "For this exercise only, assume the supplied 6–9× transaction multiples represent enterprise value / ARR on a comparable basis. They are fictional, not current market observations.",
      "Management projects $3 million annual cross-sell revenue by year two. Associated margins, timing, probability, and integration costs are not supplied.",
      "The two technical founders have not signed retention agreements. Cash, debt, and other purchase-price adjustments are also missing."
    ],
    "question": "What range is supported and how should synergy and retention affect the offer?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Assess a proposed acquisition using $8m ARR, a fictional 6–9× EV/ARR range, and uncertain cross-selling."
      },
      {
        "topics": [
          "arr",
          "revenue",
          "growth",
          "recurring"
        ],
        "answer": "AeroQuant has $8 million ARR growing 35% a year."
      },
      {
        "topics": [
          "customers",
          "airlines",
          "contracts",
          "concentration"
        ],
        "answer": "It has 12 airline customers on multi-year contracts; the largest is 20% of ARR."
      },
      {
        "topics": [
          "multiple",
          "multiples",
          "valuation",
          "comparable"
        ],
        "answer": "Use fictional 6–9× EV/ARR transaction multiples for this exercise."
      },
      {
        "topics": [
          "synergies",
          "cross",
          "sell"
        ],
        "answer": "Management projects $3 million a year of cross-sell revenue by year two; margins, timing and probability are unknown."
      },
      {
        "topics": [
          "founders",
          "retention",
          "team"
        ],
        "answer": "The two technical founders have not signed retention agreements."
      },
      {
        "topics": [
          "cash",
          "debt",
          "equity",
          "bridge"
        ],
        "answer": "Cash and debt figures have not been provided yet."
      }
    ],
    "exhibits": [
      {
        "title": "Acquisition inputs",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Input",
            "Value",
            "Qualification"
          ],
          [
            "ARR",
            "$8m",
            "Current"
          ],
          [
            "Illustrative EV / ARR",
            "6–9×",
            "Teaching assumption"
          ],
          [
            "Cross-sell revenue",
            "$3m per year",
            "Unproven year-two target"
          ],
          [
            "Founder retention",
            "Unsigned",
            "Key diligence issue"
          ]
        ]
      },
      {
        "title": "Decision context and evidence gaps",
        "units": "Qualitative evidence / supplied planning assumptions",
        "rows": [
          [
            "Diligence area",
            "Potential value",
            "Uncertainty"
          ],
          [
            "Cross-selling",
            "$3m annual revenue opportunity",
            "Margin, timing and probability unknown"
          ],
          [
            "Retention",
            "Founders have expertise",
            "Post-close retention unproven"
          ],
          [
            "Equity bridge",
            "Enterprise multiple available",
            "Cash and debt unknown"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Strategic fit — does the target's technology and customer base genuinely complement AeroQuant's existing offering, or is there significant overlap that limits added value?",
        "Synergies — revenue synergies from cross-selling to each company's existing customers, and cost synergies from shared infrastructure or reduced overhead post-acquisition.",
        "Valuation — the target's standalone value versus the price needed to win the deal, informed by comparable recent transactions in the same space.",
        "Integration risk — technology compatibility between the two platforms, cultural fit between a larger established firm and a small startup team, and the risk of losing key technical talent post-acquisition, which is common in software acquisitions."
      ],
      "math": [
        "Enterprise value: $8m × 6–9 = $48–72m, conditional on genuinely comparable multiples.",
        "Bridge EV to equity using verified cash, debt, and other relevant claims and adjustments.",
        "Model synergy revenue × incremental margin, less tax, capex, working capital, and integration costs, with timing and probability.",
        "Validate customer concentration, renewal terms, technology ownership, and founder dependency.",
        "Consider milestone-based contingent payment, while recognizing an earn-out alone does not ensure retention."
      ],
      "modelAnswer": "The illustrative enterprise-value range is $48–72 million. Equity purchase price requires cash, debt, and other adjustments. The $3 million revenue synergy cannot simply be added or multiplied into a justified premium; value its risk-adjusted incremental cash flows after costs. Founder retention is a major condition for proceeding.",
      "recommendation": "Proceed to diligence with a conditional offer range. Require a credible technical transition and retention plan, and avoid paying all projected synergy value upfront.",
      "risks": [
        "Growth may slow or be concentrated in a few customers.",
        "Retention agreements cannot fully eliminate execution and key-person risk."
      ],
      "impactLens": "Commercial case. For airline customers, the value is fewer maintenance delays. Losing the founders could disrupt service they rely on.",
      "brainstorm": "How could the deal be structured to protect the buyer if cross-selling or founder retention disappoints?"
    },
    "rubricNotes": [
      "Adds the $3m of cross-sell revenue to the valuation at full value.",
      "Computes the $48–72m EV range but ignores the equity bridge or founder risk.",
      "States the EV range, explains why synergies need risk-adjusted cash flows, and makes founder retention a condition.",
      "Level 3, plus a deal structure (earn-out, holdback, retention packages) tied to specific milestones."
    ],
    "furtherReading": [
      {
        "title": "Learn: Make the math useful",
        "url": "/academy/learn#math"
      }
    ]
  },
  {
    "id": "northstar",
    "slug": "northstar",
    "title": "Do synergies justify an acquisition premium?",
    "client": "Northstar, a fictional professional-services acquirer",
    "track": "Advanced electives",
    "sector": "Commercial",
    "caseType": "Partnerships & M&A",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "Northstar, a fictional professional-services firm, is negotiating to buy a smaller rival. The seller wants a premium over standalone value, and Northstar’s deal team argues that savings from combining offices justify it.",
    "objective": "Assess whether five years of $2m annual pretax synergies justify a premium above $80m standalone enterprise value.",
    "facts": [
      "Standalone enterprise value is $80m; debt is $12m and cash is $4m.",
      "Annual pretax cost savings are $2m for five years; tax is 25%.",
      "Use a supplied five-year present-value factor of 4.0. Integration costs $6m at closing, with no tax benefit assumed."
    ],
    "question": "Calculate standalone equity value and the maximum synergy premium under these assumptions.",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Assess whether five years of $2m annual pretax synergies justify a premium above $80m standalone enterprise value."
      },
      {
        "topics": [
          "value",
          "ev",
          "enterprise",
          "standalone"
        ],
        "answer": "Standalone enterprise value is $80m."
      },
      {
        "topics": [
          "debt",
          "cash",
          "equity"
        ],
        "answer": "The target has $12m of debt and $4m of cash."
      },
      {
        "topics": [
          "savings",
          "synergies",
          "cost"
        ],
        "answer": "Annual pretax savings are $2m for five years."
      },
      {
        "topics": [
          "tax",
          "rate"
        ],
        "answer": "The tax rate is 25%."
      },
      {
        "topics": [
          "discount",
          "pv",
          "factor"
        ],
        "answer": "Use a PV factor of 4.0 for years 1–5, or 3.07 for years 2–5."
      },
      {
        "topics": [
          "integration",
          "closing",
          "upfront"
        ],
        "answer": "Integration costs $6m at closing."
      },
      {
        "topics": [
          "timing",
          "delay",
          "risk",
          "scenario"
        ],
        "answer": "Exhibit 2 shows delayed and upside scenarios."
      },
      {
        "topics": [
          "premium",
          "seller",
          "price",
          "ask"
        ],
        "answer": "The seller asks for $80m EV plus a $5m premium."
      }
    ],
    "exhibits": [
      {
        "title": "Deal assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Value",
            "Basis"
          ],
          [
            "Standalone EV",
            "$80m",
            "Before synergies"
          ],
          [
            "Debt / cash",
            "$12m / $4m",
            "At closing"
          ],
          [
            "Annual savings",
            "$2m",
            "Pretax, years 1–5"
          ],
          [
            "PV factor / integration",
            "4.0 / $6m",
            "Aftertax savings / upfront cost"
          ]
        ]
      },
      {
        "units": "Pretax annual savings; 25% tax; $6m integration cost at closing in all cases.",
        "title": "Synergy scenarios (fictional)",
        "rows": [
          [
            "Scenario",
            "Annual pretax savings",
            "Years received",
            "PV factor"
          ],
          [
            "Base",
            "$2.0m",
            "Years 1–5",
            "4.00"
          ],
          [
            "Delayed",
            "$2.0m",
            "Years 2–5",
            "3.07"
          ],
          [
            "Upside",
            "$2.5m",
            "Years 1–5",
            "4.00"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Value the target standalone: enterprise value to equity value.",
        "Value synergies: aftertax savings, timing and integration cost.",
        "Set the maximum premium and test it under scenarios.",
        "Structure the offer to share synergy risk."
      ],
      "math": [
        "Equity value = $80m − $12m + $4m = $72m.",
        "Annual aftertax savings = $2m × 75% = $1.5m.",
        "Base: PV of savings = $1.5m × 4.0 = $6m; minus $6m integration = $0.",
        "Delayed: $1.5m × 3.07 − $6m ≈ −$1.4m.",
        "Upside: $2.5m × 75% × 4.0 − $6m = $1.5m.",
        "These are five-year benefits only; do not add perpetual savings or a terminal value without evidence."
      ],
      "modelAnswer": "Equity value is $72m. In the base case the synergies are worth exactly the $6m integration cost, so they justify no premium. If savings slip a year they destroy about $1.4m; only in the upside do they support up to $1.5m of premium, well below the $5m the seller wants.",
      "recommendation": "Offer standalone value. If the seller insists on a premium, tie up to $1.5m to an earn-out that pays only if savings reach the upside level.",
      "risks": [
        "Savings may arrive late.",
        "Retention spending could reduce savings.",
        "Strategic benefits require separate evidence."
      ],
      "impactLens": "Commercial case. Office-consolidation savings usually come from job cuts and relocations. Account for retention costs and client service continuity.",
      "brainstorm": "What other benefits of this deal might justify a premium, and how would you test them?"
    },
    "rubricNotes": [
      "Adds five years of pretax savings ($10m) to the price.",
      "Computes equity value but does not use aftertax savings or net the integration cost.",
      "Shows base synergy value is zero after integration and tests the delayed and upside scenarios.",
      "Level 3, plus an offer structure (such as an earn-out) that shares synergy risk with the seller."
    ],
    "furtherReading": [
      {
        "title": "Learn: Make the math useful",
        "url": "/academy/learn#math"
      }
    ]
  },
  {
    "id": "cedar",
    "slug": "cedar",
    "title": "Would an all-stock deal increase earnings per share?",
    "client": "Cedar, a fictional technology acquirer",
    "track": "Advanced electives",
    "sector": "Commercial",
    "caseType": "Partnerships & M&A",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "Cedar, a fictional technology company, plans to buy a smaller software firm by issuing new shares. The CEO wants to tell investors the deal increases earnings per share.",
    "objective": "Evaluate EPS accretion for a $60m all-stock purchase using $1.2m annual aftertax synergies.",
    "facts": [
      "Acquirer net income is $30m with 10m shares at $40 each.",
      "Target net income is $6m and its equity purchase price is $60m.",
      "Recurring aftertax synergies are $1.2m. Ignore purchase-accounting adjustments, financing changes and one-time costs for this simplified calculation."
    ],
    "question": "Calculate new shares, pro forma EPS with and without synergies, and accretion.",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Evaluate EPS accretion for a $60m all-stock purchase using $1.2m annual aftertax synergies."
      },
      {
        "topics": [
          "income",
          "earnings",
          "net",
          "profit"
        ],
        "answer": "Cedar earns $30m; the target earns $6m."
      },
      {
        "topics": [
          "shares",
          "stock",
          "price"
        ],
        "answer": "Cedar has 10m shares trading at $40."
      },
      {
        "topics": [
          "purchase",
          "deal",
          "consideration",
          "pay"
        ],
        "answer": "Cedar pays $60m in new Cedar shares."
      },
      {
        "topics": [
          "synergies",
          "savings"
        ],
        "answer": "Recurring aftertax synergies are $1.2m a year."
      },
      {
        "topics": [
          "accounting",
          "amortization",
          "integration",
          "costs"
        ],
        "answer": "Ignore purchase accounting, financing changes and one-time costs in this exercise."
      },
      {
        "topics": [
          "volatility",
          "fall",
          "drop",
          "sensitivity"
        ],
        "answer": "Exhibit 2 shows how the result changes with Cedar’s share price."
      }
    ],
    "exhibits": [
      {
        "title": "Deal assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Acquirer",
            "Target / deal"
          ],
          [
            "Net income",
            "$30m",
            "$6m"
          ],
          [
            "Shares / price",
            "10m / $40",
            "$60m equity price"
          ],
          [
            "Annual aftertax synergy",
            "—",
            "$1.2m"
          ]
        ]
      },
      {
        "units": "$60m equity price paid in new Cedar shares; includes $1.2m of synergies.",
        "title": "Sensitivity to Cedar’s share price at closing (fictional)",
        "rows": [
          [
            "Cedar share price",
            "New shares issued",
            "Pro forma EPS",
            "Accretion"
          ],
          [
            "$35",
            "1.71m",
            "$3.18",
            "5.9%"
          ],
          [
            "$40",
            "1.50m",
            "$3.23",
            "7.8%"
          ],
          [
            "$45",
            "1.33m",
            "$3.28",
            "9.4%"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Standalone EPS and share count.",
        "Shares issued at the deal price; pro forma earnings and EPS.",
        "Sensitivity to share price and synergies.",
        "Value check beyond EPS: price versus cash-flow value."
      ],
      "math": [
        "Standalone EPS = $30m ÷ 10m = $3.00.",
        "New shares = $60m ÷ $40 = 1.5m; total shares = 11.5m.",
        "With synergies: ($30m + $6m + $1.2m) ÷ 11.5m = $3.2348, or 7.83% accretion.",
        "Without synergies: $36m ÷ 11.5m = $3.1304, or 4.35% accretion.",
        "P/E check: Cedar trades at $40 ÷ $3.00 ≈ 13.3× earnings and pays $60m ÷ $6m = 10× for the target. Buying earnings at a lower P/E than your own is accretive even without synergies.",
        "At $35 a share: 1.71m new shares; EPS $3.18 with synergies (+5.9%) and $3.07 without (+2.4%)."
      ],
      "modelAnswer": "The deal issues 1.5m shares and lifts EPS to $3.23 (+7.8%) with synergies, or $3.13 (+4.3%) without, and stays accretive even if Cedar’s shares fall to $35. The accretion comes mainly from paying 10× earnings with stock valued at 13.3×, not from synergies, and accretion alone does not prove the deal creates value.",
      "recommendation": "Continue diligence; use cash-flow valuation alongside EPS before recommending approval.",
      "risks": [
        "Share price changes alter dilution.",
        "Synergies may fail.",
        "Purchase accounting and integration costs can change reported EPS."
      ],
      "impactLens": "Commercial case. EPS accretion can hide overpaying. The target’s employees and customers carry integration risk that EPS does not show.",
      "brainstorm": "Beyond EPS, what would you want to know before calling this a good deal?"
    },
    "rubricNotes": [
      "Computes EPS without adding the new shares.",
      "Gets new shares and pro forma EPS but not the no-synergy case.",
      "Correct EPS both ways, the share-price sensitivity, and the P/E explanation.",
      "Level 3, plus a clear statement that accretion is not value creation and a proposed cash-flow check."
    ],
    "furtherReading": [
      {
        "title": "Learn: Make the math useful",
        "url": "/academy/learn#math"
      }
    ]
  },
  {
    "id": "oakline",
    "slug": "oakline",
    "title": "What are the clinic’s sustainable earnings?",
    "client": "Oakline, a fictional clinic group",
    "track": "Advanced electives",
    "sector": "Commercial",
    "caseType": "Partnerships & M&A",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A fictional healthcare investor is considering buying Oakline, a group of outpatient clinics. The seller is asking $36m, pointing to last year’s earnings. The investor’s team needs to know what Oakline really earns on a recurring basis.",
    "objective": "Assess the $36m asking enterprise value against normalized and downside EBITDA.",
    "facts": [
      "Revenue is $20m and reported operating expenses are $16m; treat the difference as EBITDA in this simplified exhibit.",
      "Expenses include $0.8m of verified one-time relocation costs.",
      "The clinic needs $0.3m of additional recurring annual staffing expense. Asking enterprise value is $36m.",
      "Downside: $2m of revenue disappears at a 40% contribution margin, after the normalization adjustments."
    ],
    "question": "Calculate normalized EBITDA, the asking multiple, and the downside multiple.",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Assess the $36m asking enterprise value against normalized and downside EBITDA."
      },
      {
        "topics": [
          "revenue",
          "sales"
        ],
        "answer": "Revenue is $20m."
      },
      {
        "topics": [
          "expenses",
          "costs",
          "ebitda",
          "earnings"
        ],
        "answer": "Reported operating expenses are $16m, so reported EBITDA is $4m."
      },
      {
        "topics": [
          "relocation",
          "one",
          "time",
          "nonrecurring"
        ],
        "answer": "Expenses include $0.8m of verified one-time relocation costs."
      },
      {
        "topics": [
          "staffing",
          "staff",
          "understaffed",
          "hiring"
        ],
        "answer": "The clinics need $0.3m more recurring staffing a year."
      },
      {
        "topics": [
          "asking",
          "price",
          "seller"
        ],
        "answer": "The seller is asking $36m of enterprise value."
      },
      {
        "topics": [
          "payer",
          "insurer",
          "contract",
          "concentration"
        ],
        "answer": "The largest payer is 35% of revenue and renews in six months. There is a 30% chance of losing $2m of revenue."
      },
      {
        "topics": [
          "multiples",
          "comparable",
          "comps"
        ],
        "answer": "Comparable clinic deals trade at 7.0–8.5× normalized EBITDA."
      }
    ],
    "exhibits": [
      {
        "title": "Deal assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Value",
            "Treatment"
          ],
          [
            "Reported EBITDA",
            "$4m",
            "Starting point"
          ],
          [
            "One-time relocation",
            "$0.8m",
            "Add back"
          ],
          [
            "Missing recurring staffing",
            "$0.3m",
            "Deduct"
          ],
          [
            "Lost revenue / margin",
            "$2m / 40%",
            "Downside scenario"
          ]
        ]
      },
      {
        "units": "Multiples are enterprise value ÷ normalized EBITDA.",
        "title": "Valuation inputs (fictional)",
        "rows": [
          [
            "Input",
            "Value",
            "Note"
          ],
          [
            "Comparable clinic deals",
            "7.0–8.5×",
            "Recent transactions"
          ],
          [
            "Largest payer’s share of revenue",
            "35%",
            "Contract renews in six months"
          ],
          [
            "Probability of the $2m revenue loss",
            "30%",
            "Diligence estimate"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Normalize earnings: add back one-time costs and deduct missing recurring costs.",
        "Price against comparable multiples.",
        "Stress-test revenue concentration and weight the downside.",
        "Structure the offer around the key risk."
      ],
      "math": [
        "Reported EBITDA = $20m − $16m = $4m.",
        "Normalized EBITDA = $4m + $0.8m − $0.3m = $4.5m; asking multiple $36m ÷ $4.5m = 8.0× (9.0× on reported).",
        "Downside: $2m × 40% = $0.8m lost; EBITDA $3.7m; $36m ÷ $3.7m ≈ 9.7×.",
        "Comparable range: $4.5m × 7.0–8.5 = $31.5m–$38.25m; downside $3.7m × 7.0–8.5 = $25.9m–$31.45m.",
        "Probability-weighted EBITDA: 70% × $4.5m + 30% × $3.7m = $4.26m; at the 7.75× midpoint ≈ $33.0m."
      ],
      "modelAnswer": "Normalized EBITDA is $4.5m, so $36m is 8.0×, inside the 7.0–8.5× comparable range. But there is a 30% chance of losing $0.8m of EBITDA when the largest payer renews. Weighted for that, EBITDA is about $4.26m and a midpoint multiple gives about $33m.",
      "recommendation": "Offer about $33m, or $36m with part of the price held back until the largest payer’s contract renews.",
      "risks": [
        "A supposedly one-time cost may recur.",
        "Patient access and care quality must survive integration.",
        "Revenue concentration may amplify downside."
      ],
      "impactLens": "Patients depend on these clinics. If the largest payer leaves, patients may lose in-network access; check care continuity and staffing, since the clinics are already understaffed.",
      "brainstorm": "How could the investor protect itself against losing the largest payer?"
    },
    "rubricNotes": [
      "Uses reported EBITDA and the 9× asking multiple without adjustments.",
      "Normalizes to $4.5m but does not value the downside.",
      "Normalizes, compares with comparable deals, and probability-weights the payer risk.",
      "Level 3, plus an offer structure (holdback or earn-out) tied to the payer renewal."
    ],
    "furtherReading": [
      {
        "title": "Learn: Make the math useful",
        "url": "/academy/learn#math"
      }
    ]
  },
  {
    "id": "lumen",
    "slug": "lumen",
    "title": "Should the software company buy or build?",
    "client": "Lumen, a fictional software provider",
    "track": "Advanced electives",
    "sector": "Commercial",
    "caseType": "Partnerships & M&A",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "Lumen, a fictional software provider for logistics firms, needs an analytics capability its customers keep asking for. It can build one in-house or buy a small analytics company.",
    "objective": "Compare buy and build NPVs over three years at a 10% discount rate.",
    "facts": [
      "Build requires $6m now and yields cash flows of $0m, $2m and $3m in years 1–3.",
      "Buy requires $8m now and yields cash flows of $3m, $4m and $4m in years 1–3.",
      "Use a 10% discount rate. Cash flows are incremental, aftertax and received at year-end.",
      "For this exercise, both options have zero residual value after year 3 and all integration costs are included."
    ],
    "question": "Compute each NPV and recommend an option under these assumptions.",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Compare buy and build NPVs over three years at a 10% discount rate."
      },
      {
        "topics": [
          "build",
          "develop",
          "inhouse",
          "house"
        ],
        "answer": "Building costs $6m now and returns $0m, $2m and $3m in years 1–3."
      },
      {
        "topics": [
          "buy",
          "acquire",
          "acquisition"
        ],
        "answer": "Buying costs $8m now and returns $3m, $4m and $4m in years 1–3."
      },
      {
        "topics": [
          "discount",
          "rate",
          "wacc"
        ],
        "answer": "Use a 10% discount rate; cash flows arrive at year-end."
      },
      {
        "topics": [
          "residual",
          "terminal",
          "value"
        ],
        "answer": "Residual value is zero in the base case; Exhibit 2 tests $4m for the build option."
      },
      {
        "topics": [
          "churn",
          "customers",
          "retention"
        ],
        "answer": "Exhibit 2 tests acquired cash flows 20% lower."
      },
      {
        "topics": [
          "time",
          "speed",
          "launch"
        ],
        "answer": "Buying delivers the capability immediately; building takes about a year."
      }
    ],
    "exhibits": [
      {
        "title": "Deal assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Option",
            "Initial investment",
            "Year 1 / 2 / 3 cash flow"
          ],
          [
            "Build",
            "$6m",
            "$0m / $2m / $3m"
          ],
          [
            "Buy",
            "$8m",
            "$3m / $4m / $4m"
          ],
          [
            "Discount rate",
            "10%",
            "Zero residual value"
          ]
        ]
      },
      {
        "units": "Apply one sensitivity at a time.",
        "title": "Sensitivities (fictional)",
        "rows": [
          [
            "Sensitivity",
            "Change",
            "Applies to"
          ],
          [
            "Acquired-customer churn",
            "Cash flows 20% lower in years 1–3",
            "Buy"
          ],
          [
            "Platform residual value",
            "$4m of value left at end of year 3",
            "Build"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Lay out each option’s cash flows and timing.",
        "Discount at 10% and compare NPVs.",
        "Test the key sensitivity for each option.",
        "Weigh non-financial factors: speed, capability fit and team."
      ],
      "math": [
        "Build NPV = −6 + 0/1.1 + 2/1.1² + 3/1.1³ ≈ −$2.09m.",
        "Buy NPV = −8 + 3/1.1 + 4/1.1² + 4/1.1³ ≈ +$1.04m.",
        "Buy exceeds build by about $3.13m in the base case.",
        "Buy with 20% lower cash flows: −8 + 2.4/1.1 + 3.2/1.1² + 3.2/1.1³ ≈ −$0.77m.",
        "Build with $4m residual value: −$2.09m + 4/1.1³ ≈ +$0.91m."
      ],
      "modelAnswer": "Build NPV is about −$2.09m and buy about +$1.04m, so buying wins in the base case. But the ranking flips if acquired customers churn (buy falls to −$0.77m) or if the built platform keeps $4m of value (build rises to +$0.91m).",
      "recommendation": "Favor buying, but protect against churn with an earn-out tied to customer retention, and test whether a built platform would really keep $4m of value.",
      "risks": [
        "Customer retention could weaken acquired cash flows.",
        "Build may create longer-term value excluded here.",
        "Data ownership and technical compatibility need diligence."
      ],
      "impactLens": "Commercial case. Customers want the capability soon; a slower build may push them to competitors, a cost the NPV does not capture.",
      "brainstorm": "What other ways could Lumen get this capability besides building or buying?"
    },
    "rubricNotes": [
      "Picks build because it costs less upfront.",
      "Computes one NPV correctly but not both, or ignores timing.",
      "Both NPVs correct and buy recommended, with at least one sensitivity.",
      "Level 3, plus both sensitivities and a deal protection such as an earn-out."
    ],
    "furtherReading": [
      {
        "title": "Learn: Make the math useful",
        "url": "/academy/learn#math"
      }
    ]
  },
  {
    "id": "finance-integration",
    "slug": "finance-integration",
    "title": "Can a portfolio finance integration pay back?",
    "client": "A fictional PE-backed services portfolio",
    "track": "Advanced electives",
    "sector": "Commercial",
    "caseType": "Partnerships & M&A",
    "difficulty": "Intermediate",
    "minutes": 35,
    "brief": "A fictional private-equity-owned services group has bought four companies in three years, and each still runs its own accounting system. The CFO proposes a $500,000 program to move everyone onto one system.",
    "objective": "Evaluate a $500,000 integration investment over five years using an 8% discount rate.",
    "facts": [
      "Source context: Cherry Bekaert describes an unnamed PE-backed business using five accounting systems and fragmented billing. It reports 30% faster billing cycles after standardization.",
      "All financial assumptions below are invented for this exercise; they are not publisher-reported results.",
      "The program costs $500,000 now, saves $240,000 annually and adds $90,000 of annual operating costs.",
      "Assume five years of steady aftertax net savings, no terminal value, and a supplied 8% annuity factor of 3.993."
    ],
    "question": "Calculate net annual benefit, simple payback and NPV. What should management measure before rollout?",
    "clarifyingAnswers": [
      {
        "topics": [
          "objective",
          "goal",
          "aim",
          "trying",
          "decision",
          "success",
          "solve"
        ],
        "answer": "Evaluate a $500,000 integration investment over five years using an 8% discount rate."
      },
      {
        "topics": [
          "cost",
          "investment",
          "upfront",
          "program"
        ],
        "answer": "The program costs $500,000 upfront."
      },
      {
        "topics": [
          "savings",
          "save",
          "benefit"
        ],
        "answer": "It saves $240,000 a year."
      },
      {
        "topics": [
          "operating",
          "added",
          "costs",
          "recurring"
        ],
        "answer": "It adds $90,000 a year of operating costs."
      },
      {
        "topics": [
          "discount",
          "factor",
          "npv",
          "rate"
        ],
        "answer": "Use 8% and a five-year annuity factor of 3.993."
      },
      {
        "topics": [
          "billing",
          "dso",
          "collections",
          "receivables",
          "cash"
        ],
        "answer": "Days sales outstanding average 60; the pilot entity fell to 52 days after migrating."
      },
      {
        "topics": [
          "revenue",
          "sales"
        ],
        "answer": "Group revenue is $24m a year."
      },
      {
        "topics": [
          "systems",
          "entities",
          "companies"
        ],
        "answer": "Four acquired companies plus the parent run five separate systems."
      }
    ],
    "exhibits": [
      {
        "title": "Deal assumptions",
        "units": "Units shown in column headings and cells; fictional teaching assumptions.",
        "rows": [
          [
            "Metric",
            "Value",
            "Provenance"
          ],
          [
            "Upfront investment",
            "$500,000",
            "Fictional assumption"
          ],
          [
            "Annual savings / added costs",
            "$240,000 / $90,000",
            "Fictional, aftertax"
          ],
          [
            "Five-year PV factor",
            "3.993",
            "Supplied assumption"
          ],
          [
            "Faster billing cycles",
            "30%",
            "Publisher-reported; not DSO"
          ]
        ]
      },
      {
        "units": "DSO is days sales outstanding: average days to collect an invoice.",
        "title": "Receivables data (fictional)",
        "rows": [
          [
            "Metric",
            "Value",
            "Note"
          ],
          [
            "Annual revenue",
            "$24m",
            "Across the group"
          ],
          [
            "Current DSO",
            "60 days",
            "Group average"
          ],
          [
            "DSO after the pilot entity’s migration",
            "52 days",
            "One entity, three months"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Quantify recurring savings, added costs and upfront investment.",
        "Compute payback and NPV.",
        "Size working-capital benefits separately from recurring savings.",
        "Plan a staged rollout with control checkpoints."
      ],
      "math": [
        "Annual net benefit = $240,000 − $90,000 = $150,000.",
        "Simple payback = $500,000 ÷ $150,000 ≈ 3.33 years; this ignores discounting.",
        "NPV = $150,000 × 3.993 − $500,000 = $98,950.",
        "Cash released if the group matches the pilot: $24m ÷ 365 × 8 days ≈ $526,000, one time.",
        "That one-time cash roughly covers the $500,000 investment, but it rests on one entity’s three-month result."
      ],
      "modelAnswer": "Annual net benefit is $150,000, simple payback is 3.33 years and NPV is $98,950. If the pilot’s DSO improvement holds across the group, faster collections would also release about $526,000 of cash once, almost covering the upfront cost.",
      "recommendation": "Proceed with a staged pilot if the fictional benefits can be validated; gate each entity rollout on reconciliations and control readiness.",
      "risks": [
        "Migration errors and inconsistent account mappings.",
        "Savings depend on actual process adoption.",
        "Duplicate invoices or broken approvals can offset benefits."
      ],
      "impactLens": "Commercial case. Finance staff carry the migration. Plan training and workload so that errors do not reach customers’ invoices.",
      "brainstorm": "What could go wrong in the migration, and how would you stage it to limit the damage?"
    },
    "rubricNotes": [
      "Uses gross savings ($240,000) without the added costs.",
      "Gets net benefit and payback but not NPV, or treats faster billing as extra revenue.",
      "Correct net benefit, payback and NPV, with the one-time cash release sized separately.",
      "Level 3, plus a staged rollout with control gates and a caution that the DSO result is one entity over three months."
    ],
    "furtherReading": [
      {
        "title": "Learn: Make the math useful",
        "url": "/academy/learn#math"
      },
      {
        "title": "Cherry Bekaert: finance transformation for a PE-backed business",
        "url": "https://www.cbh.com/insights/case-studies/finance-transformation-for-pe-firms-case-study/"
      }
    ]
  }
];
export const catalog=[...migratedCases,...newCases];
export const caseHref=(c:AcademyCase)=>'/academy/cases/'+c.slug;
