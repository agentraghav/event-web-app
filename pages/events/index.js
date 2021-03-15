import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/event/event-list';
import EventSearch from '../../components/event/event-search';
function Event() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default Event;
