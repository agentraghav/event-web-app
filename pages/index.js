import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/event/event-list';

function HomePafe(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePafe;
