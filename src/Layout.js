import { Outlet, useNavigate } from 'react-router-dom';

const Layout = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    //articles 경로로 이동
    navigate('/articles');
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 20 }}>
        {props.user ? (
          <button onClick={props.handleLogout}>Log OUT</button>
        ) : (
          <button onClick={props.handleLogin}>Log IN</button>
        )}
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;