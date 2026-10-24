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
            "id": "nrq201",
            "topic": "Percent Change",
            "text": "A value increases from 150 to 195. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "20%" },
                { "val": "B", "label": "25%" },
                { "val": "C", "label": "30%" },
                { "val": "D", "label": "35%" }
            ],
            "correctAnswer": "C",
            "explanation": "(195 - 150) / 150 = 0.30 → 30%."
        },
        {
            "id": "nrq202",
            "topic": "Ratios",
            "text": "A recipe uses oil and vinegar in a 4:1 ratio. If you use 16 units of oil, how much vinegar is needed?",
            "options": [
                { "val": "A", "label": "3" },
                { "val": "B", "label": "4" },
                { "val": "C", "label": "5" },
                { "val": "D", "label": "6" }
            ],
            "correctAnswer": "B",
            "explanation": "4→16 is ×4, so 1×4 = 4."
        },
        {
            "id": "nrq203",
            "topic": "Averages",
            "text": "Find the mean of 12, 18, 20, and 30.",
            "options": [
                { "val": "A", "label": "18" },
                { "val": "B", "label": "20" },
                { "val": "C", "label": "21" },
                { "val": "D", "label": "22" }
            ],
            "correctAnswer": "B",
            "explanation": "(12+18+20+30)=80 → 80/4=20."
        },
        {
            "id": "nrq204",
            "topic": "Sequences",
            "text": "Next number: 5, 11, 17, 23, ...",
            "options": [
                { "val": "A", "label": "27" },
                { "val": "B", "label": "28" },
                { "val": "C", "label": "29" },
                { "val": "D", "label": "30" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 6 → 23+6=29."
        },
        {
            "id": "nrq205",
            "topic": "Probability",
            "text": "A bag contains 2 red, 5 blue, and 3 green balls. Probability of drawing blue?",
            "options": [
                { "val": "A", "label": "0.3" },
                { "val": "B", "label": "0.4" },
                { "val": "C", "label": "0.5" },
                { "val": "D", "label": "0.6" }
            ],
            "correctAnswer": "C",
            "explanation": "5/10 = 0.5."
        },
        {
            "id": "nrq206",
            "topic": "Unit Conversion",
            "text": "Convert 3.6 kilometres into metres.",
            "options": [
                { "val": "A", "label": "3600 m" },
                { "val": "B", "label": "3000 m" },
                { "val": "C", "label": "3200 m" },
                { "val": "D", "label": "3800 m" }
            ],
            "correctAnswer": "A",
            "explanation": "3.6×1000=3600."
        },
        {
            "id": "nrq207",
            "topic": "Fractions",
            "text": "What is 2/5 of 250?",
            "options": [
                { "val": "A", "label": "80" },
                { "val": "B", "label": "90" },
                { "val": "C", "label": "100" },
                { "val": "D", "label": "110" }
            ],
            "correctAnswer": "C",
            "explanation": "250×0.4=100."
        },
        {
            "id": "nrq208",
            "topic": "Simple Interest",
            "text": "£1,200 at 5% for 2 years. Total interest?",
            "options": [
                { "val": "A", "label": "£100" },
                { "val": "B", "label": "£110" },
                { "val": "C", "label": "£120" },
                { "val": "D", "label": "£130" }
            ],
            "correctAnswer": "C",
            "explanation": "1200×0.05×2=120."
        },
        {
            "id": "nrq209",
            "topic": "Area",
            "text": "A rectangle has width 9 and height 14. Area?",
            "options": [
                { "val": "A", "label": "108" },
                { "val": "B", "label": "120" },
                { "val": "C", "label": "126" },
                { "val": "D", "label": "140" }
            ],
            "correctAnswer": "C",
            "explanation": "9×14=126."
        },
        {
            "id": "nrq210",
            "topic": "Speed & Distance",
            "text": "A cyclist travels 45 km in 1.5 hours. Speed?",
            "options": [
                { "val": "A", "label": "25 km/h" },
                { "val": "B", "label": "28 km/h" },
                { "val": "C", "label": "30 km/h" },
                { "val": "D", "label": "32 km/h" }
            ],
            "correctAnswer": "C",
            "explanation": "45/1.5=30."
        }
    ],
    test2:
        [
            {
                "id": "nrq211",
                "topic": "Algebra",
                "text": "Solve: 7x - 14 = 35.",
                "options": [
                    { "val": "A", "label": "5" },
                    { "val": "B", "label": "6" },
                    { "val": "C", "label": "7" },
                    { "val": "D", "label": "8" }
                ],
                "correctAnswer": "C",
                "explanation": "7x=49 → x=7."
            },
            {
                "id": "nrq212",
                "topic": "Proportions",
                "text": "If 8 workers complete a job in 16 hours, how long would 4 workers take?",
                "options": [
                    { "val": "A", "label": "20 hours" },
                    { "val": "B", "label": "24 hours" },
                    { "val": "C", "label": "28 hours" },
                    { "val": "D", "label": "32 hours" }
                ],
                "correctAnswer": "D",
                "explanation": "Half workers → double time → 16×2=32."
            },
            {
                "id": "nrq213",
                "topic": "Percent Change",
                "text": "A value decreases from 900 to 720. Percentage decrease?",
                "options": [
                    { "val": "A", "label": "15%" },
                    { "val": "B", "label": "18%" },
                    { "val": "C", "label": "20%" },
                    { "val": "D", "label": "25%" }
                ],
                "correctAnswer": "C",
                "explanation": "180/900=0.20."
            },
            {
                "id": "nrq214",
                "topic": "Ratios",
                "text": "A ratio of 6:5 is scaled so the first term becomes 30. Second term?",
                "options": [
                    { "val": "A", "label": "20" },
                    { "val": "B", "label": "24" },
                    { "val": "C", "label": "25" },
                    { "val": "D", "label": "28" }
                ],
                "correctAnswer": "C",
                "explanation": "6→30 is ×5 → 5×5=25."
            },
            {
                "id": "nrq215",
                "topic": "Averages",
                "text": "Mean of 16, 20, 24, 28?",
                "options": [
                    { "val": "A", "label": "20" },
                    { "val": "B", "label": "22" },
                    { "val": "C", "label": "24" },
                    { "val": "D", "label": "26" }
                ],
                "correctAnswer": "B",
                "explanation": "(16+20+24+28)=88 → 88/4=22."
            },
            {
                "id": "nrq216",
                "topic": "Sequences",
                "text": "Next number: 4, 10, 16, 22, ...",
                "options": [
                    { "val": "A", "label": "26" },
                    { "val": "B", "label": "27" },
                    { "val": "C", "label": "28" },
                    { "val": "D", "label": "29" }
                ],
                "correctAnswer": "C",
                "explanation": "Increase by 6 → 22+6=28."
            },
            {
                "id": "nrq217",
                "topic": "Probability",
                "text": "A fair die is rolled. Probability of rolling an even number?",
                "options": [
                    { "val": "A", "label": "1/6" },
                    { "val": "B", "label": "2/6" },
                    { "val": "C", "label": "3/6" },
                    { "val": "D", "label": "4/6" }
                ],
                "correctAnswer": "C",
                "explanation": "2,4,6 → 3 outcomes."
            },
            {
                "id": "nrq218",
                "topic": "Unit Conversion",
                "text": "Convert 2.8 litres into millilitres.",
                "options": [
                    { "val": "A", "label": "280 ml" },
                    { "val": "B", "label": "2800 ml" },
                    { "val": "C", "label": "3000 ml" },
                    { "val": "D", "label": "3200 ml" }
                ],
                "correctAnswer": "B",
                "explanation": "2.8×1000=2800."
            },
            {
                "id": "nrq219",
                "topic": "Fractions",
                "text": "What is 3/8 of 200?",
                "options": [
                    { "val": "A", "label": "60" },
                    { "val": "B", "label": "70" },
                    { "val": "C", "label": "75" },
                    { "val": "D", "label": "80" }
                ],
                "correctAnswer": "C",
                "explanation": "200×3/8=75."
            },
            {
                "id": "nrq220",
                "topic": "Simple Interest",
                "text": "£500 at 6% for 2 years. Interest?",
                "options": [
                    { "val": "A", "label": "£50" },
                    { "val": "B", "label": "£55" },
                    { "val": "C", "label": "£60" },
                    { "val": "D", "label": "£65" }
                ],
                "correctAnswer": "C",
                "explanation": "500×0.06×2=60."
            }
        ],

    test3: [
        {
            "id": "nrq221",
            "topic": "Area",
            "text": "A triangle has base 14 and height 9. Area?",
            "options": [
                { "val": "A", "label": "54" },
                { "val": "B", "label": "63" },
                { "val": "C", "label": "70" },
                { "val": "D", "label": "84" }
            ],
            "correctAnswer": "B",
            "explanation": "½×14×9=63."
        },
        {
            "id": "nrq222",
            "topic": "Volume",
            "text": "A cube has side length 5. Volume?",
            "options": [
                { "val": "A", "label": "100" },
                { "val": "B", "label": "110" },
                { "val": "C", "label": "125" },
                { "val": "D", "label": "150" }
            ],
            "correctAnswer": "C",
            "explanation": "5³=125."
        },
        {
            "id": "nrq223",
            "topic": "Speed & Distance",
            "text": "A runner covers 12 km in 48 minutes. Speed?",
            "options": [
                { "val": "A", "label": "12 km/h" },
                { "val": "B", "label": "13 km/h" },
                { "val": "C", "label": "14 km/h" },
                { "val": "D", "label": "15 km/h" }
            ],
            "correctAnswer": "D",
            "explanation": "48 min = 0.8 h → 12/0.8=15."
        },
        {
            "id": "nrq224",
            "topic": "Algebra",
            "text": "Solve: 9x + 18 = 45.",
            "options": [
                { "val": "A", "label": "3" },
                { "val": "B", "label": "4" },
                { "val": "C", "label": "5" },
                { "val": "D", "label": "6" }
            ],
            "correctAnswer": "A",
            "explanation": "9x=27 → x=3."
        },
        {
            "id": "nrq225",
            "topic": "Proportions",
            "text": "If 15 machines produce 600 units, how many do 9 machines produce?",
            "options": [
                { "val": "A", "label": "320" },
                { "val": "B", "label": "340" },
                { "val": "C", "label": "360" },
                { "val": "D", "label": "380" }
            ],
            "correctAnswer": "C",
            "explanation": "600/15=40 → 9×40=360."
        },
        {
            "id": "nrq226",
            "topic": "Percent Change",
            "text": "A price rises from £50 to £65. Percentage increase?",
            "options": [
                { "val": "A", "label": "20%" },
                { "val": "B", "label": "25%" },
                { "val": "C", "label": "30%" },
                { "val": "D", "label": "35%" }
            ],
            "correctAnswer": "C",
            "explanation": "15/50=0.30."
        },
        {
            "id": "nrq227",
            "topic": "Ratios",
            "text": "A ratio of 8:3 is scaled so the first term becomes 40. Second term?",
            "options": [
                { "val": "A", "label": "12" },
                { "val": "B", "label": "15" },
                { "val": "C", "label": "18" },
                { "val": "D", "label": "20" }
            ],
            "correctAnswer": "B",
            "explanation": "8→40 is ×5 → 3×5=15."
        },
        {
            "id": "nrq228",
            "topic": "Averages",
            "text": "Mean of 10, 20, 30, 40?",
            "options": [
                { "val": "A", "label": "20" },
                { "val": "B", "label": "25" },
                { "val": "C", "label": "30" },
                { "val": "D", "label": "35" }
            ],
            "correctAnswer": "B",
            "explanation": "(10+20+30+40)=100 → 100/4=25."
        },
        {
            "id": "nrq229",
            "topic": "Sequences",
            "text": "Next number: 3, 9, 15, 21, ...",
            "options": [
                { "val": "A", "label": "25" },
                { "val": "B", "label": "26" },
                { "val": "C", "label": "27" },
                { "val": "D", "label": "28" }
            ],
            "correctAnswer": "C",
            "explanation": "Sequence increases by 6 each step → 21 + 6 = 27."
        }
        ,
        {
            "id": "nrq230",
            "topic": "Probability",
            "text": "A box contains 6 black, 2 white, and 2 red balls. What is the probability of drawing a white ball?",
            "options": [
                { "val": "A", "label": "0.1" },
                { "val": "B", "label": "0.15" },
                { "val": "C", "label": "0.2" },
                { "val": "D", "label": "0.25" }
            ],
            "correctAnswer": "C",
            "explanation": "2 white out of 10 total → 2/10 = 0.2."
        }
    ],
    test4: [
        {
            "id": "nrq231",
            "topic": "Speed & Distance",
            "text": "A car travels 240 km in 4 hours. What is its average speed?",
            "options": [
                { "val": "A", "label": "50 km/h" },
                { "val": "B", "label": "55 km/h" },
                { "val": "C", "label": "60 km/h" },
                { "val": "D", "label": "65 km/h" }
            ],
            "correctAnswer": "C",
            "explanation": "240 ÷ 4 = 60 km/h."
        },
        {
            "id": "nrq232",
            "topic": "Algebra",
            "text": "Solve for x: 6x + 12 = 48.",
            "options": [
                { "val": "A", "label": "5" },
                { "val": "B", "label": "6" },
                { "val": "C", "label": "7" },
                { "val": "D", "label": "8" }
            ],
            "correctAnswer": "B",
            "explanation": "6x = 36 → x = 6."
        },
        {
            "id": "nrq233",
            "topic": "Proportions",
            "text": "If 12 workers produce 360 units, how many units do 5 workers produce?",
            "options": [
                { "val": "A", "label": "120" },
                { "val": "B", "label": "130" },
                { "val": "C", "label": "140" },
                { "val": "D", "label": "150" }
            ],
            "correctAnswer": "D",
            "explanation": "360 ÷ 12 = 30 per worker → 5 × 30 = 150."
        },
        {
            "id": "nrq234",
            "topic": "Percent Change",
            "text": "A value increases from 400 to 460. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "10%" },
                { "val": "B", "label": "12%" },
                { "val": "C", "label": "15%" },
                { "val": "D", "label": "20%" }
            ],
            "correctAnswer": "C",
            "explanation": "60 ÷ 400 = 0.15 → 15%."
        },
        {
            "id": "nrq235",
            "topic": "Ratios",
            "text": "A ratio of 9:2 is scaled so the first term becomes 45. What is the second term?",
            "options": [
                { "val": "A", "label": "8" },
                { "val": "B", "label": "9" },
                { "val": "C", "label": "10" },
                { "val": "D", "label": "12" }
            ],
            "correctAnswer": "C",
            "explanation": "9 → 45 is ×5 → 2 × 5 = 10."
        },
        {
            "id": "nrq236",
            "topic": "Averages",
            "text": "Find the mean of 6, 14, 22, and 30.",
            "options": [
                { "val": "A", "label": "16" },
                { "val": "B", "label": "17" },
                { "val": "C", "label": "18" },
                { "val": "D", "label": "19" }
            ],
            "correctAnswer": "C",
            "explanation": "(6 + 14 + 22 + 30) = 72 → 72 ÷ 4 = 18."
        },
        {
            "id": "nrq237",
            "topic": "Sequences",
            "text": "Next number: 10, 17, 24, 31, ...",
            "options": [
                { "val": "A", "label": "36" },
                { "val": "B", "label": "37" },
                { "val": "C", "label": "38" },
                { "val": "D", "label": "39" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 7 → 31 + 7 = 38."
        },
        {
            "id": "nrq238",
            "topic": "Probability",
            "text": "A bag contains 4 red, 4 blue, and 2 green balls. What is the probability of drawing a green ball?",
            "options": [
                { "val": "A", "label": "0.1" },
                { "val": "B", "label": "0.15" },
                { "val": "C", "label": "0.2" },
                { "val": "D", "label": "0.25" }
            ],
            "correctAnswer": "C",
            "explanation": "2 out of 10 → 0.2."
        },
        {
            "id": "nrq239",
            "topic": "Unit Conversion",
            "text": "Convert 0.75 kilometres into metres.",
            "options": [
                { "val": "A", "label": "650 m" },
                { "val": "B", "label": "700 m" },
                { "val": "C", "label": "750 m" },
                { "val": "D", "label": "800 m" }
            ],
            "correctAnswer": "C",
            "explanation": "0.75 × 1000 = 750."
        },
        {
            "id": "nrq240",
            "topic": "Fractions",
            "text": "What is 5/6 of 180?",
            "options": [
                { "val": "A", "label": "140" },
                { "val": "B", "label": "145" },
                { "val": "C", "label": "150" },
                { "val": "D", "label": "160" }
            ],
            "correctAnswer": "C",
            "explanation": "180 × (5/6) = 150."
        }
    ]
    ,
    test5: [
        {
            "id": "nrq241",
            "topic": "Percent Change",
            "text": "A value increases from 320 to 368. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "12%" },
                { "val": "B", "label": "14%" },
                { "val": "C", "label": "15%" },
                { "val": "D", "label": "18%" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase = 48 → 48/320 = 0.15 → 15%."
        },
        {
            "id": "nrq242",
            "topic": "Ratios",
            "text": "A mixture contains water and syrup in a 5:3 ratio. If there are 25 units of water, how much syrup is needed?",
            "options": [
                { "val": "A", "label": "10" },
                { "val": "B", "label": "12" },
                { "val": "C", "label": "15" },
                { "val": "D", "label": "18" }
            ],
            "correctAnswer": "C",
            "explanation": "5→25 is ×5 → 3×5 = 15."
        },
        {
            "id": "nrq243",
            "topic": "Averages",
            "text": "Find the mean of 9, 15, 21, and 27.",
            "options": [
                { "val": "A", "label": "18" },
                { "val": "B", "label": "19" },
                { "val": "C", "label": "20" },
                { "val": "D", "label": "21" }
            ],
            "correctAnswer": "A",
            "explanation": "(9+15+21+27)=72 → 72/4=18."
        },
        {
            "id": "nrq244",
            "topic": "Sequences",
            "text": "Next number: 7, 13, 19, 25, ...",
            "options": [
                { "val": "A", "label": "29" },
                { "val": "B", "label": "30" },
                { "val": "C", "label": "31" },
                { "val": "D", "label": "32" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 6 → 25+6=31."
        },
        {
            "id": "nrq245",
            "topic": "Probability",
            "text": "A bag contains 3 red, 4 blue, and 3 yellow balls. What is the probability of drawing a blue ball?",
            "options": [
                { "val": "A", "label": "0.3" },
                { "val": "B", "label": "0.4" },
                { "val": "C", "label": "0.5" },
                { "val": "D", "label": "0.6" }
            ],
            "correctAnswer": "B",
            "explanation": "4 out of 10 → 0.4."
        },
        {
            "id": "nrq246",
            "topic": "Unit Conversion",
            "text": "Convert 4.2 kilometres into metres.",
            "options": [
                { "val": "A", "label": "4200 m" },
                { "val": "B", "label": "4000 m" },
                { "val": "C", "label": "4500 m" },
                { "val": "D", "label": "4600 m" }
            ],
            "correctAnswer": "A",
            "explanation": "4.2×1000=4200."
        },
        {
            "id": "nrq247",
            "topic": "Fractions",
            "text": "What is 4/5 of 175?",
            "options": [
                { "val": "A", "label": "130" },
                { "val": "B", "label": "135" },
                { "val": "C", "label": "140" },
                { "val": "D", "label": "150" }
            ],
            "correctAnswer": "C",
            "explanation": "175×0.8=140."
        },
        {
            "id": "nrq248",
            "topic": "Simple Interest",
            "text": "£900 at 3% for 4 years. Total interest?",
            "options": [
                { "val": "A", "label": "£90" },
                { "val": "B", "label": "£100" },
                { "val": "C", "label": "£108" },
                { "val": "D", "label": "£120" }
            ],
            "correctAnswer": "C",
            "explanation": "900×0.03×4=108."
        },
        {
            "id": "nrq249",
            "topic": "Area",
            "text": "A rectangle has width 15 and height 8. What is its area?",
            "options": [
                { "val": "A", "label": "100" },
                { "val": "B", "label": "110" },
                { "val": "C", "label": "120" },
                { "val": "D", "label": "130" }
            ],
            "correctAnswer": "C",
            "explanation": "15×8=120."
        },
        {
            "id": "nrq250",
            "topic": "Speed & Distance",
            "text": "A train travels 180 km in 2 hours. What is its average speed?",
            "options": [
                { "val": "A", "label": "70 km/h" },
                { "val": "B", "label": "80 km/h" },
                { "val": "C", "label": "85 km/h" },
                { "val": "D", "label": "90 km/h" }
            ],
            "correctAnswer": "D",
            "explanation": "180 ÷ 2 = 90 km/h."
        }
    ]
    , test6: [
        {
            "id": "nrq251",
            "topic": "Percent Change",
            "text": "A value decreases from 500 to 425. What is the percentage decrease?",
            "options": [
                { "val": "A", "label": "12%" },
                { "val": "B", "label": "13%" },
                { "val": "C", "label": "15%" },
                { "val": "D", "label": "20%" }
            ],
            "correctAnswer": "C",
            "explanation": "Decrease = 75 → 75/500 = 0.15 → 15%."
        },
        {
            "id": "nrq252",
            "topic": "Ratios",
            "text": "A ratio of 3:8 is scaled so the first term becomes 21. What is the second term?",
            "options": [
                { "val": "A", "label": "48" },
                { "val": "B", "label": "52" },
                { "val": "C", "label": "56" },
                { "val": "D", "label": "60" }
            ],
            "correctAnswer": "C",
            "explanation": "3→21 is ×7 → 8×7 = 56."
        },
        {
            "id": "nrq253",
            "topic": "Averages",
            "text": "Find the mean of 18, 24, 30, and 42.",
            "options": [
                { "val": "A", "label": "26" },
                { "val": "B", "label": "28" },
                { "val": "C", "label": "29" },
                { "val": "D", "label": "30" }
            ],
            "correctAnswer": "B",
            "explanation": "(18+24+30+42)=114 → 114/4=28.5."
        },
        {
            "id": "nrq254",
            "topic": "Sequences",
            "text": "Next number: 14, 20, 26, 32, ...",
            "options": [
                { "val": "A", "label": "36" },
                { "val": "B", "label": "37" },
                { "val": "C", "label": "38" },
                { "val": "D", "label": "39" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 6 → 32+6=38."
        },
        {
            "id": "nrq255",
            "topic": "Probability",
            "text": "A bag contains 5 red, 3 blue, and 2 green balls. What is the probability of drawing a red ball?",
            "options": [
                { "val": "A", "label": "0.3" },
                { "val": "B", "label": "0.4" },
                { "val": "C", "label": "0.5" },
                { "val": "D", "label": "0.6" }
            ],
            "correctAnswer": "C",
            "explanation": "5 out of 10 → 0.5."
        },
        {
            "id": "nrq256",
            "topic": "Unit Conversion",
            "text": "Convert 2.3 kilometres into metres.",
            "options": [
                { "val": "A", "label": "2100 m" },
                { "val": "B", "label": "2200 m" },
                { "val": "C", "label": "2300 m" },
                { "val": "D", "label": "2400 m" }
            ],
            "correctAnswer": "C",
            "explanation": "2.3×1000=2300."
        },
        {
            "id": "nrq257",
            "topic": "Fractions",
            "text": "What is 7/10 of 140?",
            "options": [
                { "val": "A", "label": "90" },
                { "val": "B", "label": "95" },
                { "val": "C", "label": "98" },
                { "val": "D", "label": "100" }
            ],
            "correctAnswer": "C",
            "explanation": "140×0.7=98."
        },
        {
            "id": "nrq258",
            "topic": "Simple Interest",
            "text": "£1,500 at 4% for 3 years. Total interest?",
            "options": [
                { "val": "A", "label": "£150" },
                { "val": "B", "label": "£160" },
                { "val": "C", "label": "£170" },
                { "val": "D", "label": "£180" }
            ],
            "correctAnswer": "D",
            "explanation": "1500×0.04×3=180."
        },
        {
            "id": "nrq259",
            "topic": "Area",
            "text": "A rectangle has width 11 and height 9. What is its area?",
            "options": [
                { "val": "A", "label": "90" },
                { "val": "B", "label": "95" },
                { "val": "C", "label": "99" },
                { "val": "D", "label": "110" }
            ],
            "correctAnswer": "C",
            "explanation": "11×9=99."
        },
        {
            "id": "nrq260",
            "topic": "Speed & Distance",
            "text": "A bus travels 96 km in 1.5 hours. What is its average speed?",
            "options": [
                { "val": "A", "label": "50 km/h" },
                { "val": "B", "label": "55 km/h" },
                { "val": "C", "label": "60 km/h" },
                { "val": "D", "label": "64 km/h" }
            ],
            "correctAnswer": "D",
            "explanation": "96 ÷ 1.5 = 64 km/h."
        }
    ]
    , test7: [
        {
            "id": "nrq261",
            "topic": "Percent Change",
            "text": "A value increases from 240 to 300. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "20%" },
                { "val": "B", "label": "22%" },
                { "val": "C", "label": "25%" },
                { "val": "D", "label": "30%" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase = 60 → 60/240 = 0.25 → 25%."
        },
        {
            "id": "nrq262",
            "topic": "Ratios",
            "text": "A ratio of 4:7 is scaled so the second term becomes 35. What is the first term?",
            "options": [
                { "val": "A", "label": "15" },
                { "val": "B", "label": "18" },
                { "val": "C", "label": "20" },
                { "val": "D", "label": "25" }
            ],
            "correctAnswer": "C",
            "explanation": "7→35 is ×5 → 4×5 = 20."
        },
        {
            "id": "nrq263",
            "topic": "Averages",
            "text": "Find the mean of 25, 35, 45, and 55.",
            "options": [
                { "val": "A", "label": "35" },
                { "val": "B", "label": "40" },
                { "val": "C", "label": "42" },
                { "val": "D", "label": "45" }
            ],
            "correctAnswer": "B",
            "explanation": "(25+35+45+55)=160 → 160/4=40."
        },
        {
            "id": "nrq264",
            "topic": "Sequences",
            "text": "Next number: 2, 9, 16, 23, ...",
            "options": [
                { "val": "A", "label": "28" },
                { "val": "B", "label": "29" },
                { "val": "C", "label": "30" },
                { "val": "D", "label": "31" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 7 → 23+7=30."
        },
        {
            "id": "nrq265",
            "topic": "Probability",
            "text": "A bag contains 6 red, 2 blue, and 2 green balls. What is the probability of drawing a blue ball?",
            "options": [
                { "val": "A", "label": "0.1" },
                { "val": "B", "label": "0.2" },
                { "val": "C", "label": "0.25" },
                { "val": "D", "label": "0.3" }
            ],
            "correctAnswer": "B",
            "explanation": "2 out of 10 → 0.2."
        },
        {
            "id": "nrq266",
            "topic": "Unit Conversion",
            "text": "Convert 5.4 kilometres into metres.",
            "options": [
                { "val": "A", "label": "5000 m" },
                { "val": "B", "label": "5200 m" },
                { "val": "C", "label": "5400 m" },
                { "val": "D", "label": "5600 m" }
            ],
            "correctAnswer": "C",
            "explanation": "5.4×1000=5400."
        },
        {
            "id": "nrq267",
            "topic": "Fractions",
            "text": "What is 3/7 of 210?",
            "options": [
                { "val": "A", "label": "80" },
                { "val": "B", "label": "85" },
                { "val": "C", "label": "90" },
                { "val": "D", "label": "100" }
            ],
            "correctAnswer": "C",
            "explanation": "210÷7=30 → 30×3=90."
        },
        {
            "id": "nrq268",
            "topic": "Simple Interest",
            "text": "£2,000 at 3% for 4 years. Total interest?",
            "options": [
                { "val": "A", "label": "£200" },
                { "val": "B", "label": "£220" },
                { "val": "C", "label": "£240" },
                { "val": "D", "label": "£260" }
            ],
            "correctAnswer": "C",
            "explanation": "2000×0.03×4=240."
        },
        {
            "id": "nrq269",
            "topic": "Area",
            "text": "A rectangle has width 18 and height 7. What is its area?",
            "options": [
                { "val": "A", "label": "110" },
                { "val": "B", "label": "120" },
                { "val": "C", "label": "126" },
                { "val": "D", "label": "130" }
            ],
            "correctAnswer": "C",
            "explanation": "18×7=126."
        },
        {
            "id": "nrq270",
            "topic": "Speed & Distance",
            "text": "A car travels 150 km in 2.5 hours. What is its average speed?",
            "options": [
                { "val": "A", "label": "50 km/h" },
                { "val": "B", "label": "55 km/h" },
                { "val": "C", "label": "60 km/h" },
                { "val": "D", "label": "65 km/h" }
            ],
            "correctAnswer": "C",
            "explanation": "150 ÷ 2.5 = 60 km/h."
        }
    ]
    , test8: [
        {
            "id": "nrq271",
            "topic": "Percent Change",
            "text": "A value increases from 180 to 225. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "20%" },
                { "val": "B", "label": "22%" },
                { "val": "C", "label": "25%" },
                { "val": "D", "label": "30%" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase = 45 → 45/180 = 0.25 → 25%."
        },
        {
            "id": "nrq272",
            "topic": "Ratios",
            "text": "A ratio of 2:9 is scaled so the second term becomes 45. What is the first term?",
            "options": [
                { "val": "A", "label": "8" },
                { "val": "B", "label": "9" },
                { "val": "C", "label": "10" },
                { "val": "D", "label": "12" }
            ],
            "correctAnswer": "C",
            "explanation": "9→45 is ×5 → 2×5 = 10."
        },
        {
            "id": "nrq273",
            "topic": "Averages",
            "text": "Find the mean of 14, 28, 32, and 46.",
            "options": [
                { "val": "A", "label": "28" },
                { "val": "B", "label": "30" },
                { "val": "C", "label": "31" },
                { "val": "D", "label": "32" }
            ],
            "correctAnswer": "B",
            "explanation": "(14+28+32+46)=120 → 120/4=30."
        },
        {
            "id": "nrq274",
            "topic": "Sequences",
            "text": "Next number: 9, 15, 21, 27, ...",
            "options": [
                { "val": "A", "label": "31" },
                { "val": "B", "label": "32" },
                { "val": "C", "label": "33" },
                { "val": "D", "label": "34" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 6 → 27+6=33."
        },
        {
            "id": "nrq275",
            "topic": "Probability",
            "text": "A bag contains 4 red, 4 blue, and 2 yellow balls. What is the probability of drawing a red ball?",
            "options": [
                { "val": "A", "label": "0.2" },
                { "val": "B", "label": "0.3" },
                { "val": "C", "label": "0.4" },
                { "val": "D", "label": "0.5" }
            ],
            "correctAnswer": "C",
            "explanation": "4 out of 10 → 0.4."
        },
        {
            "id": "nrq276",
            "topic": "Unit Conversion",
            "text": "Convert 6.8 kilometres into metres.",
            "options": [
                { "val": "A", "label": "6600 m" },
                { "val": "B", "label": "6700 m" },
                { "val": "C", "label": "6800 m" },
                { "val": "D", "label": "6900 m" }
            ],
            "correctAnswer": "C",
            "explanation": "6.8×1000=6800."
        },
        {
            "id": "nrq277",
            "topic": "Fractions",
            "text": "What is 5/8 of 240?",
            "options": [
                { "val": "A", "label": "140" },
                { "val": "B", "label": "145" },
                { "val": "C", "label": "150" },
                { "val": "D", "label": "160" }
            ],
            "correctAnswer": "C",
            "explanation": "240×5/8=150."
        },
        {
            "id": "nrq278",
            "topic": "Simple Interest",
            "text": "£1,800 at 2.5% for 4 years. Total interest?",
            "options": [
                { "val": "A", "label": "£160" },
                { "val": "B", "label": "£170" },
                { "val": "C", "label": "£180" },
                { "val": "D", "label": "£200" }
            ],
            "correctAnswer": "C",
            "explanation": "1800×0.025×4=180."
        },
        {
            "id": "nrq279",
            "topic": "Area",
            "text": "A rectangle has width 13 and height 12. What is its area?",
            "options": [
                { "val": "A", "label": "144" },
                { "val": "B", "label": "150" },
                { "val": "C", "label": "156" },
                { "val": "D", "label": "160" }
            ],
            "correctAnswer": "C",
            "explanation": "13×12=156."
        },
        {
            "id": "nrq280",
            "topic": "Speed & Distance",
            "text": "A cyclist travels 72 km in 3 hours. What is their average speed?",
            "options": [
                { "val": "A", "label": "20 km/h" },
                { "val": "B", "label": "22 km/h" },
                { "val": "C", "label": "24 km/h" },
                { "val": "D", "label": "26 km/h" }
            ],
            "correctAnswer": "C",
            "explanation": "72 ÷ 3 = 24 km/h."
        }
    ]
    , test9: [
        {
            "id": "nrq271",
            "topic": "Percent Change",
            "text": "A value increases from 180 to 225. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "20%" },
                { "val": "B", "label": "22%" },
                { "val": "C", "label": "25%" },
                { "val": "D", "label": "30%" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase = 45 → 45/180 = 0.25 → 25%."
        },
        {
            "id": "nrq272",
            "topic": "Ratios",
            "text": "A ratio of 2:9 is scaled so the second term becomes 45. What is the first term?",
            "options": [
                { "val": "A", "label": "8" },
                { "val": "B", "label": "9" },
                { "val": "C", "label": "10" },
                { "val": "D", "label": "12" }
            ],
            "correctAnswer": "C",
            "explanation": "9→45 is ×5 → 2×5 = 10."
        },
        {
            "id": "nrq273",
            "topic": "Averages",
            "text": "Find the mean of 14, 28, 32, and 46.",
            "options": [
                { "val": "A", "label": "28" },
                { "val": "B", "label": "30" },
                { "val": "C", "label": "31" },
                { "val": "D", "label": "32" }
            ],
            "correctAnswer": "B",
            "explanation": "(14+28+32+46)=120 → 120/4=30."
        },
        {
            "id": "nrq274",
            "topic": "Sequences",
            "text": "Next number: 9, 15, 21, 27, ...",
            "options": [
                { "val": "A", "label": "31" },
                { "val": "B", "label": "32" },
                { "val": "C", "label": "33" },
                { "val": "D", "label": "34" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 6 → 27+6=33."
        },
        {
            "id": "nrq275",
            "topic": "Probability",
            "text": "A bag contains 4 red, 4 blue, and 2 yellow balls. What is the probability of drawing a red ball?",
            "options": [
                { "val": "A", "label": "0.2" },
                { "val": "B", "label": "0.3" },
                { "val": "C", "label": "0.4" },
                { "val": "D", "label": "0.5" }
            ],
            "correctAnswer": "C",
            "explanation": "4 out of 10 → 0.4."
        },
        {
            "id": "nrq276",
            "topic": "Unit Conversion",
            "text": "Convert 6.8 kilometres into metres.",
            "options": [
                { "val": "A", "label": "6600 m" },
                { "val": "B", "label": "6700 m" },
                { "val": "C", "label": "6800 m" },
                { "val": "D", "label": "6900 m" }
            ],
            "correctAnswer": "C",
            "explanation": "6.8×1000=6800."
        },
        {
            "id": "nrq277",
            "topic": "Fractions",
            "text": "What is 5/8 of 240?",
            "options": [
                { "val": "A", "label": "140" },
                { "val": "B", "label": "145" },
                { "val": "C", "label": "150" },
                { "val": "D", "label": "160" }
            ],
            "correctAnswer": "C",
            "explanation": "240×5/8=150."
        },
        {
            "id": "nrq278",
            "topic": "Simple Interest",
            "text": "£1,800 at 2.5% for 4 years. Total interest?",
            "options": [
                { "val": "A", "label": "£160" },
                { "val": "B", "label": "£170" },
                { "val": "C", "label": "£180" },
                { "val": "D", "label": "£200" }
            ],
            "correctAnswer": "C",
            "explanation": "1800×0.025×4=180."
        },
        {
            "id": "nrq279",
            "topic": "Area",
            "text": "A rectangle has width 13 and height 12. What is its area?",
            "options": [
                { "val": "A", "label": "144" },
                { "val": "B", "label": "150" },
                { "val": "C", "label": "156" },
                { "val": "D", "label": "160" }
            ],
            "correctAnswer": "C",
            "explanation": "13×12=156."
        },
        {
            "id": "nrq280",
            "topic": "Speed & Distance",
            "text": "A cyclist travels 72 km in 3 hours. What is their average speed?",
            "options": [
                { "val": "A", "label": "20 km/h" },
                { "val": "B", "label": "22 km/h" },
                { "val": "C", "label": "24 km/h" },
                { "val": "D", "label": "26 km/h" }
            ],
            "correctAnswer": "C",
            "explanation": "72 ÷ 3 = 24 km/h."
        }
    ]
    , test10: [
        {
            "id": "nrq291",
            "topic": "Percent Change",
            "text": "A value increases from 420 to 462. What is the percentage increase?",
            "options": [
                { "val": "A", "label": "8%" },
                { "val": "B", "label": "9%" },
                { "val": "C", "label": "10%" },
                { "val": "D", "label": "12%" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase = 42 → 42/420 = 0.10 → 10%."
        },
        {
            "id": "nrq292",
            "topic": "Ratios",
            "text": "A ratio of 7:4 is scaled so the first term becomes 35. What is the second term?",
            "options": [
                { "val": "A", "label": "18" },
                { "val": "B", "label": "20" },
                { "val": "C", "label": "22" },
                { "val": "D", "label": "24" }
            ],
            "correctAnswer": "B",
            "explanation": "7→35 is ×5 → 4×5 = 20."
        },
        {
            "id": "nrq293",
            "topic": "Averages",
            "text": "Find the mean of 32, 36, 40, and 52.",
            "options": [
                { "val": "A", "label": "38" },
                { "val": "B", "label": "40" },
                { "val": "C", "label": "42" },
                { "val": "D", "label": "44" }
            ],
            "correctAnswer": "B",
            "explanation": "(32+36+40+52)=160 → 160/4=40."
        },
        {
            "id": "nrq294",
            "topic": "Sequences",
            "text": "Next number: 15, 22, 29, 36, ...",
            "options": [
                { "val": "A", "label": "41" },
                { "val": "B", "label": "42" },
                { "val": "C", "label": "43" },
                { "val": "D", "label": "44" }
            ],
            "correctAnswer": "C",
            "explanation": "Increase by 7 → 36+7=43."
        },
        {
            "id": "nrq295",
            "topic": "Probability",
            "text": "A bag contains 5 red, 3 blue, and 2 green balls. What is the probability of drawing a green ball?",
            "options": [
                { "val": "A", "label": "0.1" },
                { "val": "B", "label": "0.15" },
                { "val": "C", "label": "0.2" },
                { "val": "D", "label": "0.25" }
            ],
            "correctAnswer": "C",
            "explanation": "2 out of 10 → 0.2."
        },
        {
            "id": "nrq296",
            "topic": "Unit Conversion",
            "text": "Convert 7.25 kilometres into metres.",
            "options": [
                { "val": "A", "label": "7000 m" },
                { "val": "B", "label": "7100 m" },
                { "val": "C", "label": "7250 m" },
                { "val": "D", "label": "7300 m" }
            ],
            "correctAnswer": "C",
            "explanation": "7.25×1000=7250."
        },
        {
            "id": "nrq297",
            "topic": "Fractions",
            "text": "What is 2/3 of 270?",
            "options": [
                { "val": "A", "label": "160" },
                { "val": "B", "label": "170" },
                { "val": "C", "label": "180" },
                { "val": "D", "label": "190" }
            ],
            "correctAnswer": "C",
            "explanation": "270×2/3=180."
        },
        {
            "id": "nrq298",
            "topic": "Simple Interest",
            "text": "£3,000 at 4% for 2 years. Total interest?",
            "options": [
                { "val": "A", "label": "£200" },
                { "val": "B", "label": "£220" },
                { "val": "C", "label": "£240" },
                { "val": "D", "label": "£260" }
            ],
            "correctAnswer": "C",
            "explanation": "3000×0.04×2=240."
        },
        {
            "id": "nrq299",
            "topic": "Area",
            "text": "A rectangle has width 19 and height 8. What is its area?",
            "options": [
                { "val": "A", "label": "140" },
                { "val": "B", "label": "150" },
                { "val": "C", "label": "152" },
                { "val": "D", "label": "160" }
            ],
            "correctAnswer": "C",
            "explanation": "19×8=152."
        },
        {
            "id": "nrq300",
            "topic": "Speed & Distance",
            "text": "A car travels 96 km in 1.2 hours. What is its average speed?",
            "options": [
                { "val": "A", "label": "70 km/h" },
                { "val": "B", "label": "75 km/h" },
                { "val": "C", "label": "80 km/h" },
                { "val": "D", "label": "85 km/h" }
            ],
            "correctAnswer": "C",
            "explanation": "96 ÷ 1.2 = 80 km/h."
        }
    ]




};

const answerLabels: TestOption['val'][] = ['A', 'B', 'C', 'D'];

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(value: number): string {
    return Number.isInteger(value)
        ? value.toLocaleString('en-GB')
        : value.toLocaleString('en-GB', { maximumFractionDigits: 2 });
}

function replaceQuestionNumbers(question: TestQuestion, values: number[]): string {
    let valueIndex = 0;
    return question.text.replace(/\d[\d,]*(?:\.\d+)?/g, () => {
        const value = values[valueIndex++];
        return value === undefined ? '' : formatNumber(value);
    });
}

function formatOption(value: number, template: string): string {
    const prefix = template.match(/^[^\d]*/)?.[0] ?? '';
    const suffix = template.match(/[^\d.,]+$/)?.[0] ?? '';
    return `${prefix}${formatNumber(value)}${suffix}`;
}

function createVariant(
    question: TestQuestion,
    text: string,
    answer: number,
    distractors: number[],
    explanation: string
): TestQuestion {
    const correctOption = question.options.find((option) => option.val === question.correctAnswer);
    const optionTemplate = correctOption?.label ?? '';
    const values = [answer, ...distractors]
        .map((value) => Math.round(value * 100) / 100)
        .filter((value, index, all) => Number.isFinite(value) && all.indexOf(value) === index);

    for (let offset = 1; values.length < answerLabels.length; offset++) {
        const candidate = Math.round((answer + offset * 3) * 100) / 100;
        if (!values.includes(candidate)) values.push(candidate);
    }

    const options = values.slice(0, answerLabels.length)
        .map((value) => ({ value, label: formatOption(value, optionTemplate) }));

    for (let index = options.length - 1; index > 0; index--) {
        const swapIndex = randomInt(0, index);
        [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
    }

    const correctIndex = options.findIndex((option) => option.value === answer);
    return {
        ...question,
        text,
        explanation,
        options: options.map((option, index) => ({
            val: answerLabels[index],
            label: option.label,
        })),
        correctAnswer: answerLabels[correctIndex],
    };
}

function generateQuestionVariantOnce(question: TestQuestion): TestQuestion {
    const numbers = [...question.text.matchAll(/\d[\d,]*(?:\.\d+)?/g)]
        .map(([value]) => Number(value.replace(/,/g, '')));
    const chooseDistractors = (answer: number, gaps: number[] = [5, 10, 15]) =>
        gaps.map((gap, index) => answer + (index % 2 === 0 ? -gap : gap));

    switch (question.topic) {
        case 'Percent Change': {
            if (numbers.length < 2) return question;
            const start = randomInt(20, 200) * 5;
            const percent = randomInt(2, 8) * 5;
            const isDecrease = /decrease/i.test(question.text);
            const end = start * (isDecrease ? 1 - percent / 100 : 1 + percent / 100);
            const text = replaceQuestionNumbers(question, [start, end]);
            const change = isDecrease ? start - end : end - start;
            return createVariant(
                question,
                text,
                percent,
                chooseDistractors(percent, [5, 10, 15]),
                `${formatNumber(change)} ÷ ${formatNumber(start)} = ${formatNumber(percent / 100)} → ${percent}%.`
            );
        }
        case 'Ratios': {
            if (numbers.length < 3) return question;
            const first = randomInt(2, 9);
            const second = randomInt(2, 9);
            const scale = randomInt(2, 8);
            const asksForFirst = /second term becomes|first term\??/i.test(question.text);
            const knownTerm = asksForFirst ? second * scale : first * scale;
            const answer = asksForFirst ? first * scale : second * scale;
            return createVariant(
                question,
                replaceQuestionNumbers(question, [first, second, knownTerm]),
                answer,
                chooseDistractors(answer, [2, 4, 6]),
                `${formatNumber(asksForFirst ? second : first)} → ${formatNumber(knownTerm)} is ×${scale}, so ${formatNumber(asksForFirst ? first : second)} × ${scale} = ${answer}.`
            );
        }
        case 'Averages': {
            if (numbers.length < 4) return question;
            const values = Array.from({ length: 4 }, () => randomInt(10, 60));
            const answer = values.reduce((sum, value) => sum + value, 0) / values.length;
            return createVariant(
                question,
                replaceQuestionNumbers(question, values),
                answer,
                chooseDistractors(answer, [1, 2, 3]),
                `(${values.join(' + ')}) ÷ 4 = ${formatNumber(answer)}.`
            );
        }
        case 'Sequences': {
            if (numbers.length < 4) return question;
            const start = randomInt(2, 20);
            const step = randomInt(2, 9);
            const sequence = [start, start + step, start + 2 * step, start + 3 * step];
            const answer = start + 4 * step;
            return createVariant(
                question,
                replaceQuestionNumbers(question, sequence),
                answer,
                chooseDistractors(answer, [1, 2, 3]),
                `The sequence increases by ${step} each time → ${sequence[3]} + ${step} = ${answer}.`
            );
        }
        case 'Probability': {
            if (/fair die/i.test(question.text)) {
                const sides = randomInt(3, 8) * 2;
                const favorableOutcomes = sides / 2;
                const answer = favorableOutcomes / sides;
                return createVariant(
                    question,
                    `A fair ${sides}-sided die is rolled. Probability of rolling an even number?`,
                    answer,
                    [1 / sides, (favorableOutcomes - 1) / sides, (favorableOutcomes + 1) / sides],
                    `${favorableOutcomes} of ${sides} outcomes are even → ${favorableOutcomes}/${sides} = ${formatNumber(answer)}.`
                );
            }
            if (numbers.length < 3) return question;
            const colorMatch = question.text.match(/drawing\s+(?:a\s+)?(red|blue|green|yellow|black|white)/i);
            if (!colorMatch) return question;
            const targetColor = colorMatch[1].toLowerCase();
            const colors = [...question.text.matchAll(/\b(red|blue|green|yellow|black|white)\b/gi)]
                .map(([color]) => color.toLowerCase())
                .filter((color, index, all) => all.indexOf(color) === index);
            const targetIndex = colors.indexOf(targetColor);
            if (targetIndex < 0 || targetIndex > 2) return question;
            const targetCount = randomInt(1, 8);
            const firstOtherCount = randomInt(1, 9 - targetCount);
            const counts = [0, 0, 0];
            counts[targetIndex] = targetCount;
            counts[(targetIndex + 1) % 3] = firstOtherCount;
            counts[(targetIndex + 2) % 3] = 10 - targetCount - firstOtherCount;
            const answer = targetCount / 10;
            const probabilityDistractors = Array.from({ length: 9 }, (_, index) => (index + 1) / 10)
                .filter((value) => value !== answer)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            return createVariant(
                question,
                replaceQuestionNumbers(question, counts),
                answer,
                probabilityDistractors,
                `${targetCount} out of 10 → ${targetCount}/10 = ${formatNumber(answer)}.`
            );
        }
        case 'Unit Conversion': {
            if (numbers.length < 1) return question;
            const kilometres = randomInt(11, 99) / 10;
            const metres = kilometres * 1000;
            return createVariant(
                question,
                replaceQuestionNumbers(question, [kilometres]),
                metres,
                chooseDistractors(metres, [100, 200, 300]),
                `${formatNumber(kilometres)} × 1000 = ${formatNumber(metres)} m.`
            );
        }
        case 'Fractions': {
            if (numbers.length < 3) return question;
            const numerator = randomInt(2, 7);
            const denominator = randomInt(numerator + 1, 10);
            const amount = denominator * randomInt(10, 40);
            const answer = numerator * amount / denominator;
            return createVariant(
                question,
                replaceQuestionNumbers(question, [numerator, denominator, amount]),
                answer,
                chooseDistractors(answer, [5, 10, 15]),
                `${formatNumber(amount)} ÷ ${denominator} × ${numerator} = ${formatNumber(answer)}.`
            );
        }
        case 'Simple Interest': {
            if (numbers.length < 3) return question;
            const principal = randomInt(5, 50) * 100;
            const rate = [2, 2.5, 3, 4, 5, 6][randomInt(0, 5)];
            const years = randomInt(1, 5);
            const answer = principal * rate / 100 * years;
            return createVariant(
                question,
                replaceQuestionNumbers(question, [principal, rate, years]),
                answer,
                chooseDistractors(answer, [10, 20, 30]),
                `${formatNumber(principal)} × ${formatNumber(rate / 100)} × ${years} = ${formatNumber(answer)}.`
            );
        }
        case 'Area': {
            if (numbers.length < 2) return question;
            const width = randomInt(4, 20);
            const height = randomInt(4, 20);
            const isTriangle = /triangle/i.test(question.text);
            const answer = width * height / (isTriangle ? 2 : 1);
            return createVariant(
                question,
                replaceQuestionNumbers(question, [width, height]),
                answer,
                chooseDistractors(answer, [4, 8, 12]),
                isTriangle
                    ? `½ × ${width} × ${height} = ${formatNumber(answer)}.`
                    : `${width} × ${height} = ${answer}.`
            );
        }
        case 'Volume': {
            if (numbers.length < 1) return question;
            const side = randomInt(2, 10);
            const answer = side ** 3;
            return createVariant(
                question,
                replaceQuestionNumbers(question, [side]),
                answer,
                chooseDistractors(answer, [2, 4, 6]),
                `${side}³ = ${answer}.`
            );
        }
        case 'Speed & Distance': {
            if (numbers.length < 2) return question;
            const speed = randomInt(5, 20) * 5;
            const isMinutes = /minutes?/i.test(question.text);
            const duration = isMinutes
                ? [30, 40, 45, 48, 60][randomInt(0, 4)]
                : [1, 1.2, 1.5, 2, 2.5, 3, 4][randomInt(0, 6)];
            const distance = speed * duration / (isMinutes ? 60 : 1);
            return createVariant(
                question,
                replaceQuestionNumbers(question, [distance, duration]),
                speed,
                chooseDistractors(speed, [5, 10, 15]),
                `${formatNumber(distance)} ÷ ${formatNumber(isMinutes ? duration / 60 : duration)} = ${speed} km/h.`
            );
        }
        case 'Algebra': {
            if (numbers.length < 3) return question;
            const coefficient = randomInt(2, 12);
            const offset = randomInt(2, 20);
            const isAddition = /\+\s*\d+\s*=/.test(question.text);
            const solution = randomInt(2, 12);
            const result = coefficient * solution + (isAddition ? offset : -offset);
            const text = replaceQuestionNumbers(question, [coefficient, offset, result]);
            return createVariant(
                question,
                text,
                solution,
                chooseDistractors(solution, [1, 2, 3]),
                `${coefficient}x ${isAddition ? '+' : '-'} ${offset} = ${result} → ${coefficient}x = ${coefficient * solution} → x = ${solution}.`
            );
        }
        case 'Proportions': {
            if (numbers.length < 3) return question;
            if (/how long|hours take/i.test(question.text)) {
                const baseWorkers = randomInt(3, 8);
                const scale = randomInt(2, 4);
                const originalWorkers = baseWorkers * scale;
                const fewerWorkers = baseWorkers;
                const hours = randomInt(5, 20);
                const answer = hours * scale;
                return createVariant(
                    question,
                    replaceQuestionNumbers(question, [originalWorkers, hours, fewerWorkers]),
                    answer,
                    chooseDistractors(answer, [2, 4, 6]),
                    `${originalWorkers} workers take ${hours} hours; using ${fewerWorkers} workers multiplies the time by ${scale} → ${hours} × ${scale} = ${answer} hours.`
                );
            }
            const workers = randomInt(6, 20);
            const unitsPerWorker = randomInt(2, 12) * 5;
            const newWorkers = randomInt(2, workers - 1);
            const totalUnits = workers * unitsPerWorker;
            const answer = newWorkers * unitsPerWorker;
            return createVariant(
                question,
                replaceQuestionNumbers(question, [workers, totalUnits, newWorkers]),
                answer,
                chooseDistractors(answer, [10, 20, 30]),
                `${totalUnits} ÷ ${workers} = ${unitsPerWorker} per worker → ${newWorkers} × ${unitsPerWorker} = ${answer}.`
            );
        }
        default:
            return question;
    }
}

function generateQuestionVariant(question: TestQuestion): TestQuestion {
    for (let attempt = 0; attempt < 10; attempt++) {
        const variant = generateQuestionVariantOnce(question);
        if (variant.text !== question.text) return variant;
    }
    throw new Error(`Could not generate a distinct version of question ${question.id}.`);
}

export function generateTestQuestions(testKey: string): TestQuestion[] {
    return (testsRepository[testKey] ?? []).map(generateQuestionVariant);
}