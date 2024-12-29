export const pollutionTopics = {
  air: {
    keywords: ['air pollution', 'smog', 'emissions', 'air quality'],
    responses: [{
      short: "Air pollution comes from vehicle emissions, industry, and burning fossil fuels.",
      medium: "Air pollution is caused by harmful substances in the air from vehicles, industries, and energy production. It affects health and climate.",
      long: "Air pollution occurs when harmful substances enter the atmosphere. Major sources include vehicle emissions, industrial processes, and fossil fuel combustion. It causes respiratory problems, contributes to climate change, and affects ecosystems.",
      facts: [
        "91% of people live in areas exceeding WHO air quality guidelines",
        "Air pollution causes 7 million premature deaths annually",
        "Vehicle emissions account for 29% of greenhouse gas emissions in the US"
      ]
    }]
  },
  water: {
    keywords: ['water pollution', 'ocean pollution', 'plastic pollution', 'marine'],
    responses: [{
      short: "Water pollution threatens marine life and water quality globally.",
      medium: "Water pollution from plastics, chemicals, and waste threatens marine ecosystems and clean water access.",
      long: "Water pollution is a critical environmental issue affecting oceans, rivers, and drinking water. Sources include plastic waste, industrial chemicals, agricultural runoff, and oil spills. It threatens marine life, human health, and access to clean water.",
      facts: [
        "8 million tons of plastic enter oceans annually",
        "80% of marine pollution comes from land-based activities",
        "Half of the world's coral reefs are threatened by pollution"
      ]
    }]
  }
};