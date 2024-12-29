export interface TopicResponse {
  short: string;
  medium: string;
  long: string;
  sources?: string[];
  relatedTopics?: string[];
  facts?: string[];
}

export interface SubTopic {
  keywords: string[];
  responses: TopicResponse[];
  difficulty?: 'basic' | 'intermediate' | 'advanced';
  categories?: string[];
}

export interface TopicCategory {
  [key: string]: SubTopic;
}