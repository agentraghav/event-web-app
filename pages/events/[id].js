import { Fragment } from 'react';

import { getEventById, getAllEvents } from '../../helpers/api-util';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';

function EventDetail(props) {
  const event = props.events;
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

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const data = await getEventById(eventId);
  return {
    props: {
      events: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllEvents();

  const paths = data.map((event) => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetail;
