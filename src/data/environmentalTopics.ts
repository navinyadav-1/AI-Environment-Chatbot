export const topics = {
  climate: {
    keywords: ['climate', 'global warming', 'temperature', 'weather'],
    responses: [
      'Climate change is a long-term change in global weather patterns.',
      'The Earth\'s average temperature has increased by about 1.1°C since pre-industrial times.',
      'Reducing carbon emissions is crucial for fighting climate change.'
    ]
  },
  recycling: {
    keywords: ['recycle', 'waste', 'plastic', 'trash'],
    responses: [
      'Recycling helps reduce waste and conserve natural resources.',
      'Always clean and sort your recyclables properly.',
      'Reduce, Reuse, Recycle - in that order of priority!'
    ]
  },
  energy: {
    keywords: ['energy', 'solar', 'wind', 'renewable'],
    responses: [
      'Renewable energy sources include solar, wind, and hydroelectric power.',
      'Solar panels can significantly reduce your carbon footprint.',
      'Wind power is one of the fastest-growing renewable energy sources.'
    ]
  }
} as const;