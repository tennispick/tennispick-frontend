const CustomerLessonList = () =>{
  return(
    <section
      css={{
        position: 'relative',
        width: '20%',
        height: '100%',
        margin: '0 12px'
      }}
    >
      <div css={{ height: '24px', fontWeight: '600', margin: '0 0 12px 0'}} >수강목록</div>
      <div
        css={{
          position: 'relative',
          height: 'calc(100% - 36px)',
          backgroundColor: 'var(--basic-grey4-color)',
          borderRadius: '16px',
          padding: '8px'
        }}
      >
        <div
          css={{
            height: '48px',
            lineHeight: '48px',
            backgroundColor: 'var(--basic-white-color)',
            borderRadius: '16px',
            boxShadow: '1px 1px 25px 0px rgba(132, 132, 132, 0.10)',
            padding: '0 16px',
            fontWeight: '400'
          }}
        >총 7건</div>
        <div
          css={{
            height: 'calc(100% - 56px)',
            backgroundColor: 'var(--basic-white-color)',
            borderRadius: '16px',
            boxShadow: '1px 1px 25px 0px rgba(132, 132, 132, 0.10)',
            padding: '12px 16px',
            margin: '8px 0 0 0'
          }}
        >
          목록
        </div>
      </div>
    </section>
  )
}

export default CustomerLessonList;