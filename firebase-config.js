fetch('data/indonesia-provinsi.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return {
          fillColor: getColor(feature.properties.prevalence),
          weight: 1,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7
        };
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(`
          <b>${feature.properties.name}</b><br>
          Prevalensi: ${feature.properties.prevalence}%
        `);

        layer.on('click', function() {
          // Update modal dengan data provinsi yang diklik
          document.getElementById('province-name').textContent = feature.properties.name;
          document.getElementById('prevalence').textContent = feature.properties.prevalence;
          document.getElementById('factors').textContent = feature.properties.factors || 'Data sedang dikumpulkan';
          
          // Tambahkan konten budaya lokal
          const cultureTips = {
            "DKI Jakarta": "Coba healing di Taman Suropati sambil dengar musik jalanan 🎵",
            "Jawa Barat": "Jelajahi alam pegunungan di Lembang untuk relaksasi 🏔️",
            "Bali": "Meditasi di Pantai Sanur saat sunrise 🧘‍♂️"
          };
          document.getElementById('culture-tips').innerHTML = 
            cultureTips[feature.properties.name] || "Cari tempat tenang di daerahmu untuk relaksasi.";
          
          document.getElementById('province-modal').style.display = 'block';
        });
      }
    }).addTo(map);
  });