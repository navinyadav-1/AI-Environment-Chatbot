import { generateDetailedResponse } from './responseUtils';
import { ChatResponse } from '../types/chat';

export function generateResponse(userInput: string): ChatResponse {
  return generateDetailedResponse(userInput);
}

export function generateMessageId(): string {
  return Math.random().toString(36).substring(2, 15);
}