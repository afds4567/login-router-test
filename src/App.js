import * as React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProtectedRoute from './ProtectedRoute';
const About = React.lazy(() => import('./pages/About'));
const Article = React.lazy(() => import('./pages/Article'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Articles = React.lazy(() => import('./pages/Articles'));
function App() {
  const [user, setUser] = React.useState(null);
  
  const handleLogin = () =>
    setUser({
      id: '1',
      name: 'robin',
      permissions: ['analyze'],
      roles:['admin'],
  });
  const handleLogout = () => setUser(null);

  return (
    <Routes>
      <Route element={<Layout user={user} handleLogin={handleLogin} handleLogout={handleLogout}/>}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isAllowed={!!user && user.roles.includes('admin')}/>}>
          <Route path="/about" element={<React.Suspense fallback={<>...</>}><About /></React.Suspense>} />
          <Route path="/profiles/:username" element={<React.Suspense fallback={<>...</>}><Profile /></React.Suspense>} />
        </Route>
      </Route>
      <Route path='/articles' element={<React.Suspense fallback={<>...</>}><Articles /></React.Suspense>} >
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
