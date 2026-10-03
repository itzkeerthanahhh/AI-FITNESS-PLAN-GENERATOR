let waterCount = 0;

function addWater() {
    if (waterCount < 8) {
        waterCount++;
        document.getElementById("waterCount").innerText =
            waterCount + " / 8 glasses";
    } else {
        alert("Daily water goal completed!");
    }
}
function generatePlan() {
    alert(
        "Today's AI Fitness Plan:\n\n" +
        "🏃 20 minutes cardio\n" +
        "🏋️ 15 squats\n" +
        "💪 10 push-ups\n" +
        "🧘 30 seconds plank"
    );
}
let waterCount = 0;

function addWater() {
    if (waterCount < 8) {
        waterCount++;
        document.getElementById("waterCount").innerText =
            waterCount + " / 8 glasses";
    } else {
        alert("Daily water goal completed!");
    }
}