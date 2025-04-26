const tips = [
  "Drink 8-10 glasses of water daily.",
  "Include iron-rich foods in your meals.",
  "Avoid stress—relax with music or meditation.",
  "Take short walks daily for good circulation.",
  "Never skip your prenatal vitamins.",
  "Keep a pregnancy journal for positive thoughts!"
];

const trimesterData = {
  1: "Weeks 1-12: Take folic acid, avoid junk food, and rest as much as possible.",
  2: "Weeks 13-26: You'll feel more energetic—focus on healthy eating and gentle exercise.",
  3: "Weeks 27-40: Prepare for birth; monitor fetal movements, and attend regular checkups."
};

const foodByTrimester = {
  1: [
    "Leafy greens – rich in folate and iron",
    "Lentils – good source of folic acid",
    "Citrus fruits – boosts immunity",
    "Whole grains – for sustained energy",
    "Low-fat dairy – calcium for baby’s bones"
  ],
  2: [
    "Bananas – prevent leg cramps",
    "Eggs – rich in protein and choline",
    "Sweet potatoes – full of vitamin A",
    "Greek yogurt – supports digestion",
    "Berries – loaded with antioxidants"
  ],
  3: [
    "Oatmeal – helps with energy and fiber",
    "Nuts – brain development & healthy fats",
    "Lean meats – iron and protein",
    "Avocados – good for baby's brain",
    "Dates – may aid in labor prep"
  ]
};

function showTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").innerText = randomTip;
}

function showTrimester(value) {
  const info = trimesterData[value] || "";
  document.getElementById("trimester").innerText = info;

  loadFoods(value);
}

function loadFoods(trimester) {
  const list = document.getElementById("food-list");
  list.innerHTML = "";

  const foods = foodByTrimester[trimester] || [];
  foods.forEach(food => {
    const li = document.createElement("li");
    li.innerText = food;
    list.appendChild(li);
  });
}

function calculateDueDate() {
  const lmpInput = document.getElementById("lmp").value;
  if (!lmpInput) {
    document.getElementById("calc-result").innerText = "Please enter a valid date.";
    return;
  }

  const lmpDate = new Date(lmpInput);
  const dueDate = new Date(lmpDate);
  dueDate.setDate(dueDate.getDate() + 280); // 40 weeks

  const today = new Date();
  const diffTime = today - lmpDate;
  const weeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  const remainingDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

  document.getElementById("calc-result").innerHTML = `
    <strong>Estimated Due Date:</strong> ${dueDate.toDateString()}<br>
    <strong>Current Pregnancy Week:</strong> ${weeks}<br>
    <strong>Days Remaining:</strong> ${remainingDays} days
  `;
}
