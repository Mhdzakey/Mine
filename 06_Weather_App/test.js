// Check if Geolocation API is supported
if ("geolocation" in navigator) {
    // Request the user's current position
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Success callback
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            
            // You can now use latitude and longitude to do further processing
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}
