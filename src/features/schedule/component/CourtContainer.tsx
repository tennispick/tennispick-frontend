import { useCourtListQuery } from '@features/court/query/courtQuery';

const CourtContainer = () => {
  const { data } = useCourtListQuery({});

  return (
    <div className="pb-3">
      <ul className="flex">
        {data &&
          data?.map(({ id, name }) => {
            return (
              <li
                key={id}
                className="bg-black text-white px-4 py-2 rounded-lg mr-2"
              >
                <span>{name}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CourtContainer;
