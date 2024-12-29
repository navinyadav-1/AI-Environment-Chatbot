import { analyzeUserIntent, calculateRelevanceScore } from './nlpUtils';
import { TopicResponse } from '../types/topics';
import { loadAllTopics } from '../data/topicLoader';

export function determineResponseLength(input: string): 'short' | 'medium' | 'long' {
  const intent = analyzeUserIntent(input);
  
  if (intent.wantsDetail || intent.wordCount > 8) return 'long';
  if (intent.isQuestion && intent.wordCount > 4) return 'medium';
  return 'short';
}

export function findBestMatch(input: string) {
  const allTopics = loadAllTopics();
  let bestMatch = {
    category: '',
    subtopic: '',
    score: 0,
    response: null as TopicResponse | null
  };

  for (const [category, topics] of Object.entries(allTopics)) {
    for (const [subtopic, data] of Object.entries(topics)) {
      const score = calculateRelevanceScore(data.keywords, input);
      if (score > bestMatch.score) {
        bestMatch = {
          category,
          subtopic,
          score,
          response: data.responses[Math.floor(Math.random() * data.responses.length)]
        };
      }
    }
  }

  return bestMatch;
}

export function generateDetailedResponse(input: string) {
  const match = findBestMatch(input);
  const responseLength = determineResponseLength(input);
  
  if (match.score === 0) {
    return {
      text: "I can help you with various environmental topics. Would you like to learn about climate change, renewable energy, sustainable living, or conservation?",
      topic: 'general'
    };
  }

  return {
    text: match.response?.[responseLength] || match.response?.medium || "I'm not sure about that specific topic.",
    topic: match.category,
    subtopic: match.subtopic,
    relatedTopics: match.response?.relatedTopics,
    facts: match.response?.facts
  };
}