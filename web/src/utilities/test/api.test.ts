import { getAllBusTimetables } from '../api';

// Mock the implementation of getAllBusTimetables
jest.mock('../api');

describe('getAllBusTimetables', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches bus timetables successfully', async () => {
        const mockBusServices = [
            { id: 1, name: 'Bus 1', departureTime: '10:00' },
            { id: 2, name: 'Bus 2', departureTime: '11:00' },
        ];

        // Set up the mock implementation to return the mock data
        (getAllBusTimetables as jest.Mock).mockResolvedValueOnce(mockBusServices);

        // Call the function that uses getAllBusTimetables
        const busTimetables = await getAllBusTimetables();

        // Assert that the function returns the expected result
        expect(busTimetables).toEqual(mockBusServices);
    });

    it('throws an error when fetching bus timetables fails', async () => {
        const errorMessage = 'Failed to fetch bus times';

        // Set up the mock implementation to throw an error
        (getAllBusTimetables as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

        // Assert that calling the function throws the expected error
        await expect(getAllBusTimetables()).rejects.toThrow(errorMessage);
    });
});
