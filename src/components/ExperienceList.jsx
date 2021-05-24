import { useCallback } from 'react';

import List from './List';

function Experience({ even = false, company, location, position, items, dates }) {
  const Data = useCallback(
    () => (
      <div className="col-span-2 border border-black dark:border-gray-500 p-4 sm:p-6 space-y-3">
        <h4 className="flex flex-col sm:flex-row sm:justify-between sm:align-center text-base sm:text-xl font-normal dark:text-gray-300">
          {position}
          <span className="md:hidden font-medium text-sm sm:text-base">{` (${dates})`}</span>
        </h4>
        <h5 className="text-base sm:text-lg font-normal dark:text-gray-300">
          {company}
          <span className="md:hidden -sm:text-sm font-medium">{`, ${location}`}</span>
        </h5>
        <List items={items} />
      </div>
    ),
    [company, position, items, dates, location],
  );

  const LocationDate = useCallback(
    () => (
      <div className={`flex -md:hidden ${even ? 'text-right' : ''} flex-col justify-center`}>
        <p>{dates}</p>
        <p className="text-sm">{location}</p>
      </div>
    ),
    [location, dates, even],
  );

  if (even) {
    return (
      <>
        <LocationDate />
        <Data />
      </>
    );
  }

  return (
    <>
      <Data />
      <LocationDate />
    </>
  );
}

function ExperienceList({ data }) {
  return (
    <div className="grid -md:grid-cols-2 grid-cols-3 gap-x-6 gap-y-4 sm:gap-y-8">
      {data.map(({ id, company, location, position, items, dates }, index) => (
        <Experience
          key={`experience_${id}`}
          even={index % 2 === 0}
          position={position}
          company={company}
          items={items}
          location={location}
          dates={dates}
        />
      ))}
    </div>
  );
}

export default ExperienceList;
