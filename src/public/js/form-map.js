document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([40.75, -73.98], 12); // Default view

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    let marker;

    // Add a click event to place a marker and update the form fields
    map.on("click", (e) => {
        const { lat, lng } = e.latlng;

        // If a marker already exists, remove it
        if (marker) {
            map.removeLayer(marker);
        }

        // Add a new marker
        marker = L.marker([lat, lng]).addTo(map);

        // Update hidden form fields
        document.getElementById("latitude").value = lat;
        document.getElementById("longitude").value = lng;
    });
});
