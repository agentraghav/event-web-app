import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';

function EventDetail() {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event Found!</p>;
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        address={event.location}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Button className='center' link='/events'>
        Go To All Events
      </Button>
    </Fragment>
  );
}

export default EventDetail;
