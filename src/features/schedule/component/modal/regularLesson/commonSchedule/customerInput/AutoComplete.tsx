type Props = {
  data: {
    id: string;
    name: string;
  }[];
  onClickCustomerHandler: (id: string, name: string) => void;
};

const InputAutoComplete = ({ data, onClickCustomerHandler }: Props) => {
  return (
    <section
      css={{
        position: 'absolute',
        width: '100%',
        minHeight: '40px',
        maxHeight: '180px',
        top: '44px',
        left: 0,
        backgroundColor: 'var(--white100)',
        boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid var(--grey100)',
        borderRadius: '8px',
        overflowY: 'scroll',
        zIndex: 1,
      }}
    >
      <ul css={{ minHeight: '40px', padding: '4px 0' }}>
        {data.map(({ id, name }) => {
          return (
            <li
              key={id}
              id={id}
              css={{
                cursor: 'pointer',
                padding: '8px 12px',
                ':hover': {
                  borderRadius: '4px',
                  backgroundColor: 'var(--grey400)',
                },
              }}
              value={name}
              onClick={() => onClickCustomerHandler(id, name)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InputAutoComplete;
