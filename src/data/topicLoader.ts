import { climateTopics } from './topics/climate';
import { recyclingTopics } from './topics/recycling';
import { energyTopics } from './topics/energy';
import { sustainabilityTopics } from './topics/sustainability';
import { conservationTopics } from './topics/conservation';
import { pollutionTopics } from './topics/pollution';
import { biodiversityTopics } from './topics/biodiversity';
import { waterTopics } from './topics/water';
import { wasteTopics } from './topics/waste';
import { transportationTopics } from './topics/transportation';

export function loadAllTopics() {
  return {
    climate: climateTopics,
    recycling: recyclingTopics,
    energy: energyTopics,
    sustainability: sustainabilityTopics,
    conservation: conservationTopics,
    pollution: pollutionTopics,
    biodiversity: biodiversityTopics,
    water: waterTopics,
    waste: wasteTopics,
    transportation: transportationTopics
  };
}