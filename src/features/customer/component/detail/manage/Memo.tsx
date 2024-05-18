const ManageMemo = () => {
  return (
    <>
      <div
        css={{
          position: 'relative',
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div css={{ margin: '0 12px 0 0' }}>
            총 <span>0</span>건
          </div>
          <div
            css={{
              color: 'var(--business-color)',
              fontWeight: 600,
              margin: '0 8px 0 0',
              cursor: 'pointer',
            }}
          >
            등록하기
          </div>
        </div>
      </div>
      <div
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        메모가 없어요.
      </div>
    </>
  );
};

export default ManageMemo;
