document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([40.75, -73.98], 12);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
  
    const icons = {
      "en attente": new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      }),
      "en cours": new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      }),
      "résolu": new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      }),
    };
  
    const statutColors = {
      "en attente": "#007bff", // bleu
      "en cours": "#fd7e14",   // orange
      "résolu": "#28a745",     // vert
    };
  
    signalements.forEach((s) => {
      const [lng, lat] = s.localisation.coordonnees;
      const markerIcon = icons[s.statut] || icons["en attente"];
  
      const coordText = `Coordonnées : ${lng.toFixed(6)} ; ${lat.toFixed(6)}`;
      const description = s.description || "Aucune description";
      const statut = s.statut || "en attente";
      const statutColor = statutColors[statut] || "#007bff";
  
      const popupContent = `
        <div>
          <div><strong>${coordText}</strong></div>
          <div>${description}</div>
          <div><strong>Statut :</strong> <span style="color: ${statutColor}; font-weight: bold;">${statut}</span></div>
        </div>
      `;
  
      L.marker([lat, lng], { icon: markerIcon })
        .addTo(map)
        .bindPopup(popupContent);
    });
  });