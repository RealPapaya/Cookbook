import { useEffect, useState } from 'react';
import { NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AddRecipeModal from './components/AddRecipeModal';
import AboutPage from './pages/AboutPage';
import IngredientsPage from './pages/IngredientsPage';
import HomePage from './pages/HomePage';
import KitchenPage from './pages/KitchenPage';
import MyRecipeDetailPage from './pages/MyRecipeDetailPage';
import MyRecipesPage from './pages/MyRecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import { loadMyRecipes } from './domain/myRecipes';
import { fetchRecipesIndex } from './domain/recipeApi';
import type { MyRecipe, RecipeIndexEntry } from './domain/types';

interface ToastState {
  visible: boolean;
  message: string;
}

function navClassName(isActive: boolean): string {
  return isActive ? 'nav-btn active' : 'nav-btn';
}

function bottomNavClassName(isActive: boolean): string {
  return isActive ? 'bottom-nav-btn active' : 'bottom-nav-btn';
}

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
  </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const ChefHatIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
);

export default function App() {
  const navigate = useNavigate();

    const [recipes, setRecipes] = useState<RecipeIndexEntry[]>([]);
  const [recipesLoading, setRecipesLoading] = useState(true);
  const [myRecipes, setMyRecipes] = useState<MyRecipe[]>(() => loadMyRecipes());
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ visible: false, message: '' });

  const showToast = (message: string): void => {
    setToast({ visible: true, message });
    window.clearTimeout((showToast as unknown as { _timer?: number })._timer);
    (showToast as unknown as { _timer?: number })._timer = window.setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 2800);
  };

  useEffect(() => {
    let mounted = true;
    fetchRecipesIndex()
      .then((index) => {
        if (!mounted) return;
        setRecipes(index);
      })
      .finally(() => {
        if (!mounted) return;
        setRecipesLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

    useEffect(() => {
    document.body.style.overflow = addModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [addModalOpen]);

    const refreshMyRecipes = (): void => {
    setMyRecipes(loadMyRecipes());
  };

  return (
    <>
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div id="app">
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="logo-icon">CK</div>
            <h1>Cookbook</h1>
            <p>My Secret Cookbook</p>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-section-label">主選單</div>
            <NavLink to="/" end className={({ isActive }) => navClassName(isActive)}>
              <HomeIcon className="nav-icon" /> 首頁
            </NavLink>
            <div className="nav-section-label">我的收藏</div>
            <NavLink to="/my-recipes" className={({ isActive }) => navClassName(isActive)}>
              <BookIcon className="nav-icon" /> 我的食譜
            </NavLink>
                        <div className="nav-section-label">資訊</div>
            <NavLink to="/ingredients" className={({ isActive }) => navClassName(isActive)}>
              <LeafIcon className="nav-icon" /> 食材百科
            </NavLink>
            <NavLink to="/kitchen" className={({ isActive }) => navClassName(isActive)}>
              <ChefHatIcon className="nav-icon" /> 廚房
            </NavLink>
          </nav>

          <div className="sidebar-footer">
            <p>React + TypeScript 驅動</p>
          </div>
        </aside>

        <div className="main-content">
          <Routes>
                        <Route
              path="/"
              element={<HomePage recipes={recipes} loading={recipesLoading} />}
            />
            <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
            <Route
              path="/my-recipes"
              element={
                <MyRecipesPage
                  recipes={myRecipes}
                  onOpenAddModal={() => setAddModalOpen(true)}
                  onDelete={() => {
                    refreshMyRecipes();
                    showToast('已移除食譜。');
                  }}
                />
              }
            />
            <Route path="/my-recipes/:myRecipeId" element={<MyRecipeDetailPage recipes={myRecipes} />} />
                        <Route path="/about" element={<AboutPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/kitchen" element={<KitchenPage recipes={recipes} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      <nav className="bottom-nav">
        <NavLink to="/" end className={({ isActive }) => bottomNavClassName(isActive)}>
          <HomeIcon className="bnav-icon" />
          <span className="bnav-label">首頁</span>
        </NavLink>
                <NavLink to="/my-recipes" className={({ isActive }) => bottomNavClassName(isActive)}>
          <BookIcon className="bnav-icon" />
          <span className="bnav-label">我的食譜</span>
        </NavLink>
        <NavLink to="/ingredients" className={({ isActive }) => bottomNavClassName(isActive)}>
          <LeafIcon className="bnav-icon" />
          <span className="bnav-label">食材</span>
        </NavLink>
        <NavLink to="/kitchen" className={({ isActive }) => bottomNavClassName(isActive)}>
          <ChefHatIcon className="bnav-icon" />
          <span className="bnav-label">廚房</span>
        </NavLink>
      </nav>

      <AddRecipeModal
        open={addModalOpen}
        recipes={recipes}
        myRecipes={myRecipes}
        onClose={() => setAddModalOpen(false)}
        onRecipesChanged={() => {
          refreshMyRecipes();
          showToast('我的食譜已更新。');
        }}
        onToast={showToast}
      />

      <div id="app-toast" className={`app-toast ${toast.visible ? 'show' : ''}`}>
        {toast.message}
      </div>
    </>
  );
}
