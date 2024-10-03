
<script>
function calculateAnnualRevenue() {
    var occupancy = document.getElementById("occupancy").value;
    var dailyRate = document.getElementById("average-daily-rate").value;

    // Calculate the annual revenue
    var annualRevenue = (occupancy / 100) * dailyRate * 365;

   // Update the result in the HTML
    document.getElementById("revenue-result").textContent = annualRevenue.toFixed(2);
}
</script>
