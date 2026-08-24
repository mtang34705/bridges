export const questionsData = [
  {
    id: "q1",
    topic: "Currency & Compound Operations",
    text: "A multi-national retailer moves €150,000 to a UK subsidiary at an exchange rate of £1 = €1.20. One month later, the UK team returns the remaining cash after spending exactly £25,000. If the new exchange rate is £1 = €1.25, how many Euros does the parent company receive back?",
    options: [
      { val: "A", label: "€125,000" },
      { val: "B", label: "€131,250" },
      { val: "C", label: "€156,250" },
      { val: "D", label: "€120,000" }
    ],
    correctAnswer: "B",
    explanation: "Initial conversion: €150,000 / 1.20 = £125,000. Remaining balance after spending: £125,000 - £25,000 = £100,000. Re-conversion back to Euros at new rate: £100,000 × 1.25 = €125,000."
  },
  {
    id: "q2",
    topic: "Multi-Column Grid Allocation",
    text: "Review the quarterly divisional operating costs below (£ in thousands). If Division B targets a 15% flat cost reduction across Q3 based on its Q2 baseline, what is its maximum allowable operating cost for Q3?",
    table: {
      headers: ["Division", "Q1 Cost (£k)", "Q2 Cost (£k)"],
      rows: [
        ["Division A", "450", "480"],
        ["Division B", "620", "580"],
        ["Division C", "310", "340"]
      ]
    },
    options: [
      { val: "A", label: "£493,000" },
      { val: "B", label: "£527,000" },
      { val: "C", label: "£408,000" },
      { val: "D", label: "£510,000" }
    ],
    correctAnswer: "A",
    explanation: "Division B Q2 baseline is £580k. A 15% reduction means keeping 85% of costs: 580 × 0.85 = 493. Thus, maximum allowed cost is £493,000."
  },
  {
    id: "q3",
    topic: "Gross Profit Margin Target",
    text: "A hardware manufacturing run costs £45 per unit to build. If the sales department must maintain a strict Gross Profit Margin of exactly 40% based on the final sales price, what target wholesale selling price must be set for each unit?",
    options: [
      { val: "A", label: "£63.00" },
      { val: "B", label: "£75.00" },
      { val: "C", label: "£112.50" },
      { val: "D", label: "£54.00" }
    ],
    correctAnswer: "B",
    explanation: "Profit margin is based on selling price, not cost price. Formula: Selling Price = Cost / (1 - Margin Rate). SP = 45 / (1 - 0.40) = 45 / 0.60 = £75.00."
  },
  {
    id: "q4",
    topic: "Compound Allocation Shift",
    text: "An investment fund manages £8,000,000 split across Tech (45%), Energy (35%), and Cash (20%). If the Tech portfolio grows by 20%, the Energy portfolio drops by 10%, and the Cash asset value stays flat, what is the new total value of the investment fund?",
    options: [
      { val: "A", label: "£8,440,000" },
      { val: "B", label: "£8,800,000" },
      { val: "C", label: "£8,320,000" },
      { val: "D", label: "£8,640,000" }
    ],
    correctAnswer: "A",
    explanation: "Initial splits: Tech = £3.6M, Energy = £2.8M, Cash = £1.6M. Tech shifts: 3.6 × 1.20 = £4.32M. Energy shifts: 2.8 × 0.90 = £2.52M. Total value: 4.32M + 2.52M + 1.6M = £8.44M."
  },
  {
    id: "q5",
    topic: "Compound Weight Average",
    text: "A supply company buys raw material in three separate production batches: 200kg at £4.50/kg, 500kg at £4.00/kg, and 300kg at £5.20/kg. What is the true weighted average cost per kilogram across the total stock profile?",
    options: [
      { val: "A", label: "£4.57/kg" },
      { val: "B", label: "£4.46/kg" },
      { val: "C", label: "£4.50/kg" },
      { val: "D", label: "£4.38/kg" }
    ],
    correctAnswer: "B",
    explanation: "Total spend calculation: (200 × 4.5) + (500 × 4) + (300 × 5.2) = 900 + 2000 + 1560 = £4,460. Total mass: 200 + 500 + 300 = 1,000kg. Weighted Average: 4,460 / 1,000 = £4.46/kg."
  }
];
