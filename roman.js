const romanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const dynastyReign = {
  "San Dynasty": "MXXXIV", // 1034 (5 years)
  "Victoria Dynasty": "MXXXIX", // 1039 (7 years)
  "Tan Dynasty": "MXLVI", // 1046 (0 years)
  "Bon Dynasty": "MLV", // 1005 (29 years)
};

function longestDynasty(dynastyReign) {
  let longestReign = 0;
  let longestDynasty = "";

  for (const [dynasty, year] of Object.entries(dynastyReign)) {
    const endYear = convertYear(year);

    if (typeof endYear !== "number") {
      continue;
    }

    const startYear = romanNumerals.M + 1;
    const reignYears = endYear - startYear;

    if (reignYears >= longestReign) {
      longestReign = reignYears;
      longestDynasty = dynasty;
    }
  }

  return longestDynasty || "No Data";
}

function convertYear(year) {
  let result = 0;
  let prevValue = 0;

  for (let i = year.length - 1; i >= 0; i--) {
    const current = romanNumerals[year[i]];

    if (current === undefined) {
      return "Invalid";
    }

    if (current >= prevValue) {
      result += current;
    } else {
      result -= current;
    }

    prevValue = current;
  }

  return result;
}

console.log(longestDynasty(dynastyReign)); // Bon Dynasty
