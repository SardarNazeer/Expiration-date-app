function calculateDays() {
    var expiryDateInput = document.getElementById("expiryDate").value;
    var today = new Date();
    var expiryDate = new Date(expiryDateInput);
    
    // Calculate the difference in milliseconds
    var difference = expiryDate.getTime() - today.getTime();
    
    // Convert milliseconds to days
    var daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    if (daysLeft > 0) {
        document.getElementById("result").innerText = "Days left until expiration: " + daysLeft;
    } else if (daysLeft === 0) {
        document.getElementById("result").innerText = "Today is the expiration date!";
    } else {
        document.getElementById("result").innerText = "The expiration date has passed!";
    }
}
