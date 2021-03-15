import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import { Fragment } from 'react';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import EventList from '../../components/event/event-list';
function EventFilter() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <ErrorAlert>
        <p>Invalid Filter Please Adjust Your Values</p>;
      </ErrorAlert>
    );
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <ErrorAlert>
        <p>Event Not Found</p>;
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventList items={filteredEvent} />
      <Button className='center' link='/events'>
        Go To All Events
      </Button>
    </Fragment>
  );
}

export default EventFilter;
