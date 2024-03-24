import { BusService } from './types';

const baseUrl = 'http://localhost:3000';

export const getAllBusTimetables = async (): Promise<BusService[]> => {
  try {
    const response = await fetch(`${baseUrl}/bus-times`);
    if (!response.ok) {
      throw new Error('Failed to fetch bus times');
    }
    const parsedResponse = await response.json();
    return parsedResponse as BusService[];
  } catch (error) {
    console.error('Error fetching bus times:', error);
    throw error;
  }
};
