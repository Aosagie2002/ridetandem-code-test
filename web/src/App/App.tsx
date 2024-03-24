import React, { useEffect, useState, useRef } from 'react';
import { BusService } from '../utilities/types';
import { getAllBusTimetables } from '../utilities/api';
import { AppContainer, LocationHeader, LoadingIndicator } from './AppStyled';
import BusCard from '../components/BusCard/BusCard';

interface Props {}

const App: React.FC<Props> = () => {
  const [busServices, setBusServices] = useState<BusService[]>([]);
  const isFetchingInProgress = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch bus services data
  const fetchBusServices = async () => {
    // Check if a fetch operation is already in progress
    if (!isFetchingInProgress.current) {
      setIsLoading(true); // Set loading state to true
      isFetchingInProgress.current = true; // Set fetching flag to true
      try {
        // Fetch bus data from API
        const busDataResponse = await getAllBusTimetables();
        const currentDayOfWeek = new Date().getDay();
        // Filter bus data based on current day of the week
        const filteredBusData = busDataResponse.filter((bus) => !bus.nonOperationalDays.includes(currentDayOfWeek));
        // Sort bus services based on arrival time
        const sortedBusService = filteredBusData.sort((bus1, bus2) => bus1.minutesUntilArrival - bus2.minutesUntilArrival);
        // Set fetched and sorted bus services to state
        setBusServices(sortedBusService);
      } catch (error) {
        console.error('Error fetching bus schedule:', error);
        setError('Error fetching bus schedule. Please try again later.'); // Set error state
      } finally {
        isFetchingInProgress.current = false; // Reset fetching flag
        setIsLoading(false); // Set loading state to false
      }
    }
  };

  // useEffect hook to fetch bus services on component mount and set interval for periodic fetching
  useEffect(() => {
    fetchBusServices(); // Initial fetch
    const intervalId = setInterval(fetchBusServices, 10000); // Set interval for periodic fetch
    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, []);

  return (
      <AppContainer>
        {/* Location header */}
        <LocationHeader>
          Live bus times for <b>Park Road</b>
        </LocationHeader>
        {/* Render loading indicator if data is loading */}
        {isLoading ? (
            <LoadingIndicator>Loading...</LoadingIndicator>
        ) : error ? (
            // Render error message if there's an error fetching data
            <p>{error}</p>
        ) : (
            // Render bus cards if data is fetched successfully
            busServices.map((bus) => <BusCard bus={bus} key={bus.id} />)
        )}
      </AppContainer>
  );
};

export default App;
