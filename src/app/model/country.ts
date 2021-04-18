import { LatestData } from './latest-data';
import { Today } from './today';
import { Calculated } from './calculated';
import { TimelineItem } from './timeline-item';

export interface Country {
  name: string;
  code: string;
  population: number;
  updated_at: string;
  latest_data: LatestData;
  today: Today;
  timeline: TimelineItem[];

}
