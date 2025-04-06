const HomePage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          🎬 어서 오세요! <br /><span>Armin Cinema</span> 입니다
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          검색창은 아직 구현되지 않은 관계로,<br />
          <span className="font-medium text-gray-700">상단의 메뉴바</span>에서 원하시는 버튼을 클릭해주세요.
        </p>
      </div>
    );
  };
  
  export default HomePage;
  