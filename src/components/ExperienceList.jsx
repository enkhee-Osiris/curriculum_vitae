import { useCallback } from 'react';

import List from './List';

function Experience({ even = false, company, location, position, items, dates }) {
  const Data = useCallback(
    () => (
      <div className="col-span-2 border border-black dark:border-gray-500 p-6 space-y-3">
        <h4 className="text-xl font-normal dark:text-gray-300">{position}</h4>
        <h5 className="text-lg font-normal dark:text-gray-300">{company}</h5>
        <List items={items} />
      </div>
    ),
    [company, position, items],
  );

  const LocationDate = useCallback(
    () => (
      <div className={`flex ${even ? 'text-right' : ''} flex-col justify-center`}>
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
    <div className="grid grid-cols-3 gap-x-6 gap-y-8">
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
