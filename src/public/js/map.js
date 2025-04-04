document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([40.75, -73.98], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    signalements.forEach((s) => {
        const [lng, lat] = s.localisation.coordonnees;

        // Create popup content with image
        let popupContent = `<strong>${s.titre}</strong><br>${s.description}`;

        // Add image if available
        if (s.imageUrl) {
            popupContent += `<br><img src="${s.imageUrl}" alt="Image" style="max-width:200px; margin-top:8px; border-radius:4px;">`;
        }

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(popupContent);
    });
});