import type {AcademyCase} from './case-model';
export const newCases:AcademyCase[]=[
  {
    "id": "mobile-market",
    "slug": "mobile-market",
    "title": "How many households could use a mobile food market?",
    "client": "FreshRoute, a fictional Mecklenburg-area food nonprofit",
    "sector": "Food & health",
    "caseType": "Market sizing",
    "difficulty": "Beginner",
    "minutes": 25,
    "track": "Social impact core",
    "brief": "FreshRoute, a fictional food nonprofit near Charlotte, wants to run a mobile market that brings fresh produce to neighborhoods without a nearby grocery store. Before buying a truck, the board wants to know whether enough households would use it to fill a 1,500-household weekly pilot.",
    "objective": "Estimate weekly reachable demand before committing to a 1,500-household weekly pilot.",
    "facts": [
      "Assume 100,000 households in the fictional service area; this is not real county census data.",
      "20% face the target access barrier; 10% of those households would use the proposed route each week.",
      "Count households once, not individual visits."
    ],
    "question": "How many households would use the mobile market each week, and is the 1,500-household pilot the right size?",
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
        "answer": "Estimate weekly reachable demand before committing to a 1,500-household weekly pilot."
      },
      {
        "topics": [
          "households",
          "population",
          "area",
          "many",
          "total"
        ],
        "answer": "Assume 100,000 households in the service area. This is a fictional figure, not county census data."
      },
      {
        "topics": [
          "barrier",
          "access",
          "grocery",
          "desert",
          "store"
        ],
        "answer": "About 20% of households live far from a grocery store and lack a car."
      },
      {
        "topics": [
          "usage",
          "adoption",
          "use",
          "weekly",
          "visit",
          "shop"
        ],
        "answer": "About 10% of those households would use the market in a given week."
      },
      {
        "topics": [
          "capacity",
          "pilot",
          "truck",
          "size"
        ],
        "answer": "The pilot truck can serve 1,500 households a week."
      },
      {
        "topics": [
          "stops",
          "route",
          "neighborhoods",
          "where"
        ],
        "answer": "The route would make about 10 stops a week; locations are not chosen yet."
      },
      {
        "topics": [
          "price",
          "prices",
          "snap",
          "benefits",
          "payment"
        ],
        "answer": "Prices would be at or below grocery-store prices, and SNAP benefits are accepted."
      },
      {
        "topics": [
          "visits",
          "repeat",
          "count"
        ],
        "answer": "Count households once per week, not individual visits."
      }
    ],
    "exhibits": [
      {
        "title": "Demand funnel",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Input",
            "Assumption",
            "Unit"
          ],
          [
            "Service-area households",
            "100,000",
            "Households"
          ],
          [
            "Target access barrier",
            "20%",
            "Share of households"
          ],
          [
            "Weekly adoption",
            "10%",
            "Share of eligible households"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Start from total households in the service area.",
        "Narrow to households facing the access barrier.",
        "Apply a weekly usage rate and compare the result with pilot capacity."
      ],
      "math": [
        "Eligible households = 100,000 × 20% = 20,000.",
        "Weekly reachable demand = 20,000 × 10% = 2,000 households."
      ],
      "modelAnswer": "Modeled demand is 2,000 households per week, above the 1,500-household pilot capacity by 500. This is a demand hypothesis, not validated enrollment.",
      "recommendation": "Test route-level demand and prioritize underserved neighborhoods before allocating capacity.",
      "risks": [
        "Survey interest can overstate attendance.",
        "A route may miss households with mobility barriers."
      ],
      "impactLens": "Measure distinct households with better food access each week, and do not count repeat visits as extra families. Check whether stops reach the households with the least transportation.",
      "brainstorm": "How would you choose which neighborhoods the route should serve first?"
    },
    "rubricNotes": [
      "Uses all 100,000 households as demand.",
      "Applies one of the two filters, or mixes weekly and total figures.",
      "Gets 2,000 households a week and compares that with the 1,500 capacity.",
      "Level 3, plus treats demand as a hypothesis to validate (for example, with trial stops) and prioritizes the most underserved neighborhoods."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market sizing primer",
        "url": "/academy/learn/market-sizing"
      }
    ]
  },
  {
    "id": "repair-demand",
    "slug": "repair-demand",
    "title": "How large is the local device-repair market?",
    "client": "FixLoop, a fictional consumer repair shop",
    "sector": "Commercial",
    "caseType": "Market sizing",
    "difficulty": "Beginner",
    "minutes": 25,
    "track": "Interview fundamentals",
    "brief": "FixLoop, a fictional phone and laptop repair shop, is deciding whether to hire a second technician. With two technicians it could handle 2,400 jobs a year. The owner wants to know how big the local repair market is first.",
    "objective": "Estimate annual repair jobs and compare demand with a 2,400-job shop capacity.",
    "facts": [
      "Assume 50,000 people with an average of 1.5 eligible devices each.",
      "Each eligible device generates 0.04 paid repair jobs a year, including repeat jobs.",
      "FixLoop completed about 900 jobs last year; two other shops and a big-box store’s repair counter compete for the rest."
    ],
    "question": "How many paid repair jobs does the local market generate a year, and does that justify a second technician?",
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
        "answer": "Estimate annual repair jobs and compare demand with a 2,400-job shop capacity."
      },
      {
        "topics": [
          "population",
          "people",
          "residents"
        ],
        "answer": "Assume 50,000 people."
      },
      {
        "topics": [
          "devices",
          "phones",
          "laptops",
          "per"
        ],
        "answer": "Each person has about 1.5 eligible devices."
      },
      {
        "topics": [
          "repair",
          "rate",
          "breakage",
          "broken",
          "jobs"
        ],
        "answer": "Each device generates 0.04 paid repair jobs a year."
      },
      {
        "topics": [
          "capacity",
          "technician",
          "hire",
          "staff"
        ],
        "answer": "With two technicians the shop could handle 2,400 jobs a year."
      },
      {
        "topics": [
          "competitors",
          "competition",
          "share",
          "current",
          "last"
        ],
        "answer": "FixLoop did about 900 jobs last year. Two other shops and a big-box repair counter compete for the rest."
      },
      {
        "topics": [
          "warranty",
          "manufacturer"
        ],
        "answer": "Warranty repairs go to manufacturers and are already excluded from the 0.04 rate."
      }
    ],
    "exhibits": [
      {
        "title": "Annual demand inputs",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Driver",
            "Value",
            "Unit"
          ],
          [
            "Population",
            "50,000",
            "People"
          ],
          [
            "Devices per person",
            "1.5",
            "Devices/person"
          ],
          [
            "Paid repairs per device",
            "0.04",
            "Jobs/device/year"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Population × devices per person = installed device base.",
        "Device base × annual repair rate = annual jobs.",
        "Compare the market with capacity, then ask what share FixLoop can realistically win."
      ],
      "math": [
        "Installed eligible base = 50,000 × 1.5 = 75,000 devices.",
        "Annual demand = 75,000 × 0.04 = 3,000 jobs.",
        "Current share = 900 ÷ 3,000 = 30%. Filling 2,400 jobs would require 80% (2,400 ÷ 3,000)."
      ],
      "modelAnswer": "The market is about 3,000 paid repair jobs a year. FixLoop did about 900 last year, a 30% share. Filling two technicians’ 2,400-job capacity would take 80% of the market, which is unrealistic with three competitors.",
      "recommendation": "Do not hire a full-time second technician yet. Add part-time hours or an overflow arrangement, and revisit if FixLoop’s share rises toward 50%.",
      "risks": [
        "Device age affects failure rates.",
        "Warranty repairs may bypass this shop."
      ],
      "impactLens": "Track devices kept in use through affordable repair, but do not assume every repair avoids a new purchase or electronic waste.",
      "brainstorm": "How could FixLoop grow its share of the local market?"
    },
    "rubricNotes": [
      "Compares 50,000 people directly with 2,400 jobs.",
      "Gets 3,000 jobs but compares it with capacity as if FixLoop wins them all.",
      "Gets 3,000 jobs, uses the current 30% share, and shows 2,400 would need 80%.",
      "Level 3, plus a lower-risk staffing option and a trigger for hiring."
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
    "id": "campus-meals",
    "slug": "campus-meals",
    "title": "How many prepaid lunches could a campus service sell?",
    "client": "LunchLane, a fictional campus meal service",
    "sector": "Commercial",
    "caseType": "Market sizing",
    "difficulty": "Intermediate",
    "minutes": 35,
    "track": "Interview fundamentals",
    "brief": "LunchLane, a fictional meal service, wants to sell prepaid lunch subscriptions on a large campus. It has access to a shared kitchen that can produce 5,000 meals a week. Before signing the kitchen contract, the founders want an estimate of weekly demand.",
    "objective": "Estimate weekly paid lunches and assess a 5,000-meal weekly kitchen limit.",
    "facts": [
      "There are 20,000 students, 60% on campus at lunch.",
      "25% of on-campus students are addressable customers; 40% of those subscribe.",
      "Subscribers order three meals weekly; scenario adoption is 25% rather than 40%."
    ],
    "question": "How many lunches a week would subscribers buy, and how does that compare with kitchen capacity in the base and downside cases?",
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
        "answer": "Estimate weekly paid lunches and assess a 5,000-meal weekly kitchen limit."
      },
      {
        "topics": [
          "students",
          "enrollment",
          "population"
        ],
        "answer": "There are 20,000 students."
      },
      {
        "topics": [
          "campus",
          "lunch",
          "on",
          "location"
        ],
        "answer": "60% are on campus at lunchtime."
      },
      {
        "topics": [
          "addressable",
          "target",
          "plan",
          "interested"
        ],
        "answer": "25% of on-campus students have no meal plan and are interested in the service."
      },
      {
        "topics": [
          "adoption",
          "subscribe",
          "uptake",
          "subscription"
        ],
        "answer": "40% of addressable students subscribe in the base case; 25% in the downside."
      },
      {
        "topics": [
          "meals",
          "frequency",
          "week",
          "often"
        ],
        "answer": "Subscribers order three meals a week."
      },
      {
        "topics": [
          "kitchen",
          "capacity",
          "limit"
        ],
        "answer": "The kitchen can produce 5,000 meals a week."
      },
      {
        "topics": [
          "price",
          "cost",
          "margin",
          "profit"
        ],
        "answer": "The planned price is $9 a meal; costs have not been estimated yet."
      },
      {
        "topics": [
          "semester",
          "summer",
          "breaks",
          "weeks"
        ],
        "answer": "Plan on 30 teaching weeks a year."
      }
    ],
    "exhibits": [
      {
        "title": "Funnel",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Driver",
            "Base",
            "Unit"
          ],
          [
            "Students",
            "20,000",
            "People"
          ],
          [
            "On-campus at lunch",
            "60%",
            "Share"
          ],
          [
            "Addressable",
            "25%",
            "Share of on-campus"
          ],
          [
            "Subscription adoption",
            "40%",
            "Share of addressable"
          ]
        ]
      },
      {
        "title": "Frequency and downside",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Driver",
            "Base",
            "Downside"
          ],
          [
            "Meals per subscriber per week",
            "3",
            "3"
          ],
          [
            "Adoption",
            "40%",
            "25%"
          ],
          [
            "Kitchen capacity",
            "5,000 meals/week",
            "5,000 meals/week"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Students × on-campus share × addressable share = target students.",
        "Target students × adoption × meals per week = weekly meals.",
        "Compare base and downside demand with the 5,000-meal kitchen."
      ],
      "math": [
        "Addressable students = 20,000 × 60% × 25% = 3,000.",
        "Base subscribers = 3,000 × 40% = 1,200; demand = 3,600 meals/week.",
        "Downside = 3,000 × 25% × 3 = 2,250 meals/week."
      ],
      "modelAnswer": "Base demand is 3,600 meals weekly, or 72% of capacity; downside is 2,250, or 45%. Neither estimate establishes profitability.",
      "recommendation": "Use prepaid trial orders to validate demand; request unit contribution and fixed costs before a launch decision.",
      "risks": [
        "Subscriptions may replace existing purchases.",
        "Term-time patterns do not hold all year."
      ],
      "impactLens": "If LunchLane promotes healthier eating, find out what subscribers ate before. Replacing an existing cafeteria meal adds less value than feeding students who were skipping lunch.",
      "brainstorm": "How could LunchLane validate demand before committing to the kitchen contract?"
    },
    "rubricNotes": [
      "Multiplies 20,000 students by three meals.",
      "Applies the funnel but mixes up subscribers and meals.",
      "Gets 3,600 meals in the base case (72% of capacity) and 2,250 in the downside (45%).",
      "Level 3, plus a validation step (prepaid trial orders) and a note that utilization does not prove profitability."
    ],
    "furtherReading": [
      {
        "title": "Learn: Market sizing primer",
        "url": "/academy/learn/market-sizing"
      }
    ]
  },
  {
    "id": "mentoring-outcomes",
    "slug": "mentoring-outcomes",
    "title": "Which mentoring outcome should the board trust?",
    "client": "NextStep, a fictional youth mentoring nonprofit",
    "sector": "Education & youth",
    "caseType": "Impact measurement",
    "difficulty": "Intermediate",
    "minutes": 35,
    "track": "Social impact core",
    "brief": "NextStep, a fictional youth mentoring nonprofit, ran a one-year pilot pairing 100 middle schoolers with adult mentors. A funder will pay to expand if the board can show that at least 60% of enrolled students became more engaged in school. Staff say the pilot succeeded because 70% of survey respondents reported improvement.",
    "objective": "Assess whether a 100-participant pilot justifies expansion based on attendance and school engagement.",
    "facts": [
      "100 students enrolled; 80 completed at least 75% of mentoring sessions.",
      "Among 60 survey respondents, 42 report improved school engagement. Of the 40 nonrespondents, 15 did not complete the program.",
      "The funder wants evidence of improvement for at least 60% of enrolled students. No comparison group exists."
    ],
    "question": "Does the evidence show the pilot met the funder’s 60% bar, and what should NextStep measure next?",
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
        "answer": "Assess whether a 100-participant pilot justifies expansion based on attendance and school engagement."
      },
      {
        "topics": [
          "enrolled",
          "students",
          "participants"
        ],
        "answer": "100 students enrolled."
      },
      {
        "topics": [
          "completed",
          "attendance",
          "sessions",
          "completion"
        ],
        "answer": "80 students completed at least 75% of sessions."
      },
      {
        "topics": [
          "survey",
          "respondents",
          "response",
          "responded"
        ],
        "answer": "60 students responded to the survey."
      },
      {
        "topics": [
          "improved",
          "engagement",
          "outcome",
          "results"
        ],
        "answer": "42 respondents reported improved school engagement."
      },
      {
        "topics": [
          "nonrespondents",
          "missing",
          "nonresponse"
        ],
        "answer": "Of the 40 nonrespondents, 15 did not complete the program."
      },
      {
        "topics": [
          "comparison",
          "control",
          "baseline",
          "pre"
        ],
        "answer": "There is no comparison group and no pre-pilot engagement measure."
      },
      {
        "topics": [
          "board",
          "funder",
          "bar",
          "target",
          "threshold"
        ],
        "answer": "The funder wants improvement for at least 60% of enrolled students."
      }
    ],
    "exhibits": [
      {
        "title": "Participation",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Measure",
            "Count",
            "Denominator"
          ],
          [
            "Enrolled",
            "100",
            "Eligible pilot participants"
          ],
          [
            "Session completers",
            "80",
            "100 enrolled"
          ]
        ]
      },
      {
        "units": "Fictional teaching assumptions; units shown in cells.",
        "title": "Outcome survey",
        "rows": [
          [
            "Measure",
            "Count",
            "Denominator"
          ],
          [
            "Respondents",
            "60",
            "100 enrolled"
          ],
          [
            "Report improved engagement",
            "42",
            "60 respondents"
          ],
          [
            "Nonrespondents",
            "40",
            "100 enrolled"
          ],
          [
            "Nonrespondents who did not complete",
            "15",
            "40 nonrespondents"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Define the outcome and the right denominator: enrolled students.",
        "Separate participation, survey response and reported outcomes.",
        "Bound the result given missing data, then judge attribution."
      ],
      "math": [
        "Completion = 80 ÷ 100 = 80%.",
        "Reported improvement among respondents = 42 ÷ 60 = 70%.",
        "Known improvement among enrolled students = 42 ÷ 100 = 42%; if every nonrespondent improved, the upper bound is 82%.",
        "Nonrespondents skew toward non-completers: 15 of 40 (38%) did not complete, versus 5 of 60 respondents (8%)."
      ],
      "modelAnswer": "No. The 70% figure covers respondents only. Of all 100 enrolled students, only 42 are known to have improved, so the true share lies between 42% and 82%. Nonrespondents are disproportionately non-completers, so the real figure is probably toward the low end. And without a comparison group, improvement cannot be attributed to mentoring.",
      "recommendation": "Follow up with nonrespondents and use consistent pre/post measures before expanding; consider an ethical comparison design.",
      "risks": [
        "Nonresponse may be systematically related to outcomes.",
        "Self-reports and baseline differences limit causal claims."
      ],
      "impactLens": "The outcome is school engagement for all enrolled students, including those who dropped out. Check whether non-completers share barriers, such as transport or family work, that an expanded program should address.",
      "brainstorm": "How could NextStep measure engagement more reliably in the next cohort?"
    },
    "rubricNotes": [
      "Accepts 70% as meeting the 60% bar.",
      "Notes nonresponse but does not compute bounds over enrolled students.",
      "Computes the 42–82% bounds, notes the skew toward non-completers, and flags the lack of a comparison group.",
      "Level 3, plus a concrete design for the next cohort (pre/post measures, school records, nonrespondent follow-up)."
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
    "id": "arts-outcomes",
    "slug": "arts-outcomes",
    "title": "Which arts program creates more sustained participation?",
    "client": "OpenStage, a fictional community arts nonprofit",
    "sector": "Arts & culture",
    "caseType": "Impact measurement",
    "difficulty": "Intermediate",
    "minutes": 35,
    "track": "Social impact core",
    "brief": "OpenStage, a fictional community arts nonprofit, has a $60,000 grant to spend on either large drop-in workshops or small cohorts that meet weekly. The funder cares about people still participating six months later, not one-time attendance.",
    "objective": "Choose how to allocate a $60,000 grant to maximize participants still engaged after six months.",
    "facts": [
      "Each program uses the entire $60,000 budget.",
      "Costs include all delivery and follow-up expenses for this exercise.",
      "Participants are distinct people; retention definitions are the same across both options."
    ],
    "question": "Which option produces more people still engaged at six months per dollar, and how confident can you be?",
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
        "answer": "Choose how to allocate a $60,000 grant to maximize participants still engaged after six months."
      },
      {
        "topics": [
          "budget",
          "grant",
          "cost",
          "costs"
        ],
        "answer": "Each option uses the full $60,000, including delivery and follow-up."
      },
      {
        "topics": [
          "participants",
          "reach",
          "attendance",
          "many"
        ],
        "answer": "Workshops would reach 300 people; cohorts 200."
      },
      {
        "topics": [
          "retention",
          "engaged",
          "sustained",
          "six",
          "months"
        ],
        "answer": "Previous cohorts retained 40% (workshops) and 75% (cohorts) at six months."
      },
      {
        "topics": [
          "evidence",
          "data",
          "previous",
          "confidence"
        ],
        "answer": "Each retention rate comes from one previous cohort."
      },
      {
        "topics": [
          "schedule",
          "time",
          "evening",
          "families",
          "saturday"
        ],
        "answer": "Cohorts meet on weekday evenings; workshops run on Saturdays."
      },
      {
        "topics": [
          "who",
          "demographics",
          "first",
          "new",
          "returning"
        ],
        "answer": "Workshops drew mostly first-time participants; cohorts drew mostly returning ones."
      }
    ],
    "exhibits": [
      {
        "title": "Delivery options",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Option",
            "Participants",
            "Program cost"
          ],
          [
            "Large workshops",
            "300",
            "$60,000"
          ],
          [
            "Small cohorts",
            "200",
            "$60,000"
          ]
        ]
      },
      {
        "units": "Fictional teaching assumptions; units shown in cells.",
        "title": "Six-month outcomes",
        "rows": [
          [
            "Option",
            "Retained share",
            "Evidence limitation"
          ],
          [
            "Large workshops",
            "40%",
            "One previous cohort, mostly first-time participants"
          ],
          [
            "Small cohorts",
            "75%",
            "One previous cohort, mostly returning participants"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Define the outcome: participants still engaged at six months.",
        "Compute retained participants and cost per retained participant.",
        "Judge the evidence and who each option reaches."
      ],
      "math": [
        "Workshop cost per participant = $60,000/300 = $200; cohorts = $60,000/200 = $300.",
        "Retained participants: workshops 300 × 40% = 120; cohorts 200 × 75% = 150.",
        "Cost per retained participant: workshops $500; cohorts $400."
      ],
      "modelAnswer": "Small cohorts reach fewer people but retain 150 versus 120, at $400 versus $500 per retained participant. The catch is who enrolled: cohort participants were mostly returning, so part of their higher retention may reflect who joined rather than the format.",
      "recommendation": "Favor small cohorts under the stated sustained-participation goal; validate the outcomes and preserve accessible entry opportunities.",
      "risks": [
        "Differences in who enrolled can explain retention.",
        "Intensive attendance schedules can exclude working families."
      ],
      "impactLens": "Six-month engagement matters, but so does reaching new people. Workshops bring in more first-timers; a cohort-only model may keep serving people who were already engaged.",
      "brainstorm": "Could a mixed design give OpenStage both reach and retention?"
    },
    "rubricNotes": [
      "Picks workshops because they reach 300 people.",
      "Computes retained participants but not cost per retained participant.",
      "Shows cohorts retain 150 vs 120 at $400 vs $500 each, and questions whether the retention rates transfer.",
      "Level 3, plus addresses the returning-participant bias and proposes a mixed or tested design."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      }
    ]
  },
  {
    "id": "volunteer-shifts",
    "slug": "volunteer-shifts",
    "title": "Can volunteer scheduling cover every delivery shift?",
    "client": "NeighborCart, a fictional volunteer delivery nonprofit",
    "sector": "Food & health",
    "caseType": "Operations",
    "difficulty": "Beginner",
    "minutes": 25,
    "track": "Social impact core",
    "brief": "NeighborCart, a fictional nonprofit, delivers groceries to homebound seniors using volunteers. It needs 60 delivery shifts filled each week and has 80 active volunteers. Last month, several deliveries were missed when volunteers did not show up.",
    "objective": "Cover 60 weekly delivery shifts without exceeding 80 available volunteers.",
    "facts": [
      "One volunteer covers one shift weekly; expected show-up is 80%.",
      "There are 80 available volunteers and no paid backup in the initial model.",
      "Treat attendance as an average; actual daily coverage is uncertain."
    ],
    "question": "How many volunteers should NeighborCart schedule each week, and how should it handle no-shows?",
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
        "answer": "Cover 60 weekly delivery shifts without exceeding 80 available volunteers."
      },
      {
        "topics": [
          "shifts",
          "deliveries",
          "need",
          "required"
        ],
        "answer": "NeighborCart needs 60 delivery shifts filled each week."
      },
      {
        "topics": [
          "volunteers",
          "pool",
          "available",
          "active"
        ],
        "answer": "There are 80 active volunteers; each covers one shift a week."
      },
      {
        "topics": [
          "showup",
          "show",
          "attendance",
          "noshow",
          "absence"
        ],
        "answer": "On average, 80% of scheduled volunteers show up."
      },
      {
        "topics": [
          "paid",
          "backup",
          "staff"
        ],
        "answer": "There is no paid backup in the current model."
      },
      {
        "topics": [
          "missed",
          "seniors",
          "clients",
          "deliveries"
        ],
        "answer": "Six deliveries were missed last month."
      },
      {
        "topics": [
          "weather",
          "exams",
          "season",
          "winter"
        ],
        "answer": "No-shows rise in winter and during exam weeks."
      }
    ],
    "exhibits": [
      {
        "title": "Weekly staffing",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Driver",
            "Value",
            "Unit"
          ],
          [
            "Required filled shifts",
            "60",
            "Shifts/week"
          ],
          [
            "Expected show-up",
            "80%",
            "Share of scheduled"
          ],
          [
            "Available volunteers",
            "80",
            "People"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Required shifts ÷ show-up rate = volunteers to schedule.",
        "Compare with the available pool.",
        "Plan for variation around the average."
      ],
      "math": [
        "Required scheduled volunteers = 60 / 80% = 75.",
        "Remaining recruitment capacity = 80 − 75 = 5 volunteers."
      ],
      "modelAnswer": "Schedule 75 volunteers for 60 expected filled shifts, leaving five available for a reserve pool. Expected coverage is not a guarantee of daily coverage.",
      "recommendation": "Pilot a shift-specific confirmation and reserve process; track missed deliveries and avoid routine overbooking that wastes volunteer time.",
      "risks": [
        "Absences may cluster during exams or bad weather.",
        "Average show-up can conceal a shortage on one shift."
      ],
      "impactLens": "A missed delivery can mean a senior goes without food. Track missed deliveries per week as the key outcome, and avoid overbooking volunteers so often that they burn out.",
      "brainstorm": "What could NeighborCart do to raise the show-up rate or cover gaps?"
    },
    "rubricNotes": [
      "Schedules 60 volunteers for 60 shifts.",
      "Computes 75 scheduled volunteers but ignores the reserve or week-to-week variation.",
      "Gets 75 scheduled and a 5-person reserve, and notes the average hides bad weeks.",
      "Level 3, plus a confirmation and standby process with missed deliveries as the tracked metric."
    ],
    "furtherReading": [
      {
        "title": "Learn: Operations primer",
        "url": "/academy/learn/operations"
      }
    ]
  },
  {
    "id": "board-strategy",
    "slug": "board-strategy",
    "title": "Which growth plan should a nonprofit take to its board?",
    "client": "BridgeHouse, a fictional housing-navigation nonprofit",
    "sector": "Housing & community",
    "caseType": "Market entry & growth",
    "difficulty": "Advanced",
    "minutes": 45,
    "track": "Social impact core",
    "brief": "BridgeHouse, a fictional nonprofit, helps families find and keep stable housing. A foundation has offered $120,000 for one year if at least 80 households are still housed after six months. The board must choose between expanding its own navigators and training community partners to deliver the program.",
    "objective": "Recommend a one-year strategy within $120,000 to support at least 80 households in sustaining housing for six months.",
    "facts": [
      "Option A expands direct navigation; option B trains community partners.",
      "Use projected sustained-housing rates as planning assumptions, not proven effects.",
      "The board needs a three-slide decision brief: recommendation, evidence, and implementation gates."
    ],
    "question": "Which option should BridgeHouse recommend to its board, and what would the three-slide brief say?",
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
        "answer": "Recommend a one-year strategy within $120,000 to support at least 80 households in sustaining housing for six months."
      },
      {
        "topics": [
          "options",
          "option",
          "direct",
          "partners"
        ],
        "answer": "Option A expands direct navigators; option B trains community partners."
      },
      {
        "topics": [
          "budget",
          "cost",
          "grant"
        ],
        "answer": "The grant is $120,000. Option A uses all of it; option B uses $108,000."
      },
      {
        "topics": [
          "households",
          "served",
          "reach",
          "many"
        ],
        "answer": "A would serve 120 households; B 180."
      },
      {
        "topics": [
          "housed",
          "sustained",
          "outcome",
          "rate",
          "rates"
        ],
        "answer": "Exhibit 2 gives base and downside sustained-housing rates. Treat them as planning assumptions."
      },
      {
        "topics": [
          "readiness",
          "partner",
          "mou"
        ],
        "answer": "Partners have given verbal interest only."
      },
      {
        "topics": [
          "evidence",
          "pilot",
          "data",
          "proof"
        ],
        "answer": "A is based on a small prior pilot of 25 households; B on an estimate from another city."
      },
      {
        "topics": [
          "board",
          "presentation",
          "slides",
          "brief"
        ],
        "answer": "The board wants three slides: recommendation, evidence and implementation gates."
      },
      {
        "topics": [
          "housing",
          "supply",
          "rents",
          "market",
          "vacancy"
        ],
        "answer": "Rental vacancy is under 3%, which limits placements under either option."
      }
    ],
    "exhibits": [
      {
        "title": "Annual delivery",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Option",
            "Households served",
            "Total budget"
          ],
          [
            "A: direct navigation",
            "120",
            "$120,000"
          ],
          [
            "B: partner training",
            "180",
            "$108,000"
          ]
        ]
      },
      {
        "title": "Projected outcomes",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Option",
            "Base sustained-housing rate",
            "Downside rate"
          ],
          [
            "A",
            "70%",
            "60%"
          ],
          [
            "B",
            "50%",
            "35%"
          ]
        ]
      },
      {
        "title": "Readiness evidence",
        "units": "Fictional teaching assumptions; units shown in cells.",
        "rows": [
          [
            "Factor",
            "A",
            "B"
          ],
          [
            "Delivery partner",
            "Existing team",
            "Verbal interest only"
          ],
          [
            "Reach",
            "Current neighborhoods",
            "Wider geography"
          ],
          [
            "Outcome evidence",
            "Small prior pilot",
            "Unvalidated transfer estimate"
          ]
        ]
      }
    ],
    "solution": {
      "structure": [
        "Define the outcome: households still housed at six months.",
        "Compute outcomes and cost per outcome in the base and downside cases.",
        "Weigh readiness evidence and design implementation gates."
      ],
      "math": [
        "A base sustained households = 120 × 70% = 84; cost per outcome ≈ $1,428.57.",
        "B base = 180 × 50% = 90; cost per outcome = $1,200.",
        "Downside: A = 72; B = 63. Neither meets the 80-household goal in the downside.",
        "B has $12,000 budget headroom, but no quantified benefit from spending it; do not assume it rescues outcomes."
      ],
      "modelAnswer": "B looks more efficient in the base case, but its partnership and outcomes are less certain. A conditional direct-delivery pilot is defensible; neither strategy guarantees the goal.",
      "recommendation": "Present a conditional A recommendation with outcome and staffing checkpoints; cost a partner pilot before committing the full program. A well-supported conditional B recommendation can also score well.",
      "risks": [
        "Selection effects can bias the small pilot.",
        "Housing supply may constrain both options regardless of execution."
      ],
      "impactLens": "The outcome is families staying housed. Check who each option reaches: partners may reach families in areas BridgeHouse does not serve today, which could matter as much as the headline rate.",
      "brainstorm": "Could a hybrid of A and B reach 80 households with less risk?"
    },
    "rubricNotes": [
      "Picks B because it serves more households.",
      "Computes base outcomes but not the downside or cost per outcome.",
      "Computes base and downside outcomes for both, notes neither guarantees 80 in the downside, and weighs readiness.",
      "Level 3, plus a clear three-slide structure with a decision, evidence and gates (such as partner MOUs and six-month outcome checks)."
    ],
    "furtherReading": [
      {
        "title": "Learn: Social sector toolkit primer",
        "url": "/academy/learn/social-sector"
      }
    ]
  }
];
