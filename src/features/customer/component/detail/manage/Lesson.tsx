const ManageLesson = () => {
  return (
    <>
      <div
        css={{
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        }}
      >
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>0</span>건
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
        수강목록이 없어요.
      </div>
    </>
  );
};

export default ManageLesson;
