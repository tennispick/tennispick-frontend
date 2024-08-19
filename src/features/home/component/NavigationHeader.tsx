const NavigationHeader = () => {
  return (
    <div css={{ display: 'flex', height: '48px' }}>
      <div>2024년 7월</div>
      <div>
        <button>이전</button>
        <button>다음</button>
      </div>
      <div>기준시각: 2024.12.31 14:00:00</div>
    </div>
  );
};

export default NavigationHeader;
