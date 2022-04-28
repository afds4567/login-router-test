import { useSearchParams } from "react-router-dom";
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //example querystring == ?detail=true&mode=1 ... ?지우고 &문자열로 분리 후 key, value값으로 파싱
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({
      mode, detail: detail === 'true' ? false : true
    });
  };
  const onIncreaseMode = () => {  
    const nextMode = (mode === 'null') ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>Increase mode</button>
    </div>
  );
};

export default About;