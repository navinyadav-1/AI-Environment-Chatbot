export function analyzeUserIntent(input: string) {
  const questionWords = ['what', 'how', 'why', 'when', 'where', 'which', 'can', 'do'];
  const actionWords = ['help', 'explain', 'tell', 'show', 'give'];
  const complexityIndicators = ['detail', 'explain', 'elaborate', 'comprehensive'];
  
  const words = input.toLowerCase().split(' ');
  
  return {
    isQuestion: questionWords.some(word => words.includes(word)),
    isAction: actionWords.some(word => words.includes(word)),
    wantsDetail: complexityIndicators.some(word => words.includes(word)),
    topicCount: new Set(words).size,
    wordCount: words.length
  };
}

export function calculateRelevanceScore(keywords: string[], input: string): number {
  const inputWords = new Set(input.toLowerCase().split(' '));
  let score = 0;
  
  keywords.forEach(keyword => {
    if (input.toLowerCase().includes(keyword.toLowerCase())) {
      score += 2;
    }
    const keywordWords = keyword.split(' ');
    keywordWords.forEach(word => {
      if (inputWords.has(word.toLowerCase())) {
        score += 1;
      }
    });
  });
  
  return score;
}