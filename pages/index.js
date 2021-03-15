import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/event/event-list';

function HomePafe() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePafe;
