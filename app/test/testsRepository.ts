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
            "id": "nrq1",
            "topic": "Percent Change",
            "text": "A value increases from 80 to 100. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "20%" },
                { "val": "B", "label": "25%" },
                { "val": "C", "label": "15%" },
                { "val": "D", "label": "30%" }
            ],
            "correctAnswer": "B",
            "explanation": "(100 - 80) / 80 = 0.25 → 25%."
        },

        {
            "id": "nrq2",
            "topic": "Ratios",
            "text": "A recipe uses flour and sugar in a 3:2 ratio. If you use 12 units of flour, how much sugar is needed?",
            "options": [
                { "val": "A", "label": "6" },
                { "val": "B", "label": "8" },
                { "val": "C", "label": "10" },
                { "val": "D", "label": "12" }
            ],
            "correctAnswer": "B",
            "explanation": "Flour ratio 3→12 means ×4. Sugar ratio 2×4 = 8."
        },

        {
            "id": "nrq3",
            "topic": "Simple Interest",
            "text": "£500 earns simple interest at 4% per year for 3 years. What is the total interest?",
            "options": [
                { "val": "A", "label": "£40" },
                { "val": "B", "label": "£50" },
                { "val": "C", "label": "£60" },
                { "val": "D", "label": "£80" }
            ],
            "correctAnswer": "C",
            "explanation": "Interest = 500 × 0.04 × 3 = £60."
        },

        {
            "id": "nrq4",
            "topic": "Averages",
            "text": "The numbers 6, 10, 14, and 20 have an average of:",
            "options": [
                { "val": "A", "label": "10" },
                { "val": "B", "label": "12.5" },
                { "val": "C", "label": "13" },
                { "val": "D", "label": "15" }
            ],
            "correctAnswer": "B",
            "explanation": "(6+10+14+20) = 50 → 50/4 = 12.5."
        },

        {
            "id": "nrq5",
            "topic": "Sequences",
            "text": "What is the next number in the sequence: 4, 7, 10, 13, ...?",
            "options": [
                { "val": "A", "label": "15" },
                { "val": "B", "label": "16" },
                { "val": "C", "label": "17" },
                { "val": "D", "label": "18" }
            ],
            "correctAnswer": "B",
            "explanation": "Sequence increases by 3 each step → 13 + 3 = 16."
        },

        {
            "id": "nrq6",
            "topic": "Probability",
            "text": "A bag contains 3 red balls and 7 blue balls. What is the probability of drawing a red ball?",
            "options": [
                { "val": "A", "label": "0.1" },
                { "val": "B", "label": "0.2" },
                { "val": "C", "label": "0.3" },
                { "val": "D", "label": "0.5" }
            ],
            "correctAnswer": "C",
            "explanation": "3 red out of 10 total → 3/10 = 0.3."
        },

        {
            "id": "nrq7",
            "topic": "Unit Conversion",
            "text": "Convert 2.5 kilometres into metres.",
            "options": [
                { "val": "A", "label": "1500 m" },
                { "val": "B", "label": "2000 m" },
                { "val": "C", "label": "2500 m" },
                { "val": "D", "label": "3000 m" }
            ],
            "correctAnswer": "C",
            "explanation": "1 km = 1000 m → 2.5 km = 2500 m."
        },

        {
            "id": "nrq8",
            "topic": "Proportions",
            "text": "If 5 machines produce 200 units per hour, how many units do 8 machines produce (same rate)?",
            "options": [
                { "val": "A", "label": "240" },
                { "val": "B", "label": "300" },
                { "val": "C", "label": "320" },
                { "val": "D", "label": "360" }
            ],
            "correctAnswer": "C",
            "explanation": "Rate per machine = 200/5 = 40 → 8×40 = 320."
        },

        {
            "id": "nrq9",
            "topic": "Fractions",
            "text": "What is 3/4 of 120?",
            "options": [
                { "val": "A", "label": "80" },
                { "val": "B", "label": "85" },
                { "val": "C", "label": "90" },
                { "val": "D", "label": "100" }
            ],
            "correctAnswer": "C",
            "explanation": "120 × 0.75 = 90."
        },

        {
            "id": "nrq10",
            "topic": "Compound Growth",
            "text": "A value grows from 100 to 121 over 2 compound periods. What is the per‑period growth rate?",
            "options": [
                { "val": "A", "label": "5%" },
                { "val": "B", "label": "10%" },
                { "val": "C", "label": "15%" },
                { "val": "D", "label": "20%" }
            ],
            "correctAnswer": "B",
            "explanation": "100 × (1+g)^2 = 121 → (1+g)^2 = 1.21 → g = 10%."
        }
    ],
    test2: [
        {
            "id": "nrq11",
            "topic": "Percentage of a Value",
            "text": "What is 15% of 200?",
            "options": [
                { "val": "A", "label": "20" },
                { "val": "B", "label": "25" },
                { "val": "C", "label": "30" },
                { "val": "D", "label": "35" }
            ],
            "correctAnswer": "C",
            "explanation": "200 × 0.15 = 30."
        },

        {
            "id": "nrq12",
            "topic": "Ratio Scaling",
            "text": "A ratio of 4:1 is scaled so the first term becomes 20. What is the second term?",
            "options": [
                { "val": "A", "label": "4" },
                { "val": "B", "label": "5" },
                { "val": "C", "label": "6" },
                { "val": "D", "label": "8" }
            ],
            "correctAnswer": "B",
            "explanation": "4→20 is ×5, so 1×5 = 5."
        },

        {
            "id": "nrq13",
            "topic": "Speed & Distance",
            "text": "A cyclist travels 24 km in 2 hours. What is their average speed?",
            "options": [
                { "val": "A", "label": "10 km/h" },
                { "val": "B", "label": "12 km/h" },
                { "val": "C", "label": "14 km/h" },
                { "val": "D", "label": "16 km/h" }
            ],
            "correctAnswer": "B",
            "explanation": "Speed = 24 ÷ 2 = 12 km/h."
        },

        {
            "id": "nrq14",
            "topic": "Basic Algebra",
            "text": "Solve for x: 3x + 6 = 21.",
            "options": [
                { "val": "A", "label": "4" },
                { "val": "B", "label": "5" },
                { "val": "C", "label": "6" },
                { "val": "D", "label": "7" }
            ],
            "correctAnswer": "B",
            "explanation": "3x = 15 → x = 5."
        },

        {
            "id": "nrq15",
            "topic": "Mean Average",
            "text": "Find the mean of 9, 12, 15, and 24.",
            "options": [
                { "val": "A", "label": "14" },
                { "val": "B", "label": "15" },
                { "val": "C", "label": "16" },
                { "val": "D", "label": "18" }
            ],
            "correctAnswer": "B",
            "explanation": "(9+12+15+24) = 60 → 60/4 = 15."
        },

        {
            "id": "nrq16",
            "topic": "Multiplicative Reasoning",
            "text": "A quantity is reduced by 25%. If the original value was 160, what is the new value?",
            "options": [
                { "val": "A", "label": "120" },
                { "val": "B", "label": "125" },
                { "val": "C", "label": "130" },
                { "val": "D", "label": "140" }
            ],
            "correctAnswer": "A",
            "explanation": "160 × 0.75 = 120."
        },

        {
            "id": "nrq17",
            "topic": "Currency Conversion",
            "text": "If £1 = €1.20, how many euros is £50?",
            "options": [
                { "val": "A", "label": "55" },
                { "val": "B", "label": "60" },
                { "val": "C", "label": "65" },
                { "val": "D", "label": "70" }
            ],
            "correctAnswer": "B",
            "explanation": "50 × 1.20 = 60."
        },
        {
            "id": "nrq18",
            "topic": "Area Calculation",
            "text": "A rectangle has width 8 and height 6. What is its area?",
            "options": [
                { "val": "A", "label": "36" },
                { "val": "B", "label": "40" },
                { "val": "C", "label": "44" },
                { "val": "D", "label": "48" }
            ],
            "correctAnswer": "D",
            "explanation": "Area = 8 × 6 = 48."
        },

        {
            "id": "nrq19",
            "topic": "Probability",
            "text": "A fair die is rolled. What is the probability of rolling a number greater than 4?",
            "options": [
                { "val": "A", "label": "1/6" },
                { "val": "B", "label": "2/6" },
                { "val": "C", "label": "3/6" },
                { "val": "D", "label": "4/6" }
            ],
            "correctAnswer": "B",
            "explanation": "Numbers >4 are 5 and 6 → 2 outcomes out of 6."
        },

        {
            "id": "nrq20",
            "topic": "Compound Interest",
            "text": "£200 grows to £242 over 2 compound periods. What is the per‑period growth rate?",
            "options": [
                { "val": "A", "label": "5%" },
                { "val": "B", "label": "10%" },
                { "val": "C", "label": "20%" },
                { "val": "D", "label": "25%" }
            ],
            "correctAnswer": "B",
            "explanation": "200 × (1+g)^2 = 242 → (1+g)^2 = 1.21 → g = 10%."
        }
    ]
};