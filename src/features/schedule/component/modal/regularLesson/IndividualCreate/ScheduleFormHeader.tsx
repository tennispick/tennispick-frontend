const ScheduleModalRegularLessonIndividualCreateScheduleFormHeader = () => {
  return(
    <div css={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: '0 0 16px 0',
      borderTop: '1px solid var(--grey100)',
      borderBottom: '1px solid var(--grey100)',
      padding: '12px 0',

      'div':{
        padding: '0 0 0 8px'
      }
    }}>
      <div css={{ width: '12%' }}>강습날짜 유형</div>
      <div css={{ width: '12%' }}>강습시간</div>
      <div css={{ width: '12%' }}>주 강습횟수</div>
      <div css={{ width: '12%' }}>강습코치</div>
      <div css={{ width: '12%' }}>코트</div>
      <div css={{ width: '50%' }}>스케줄 등록</div>
    </div>
  )
};

export default ScheduleModalRegularLessonIndividualCreateScheduleFormHeader;