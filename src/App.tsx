import { useEffect, useState } from 'react';
import { NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AddRecipeModal from './components/AddRecipeModal';
import KitchenPanel from './components/KitchenPanel';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
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

export default function App() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState<RecipeIndexEntry[]>([]);
  const [recipesLoading, setRecipesLoading] = useState(true);
  const [myRecipes, setMyRecipes] = useState<MyRecipe[]>(() => loadMyRecipes());
  const [kitchenOpen, setKitchenOpen] = useState(false);
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
    document.body.style.overflow = kitchenOpen || addModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [kitchenOpen, addModalOpen]);

  const refreshMyRecipes = (): void => {
    setMyRecipes(loadMyRecipes());
  };

  const openRecipeFromKitchen = (recipeId: number): void => {
    setKitchenOpen(false);
    navigate(`/recipes/${recipeId}`);
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
            <div className="nav-section-label">Main</div>
            <NavLink to="/" end className={({ isActive }) => navClassName(isActive)}>
              <span className="nav-icon">HM</span> Home
            </NavLink>
            <div className="nav-section-label">Saved</div>
            <NavLink to="/my-recipes" className={({ isActive }) => navClassName(isActive)}>
              <span className="nav-icon">MY</span> My Recipes
            </NavLink>
            <div className="nav-section-label">Info</div>
            <NavLink to="/about" className={({ isActive }) => navClassName(isActive)}>
              <span className="nav-icon">AB</span> About
            </NavLink>
          </nav>

          <div className="sidebar-footer">
            <p>Powered by React + TypeScript</p>
          </div>
        </aside>

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  recipes={recipes}
                  loading={recipesLoading}
                  onOpenKitchenPanel={() => setKitchenOpen(true)}
                />
              }
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
                    showToast('Recipe removed.');
                  }}
                />
              }
            />
            <Route path="/my-recipes/:myRecipeId" element={<MyRecipeDetailPage recipes={myRecipes} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      <nav className="bottom-nav">
        <NavLink to="/" end className={({ isActive }) => bottomNavClassName(isActive)}>
          <span className="bnav-icon">HM</span>
          <span className="bnav-label">Home</span>
        </NavLink>
        <NavLink to="/my-recipes" className={({ isActive }) => bottomNavClassName(isActive)}>
          <span className="bnav-icon">MY</span>
          <span className="bnav-label">Mine</span>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => bottomNavClassName(isActive)}>
          <span className="bnav-icon">AB</span>
          <span className="bnav-label">About</span>
        </NavLink>
      </nav>

      <KitchenPanel
        open={kitchenOpen}
        recipes={recipes}
        onClose={() => setKitchenOpen(false)}
        onSelectRecipe={openRecipeFromKitchen}
      />

      <AddRecipeModal
        open={addModalOpen}
        recipes={recipes}
        myRecipes={myRecipes}
        onClose={() => setAddModalOpen(false)}
        onRecipesChanged={() => {
          refreshMyRecipes();
          showToast('My recipes updated.');
        }}
        onToast={showToast}
      />

      <div id="app-toast" className={`app-toast ${toast.visible ? 'show' : ''}`}>
        {toast.message}
      </div>
    </>
  );
}
