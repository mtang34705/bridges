export interface TestOption {
    val: 'A' | 'B' | 'C' | 'D';
    label: string;
}

export interface TestQuestion {
    id: string;
    topic: string;
    text: string;
    options: TestOption[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
}

export type TestsRepositoryType = Record<string, TestQuestion[]>;

export const testsRepository: TestsRepositoryType = {
    test1: [
        {
            id: "t1q1",
            topic: "Sovereign Yield Spread",
            text: "Country A's 10-year sovereign bond yield shifts from 3.25% to 4.10%, while Country B's benchmark yield moves from 1.80% to 2.15% over the same fiscal period. What is the net change in the yield spread between Country A and Country B measured in basis points (bps)?",
            options: [
                { val: "A", label: "50 bps" },
                { val: "B", label: "85 bps" },
                { val: "C", label: "35 bps" },
                { val: "D", label: "145 bps" }
            ],
            correctAnswer: "A",
            explanation: "Initial spread = 3.25% - 1.80% = 1.45% (145 bps). New spread = 4.10% - 2.15% = 1.95% (195 bps). Net increase = 195 - 145 = 50 basis points."
        },
        {
            id: "t1q2",
            topic: "Venture Equity Dilution",
            text: "A startup founder owns 60% of a company with 1,200,000 outstanding shares. A Series A funding round issues 300,000 entirely new shares to incoming investors. If no options pool expansion occurs, what is the founder's post-dilution equity ownership percentage?",
            options: [
                { val: "A", label: "45.0%" },
                { val: "B", label: "48.0%" },
                { val: "C", label: "50.0%" },
                { val: "D", label: "52.5%" }
            ],
            correctAnswer: "B",
            explanation: "Founder owns 60% of 1,200,000 = 720,000 shares. New total shares pool = 1,200,000 + 300,000 = 1,500,000. New equity percentage = 720,000 / 1,500,000 = 0.48 or 48.0%."
        },
        {
            id: "t1q3",
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
            id: "t1q4",
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
        },
        {
            id: "t1q5",
            topic: "Currency Arbitrage Spread",
            text: "An institutional desk buys $5,000,000 USD, converts it to Japanese Yen (JPY) at $1 = ¥150, then swaps the JPY proceeds back to Euros (EUR) at €1 = ¥160. If the current direct EUR/USD quote sits at €1 = $1.10, what is the arbitrage profit if they execute a final swap back into USD?",
            options: [
                { val: "A", label: "$156,250" },
                { val: "B", label: "$210,500" },
                { val: "C", label: "$132,000" },
                { val: "D", label: "$95,000" }
            ],
            correctAnswer: "A",
            explanation: "$5,000,000 * 150 = ¥750,000,000 JPY. ¥750,000,000 / 160 = €4,687,500 EUR. €4,687,500 * 1.10 = $5,156,250 USD. Net arbitrage yield = $5,156,250 - $5,000,000 = $156,250."
        },
        {
            id: "t1q6",
            topic: "Inventory Turnover Velocity",
            text: "A manufacturing firm lists Cost of Goods Sold (COGS) at £2,400,000. Its opening inventory baseline was £350,000, while its closing inventory balance finished at £450,000. What is the company's average inventory turnover days outstanding (using a standard 365-day metric)?",
            options: [
                { val: "A", label: "53.2 Days" },
                { val: "B", label: "60.8 Days" },
                { val: "C", label: "68.4 Days" },
                { val: "D", label: "45.6 Days" }
            ],
            correctAnswer: "B",
            explanation: "Average Inventory = (£350,000 + £450,000) / 2 = £400,000. Inventory Turnover Ratio = 2,400,000 / 400,000 = 6.0 turns per year. Days outstanding = 365 / 6 = 60.83 days."
        },
        {
            id: "t1q7",
            topic: "Capex ROI Payback Threshold",
            text: "A factory deploys an automation unit for £600,000 that creates annual structural cost rollbacks of £140,000. What is the nominal, un-discounted payback threshold period for this setup?",
            options: [
                { val: "A", label: "4.28 Years" },
                { val: "B", label: "4.85 Years" },
                { val: "C", label: "5.10 Years" },
                { val: "D", label: "3.90 Years" }
            ],
            correctAnswer: "A",
            explanation: "Nominal Payback Period = Capex / Annual Savings = 600,000 / 140,000 = 4.285 Years."
        },
        {
            id: "t1q8",
            topic: "Per Capita Revenue Shift Matrices",
            text: "A digital desk generates £18,000,000 over a user population footprint of 120,000. If revenue climbs 10% next year while subscriber counts contract by 5%, what is the adjusted average revenue per user (ARPU)?",
            options: [
                { val: "A", label: "£165.40" },
                { val: "B", label: "£173.68" },
                { val: "C", label: "£150.00" },
                { val: "D", label: "£182.20" }
            ],
            correctAnswer: "B",
            explanation: "New Revenue = 18M * 1.1 = 19.8M. New User Baseline = 120k * 0.95 = 114k. New ARPU = 19,800,000 / 114,000 = £173.68."
        },
        {
            id: "t1q9",
            topic: "Asset Liquidity Coverage",
            text: "A corporate balance sheet tracks £450k cash, £1.2M short-term marketable paper, and £800k illiquid stock, against current liabilities totaling £1.1M. What is the calculated quick ratio (acid-test ratio)?",
            options: [
                { val: "A", label: "1.50" },
                { val: "B", label: "2.22" },
                { val: "C", label: "1.05" },
                { val: "D", label: "1.36" }
            ],
            correctAnswer: "A",
            explanation: "Quick Assets exclude inventory = Cash (£450k) + Liquid Paper (£1.2M) = £1.65M. Quick Ratio = 1,650,000 / 1,100,000 = 1.50."
        },
        {
            id: "t1q10",
            topic: "Defective Yield Optimization Checks",
            text: "An assembly run of 14,000 units displays an initial component failure profile of 4.5%. A testing sweep detects and successfully re-works 60% of these flaws. What is the final operational yield percentage?",
            options: [
                { val: "A", label: "97.3%" },
                { val: "B", label: "98.2%" },
                { val: "C", label: "96.4%" },
                { val: "D", label: "95.5%" }
            ],
            correctAnswer: "B",
            explanation: "Initial defects = 14,000 * 0.045 = 630 units. Fixed components = 630 * 0.60 = 378. Remaining flaws = 630 - 378 = 252. Yield = (14,000 - 252) / 14,000 = 98.2%."
        }
    ],
    test2: [
        {
            id: "t2q1",
            topic: "Capital Asset Pricing Model (CAPM)",
            text: "An investment asset shows a beta coefficient of 1.4. The risk-free benchmark asset yield sits at 3.5%, while the overall market return index registers 9.5%. Calculate the required rate of return.",
            options: [
                { val: "A", label: "11.9%" },
                { val: "B", label: "13.5%" },
                { val: "C", label: "10.4%" },
                { val: "D", label: "12.8%" }
            ],
            correctAnswer: "A",
            explanation: "Return = RiskFree + Beta * (MarketReturn - RiskFree) = 3.5% + 1.4 * (9.5% - 3.5%) = 3.5% + 8.4% = 11.9%."
        },
        {
            id: "t2q2",
            topic: "Operating Cash Flow (OCF) Aggregates",
            text: "A tech vendor reports Net Income of £850,000. Non-cash depreciation charges are £120,000, accounts receivable increased by £45,000, and inventory accounts fell by £15,000. Calculate the operating cash flow.",
            options: [
                { val: "A", label: "£940,000" },
                { val: "B", label: "£910,000" },
                { val: "C", label: "£880,000" },
                { val: "D", label: "£970,000" }
            ],
            correctAnswer: "A",
            explanation: "OCF = Net Income + Depreciation - Increase in Receivables + Decrease in Inventory = 850,000 + 120,000 - 45,000 + 15,000 = £940,000."
        },
        {
            id: "t2q3",
            topic: "Gross Profit Margin Target Mechanics",
            text: "A manufacturing unit costs £120 to construct. If sales directors implement a strict Gross Profit Margin target matching exactly 40% based on final unit retail pricing, calculate the absolute point-of-sale adjustment over cost.",
            options: [
                { val: "A", label: "£80.00" },
                { val: "B", label: "£48.00" },
                { val: "C", label: "£50.00" },
                { val: "D", label: "£65.00" }
            ],
            correctAnswer: "A",
            explanation: "Retail Price = 120 / (1 - 0.40) = £200. Absolute adjustment over cost = £200 - £120 = £80.00."
        },
        {
            id: "t2q4",
            topic: "Weighted Cost of Capital (WACC)",
            text: "A firm's structural capital funding profile maps to 60% equity assets and 40% corporate debt line items. If cost of equity trends at 10% and post-tax cost of debt settles at 5%, compute baseline WACC.",
            options: [
                { val: "A", label: "8.0%" },
                { val: "B", label: "7.5%" },
                { val: "C", label: "8.5%" },
                { val: "D", label: "7.0%" }
            ],
            correctAnswer: "A",
            explanation: "WACC = (Weight Equity * Cost Equity) + (Weight Debt * Cost Debt) = (0.60 * 10%) + (0.40 * 5%) = 6.0% + 2.0% = 8.0%."
        }, {
            id: "t2q5", topic: "Dividend Discount Model Execution",
            text: "An enterprise expects to issue a £3.00 per share dividend next year, which will grow at a stable compound rate of 5% indefinitely. If your equity hurdle rate requires a 9% return, what is the fair price limit?", options: [{ val: "A", label: "£75.00" }, { val: "B", label: "£60.00" }, { val: "C", label: "£50.00" }, { val: "D", label: "£100.00" }], correctAnswer: "A", explanation: "Value = Dividend / (Discount Rate - Growth Rate) = 3.00 / (0.09 - 0.05) = 3.00 / 0.04 = £75.00."
        },
        { id: "t2q6", topic: "Compound Annual Growth Matrix", text: "A digital portfolio scales metrics from an initial valuation of £2.0M up to £4.5M across 2 compound cycles. Extract the exact performance velocity per period indicator.", options: [{ val: "A", label: "50.0%" }, { val: "B", label: "45.0%" }, { val: "C", text: "37.5%", label: "37.5%" }, { val: "D", label: "22.5%" }], correctAnswer: "A", explanation: "Velocity compound rate check: 2.0 * (1 + Growth)^2 = 4.5 -> (1 + Growth)^2 = 2.25 -> 1 + Growth = 1.5 -> Growth = 50.0%." },
        { id: "t2q7", topic: "Price Elasticity Midpoint Analysis", text: "Subscription packages compress cost indices down from £20 to £16. Volume counts simultaneously expand from 50k items to 65k items. Calculate the precise price elasticity using the midpoint rule.", options: [{ val: "A", label: "-1.17" }, { val: "B", label: "-0.95" }, { val: "C", label: "-1.35" }, { val: "D", label: "-0.82" }], correctAnswer: "A", explanation: "% Change Volume = 15k / 57.5k = 26.09%. % Change Price = -4 / 18 = -22.22%. Elasticity index = 26.09% / -22.22% = -1.17." },
        { id: "t2q8", topic: "Operating Leverage Factor Shifts", text: "A sales unit drives volume shifts across operations. If fixed costs track at £300,000 and variable costs stay flat at 40% of standard gross receipts, analyze the target break-even milestone revenue.", options: [{ val: "A", label: "£500,000" }, { val: "B", label: "£450,000" }, { val: "C", label: "£600,000" }, { val: "D", label: "£750,000" }], correctAnswer: "A", explanation: "Break-even Revenue = Fixed Costs / Contribution Margin Ratio = 300,000 / (1 - 0.40) = 300,000 / 0.60 = £500,000." },
        { id: "t2q9", topic: "Amortisation Declining Mechanics", text: "An automation system costing £80,000 undergoes double-declining balance write-offs tracking at a 25% yearly rate. Determine the balance evaluation entry exactly at the completion of Year 2.", options: [{ val: "A", label: "£45,000" }, { val: "B", label: "£50,000" }, { val: "C", label: "£60,000" }, { val: "D", label: "£40,000" }], correctAnswer: "A", explanation: "Year 1 write-off = 25% of 80k = 20k (Value = 60k). Year 2 write-off = 25% of 60k = 15k. Residual asset value = 60k - 15k = £45,000." },
        { id: "t2q10", topic: "Retention Rate Growth Formulas", text: "An enterprise records Return on Equity (ROE) indicators tracking at exactly 15%. If management distributes 40% of its net earnings as shareholder dividends, what is the sustainable growth rate score?", options: [{ val: "A", label: "9.0%" }, { val: "B", label: "6.0%" }, { val: "C", label: "10.5%" }, { val: "D", label: "7.5%" }], correctAnswer: "A", explanation: "Retention Rate = 100% - Dividend Payout = 100% - 40% = 60%. Sustainable Growth Rate = ROE * Retention Rate = 15% * 0.60 = 9.0%." }]
};