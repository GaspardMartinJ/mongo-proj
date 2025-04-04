document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([40.75, -73.98], 12);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    signalements.forEach(s => {
      const [lng, lat] = s.localisation.coordinates;
      L.marker([lat, lng]).addTo(map)
        .bindPopup(`<strong>${s.titre}</strong><br>${s.description}`);
    });
  });