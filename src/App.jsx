import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Sideprovider } from "./context/Barhandler";
import { Swiperprovider } from "./context/Mvswiper";
import { Apiprovider } from "./context/Apicalls";
import SpinnerFullPage from "./components/SpinnerFullPage";
import PageNav from "./components/PageNav";
import Search from "./components/Search";
import { StorageProvider } from "./context/Storage";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const Saved = lazy(() => import("./pages/Saved"));
const SearchResult = lazy(() => import("./components/SearchReasult"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Apiprovider>
      <Swiperprovider>
        <Sideprovider>
          <StorageProvider>
            <BrowserRouter>
              <Suspense fallback={<SpinnerFullPage />}>
                <PageNav />
                <Search />

                <Routes>
                  <Route element={<AppLayout />}>
                    <Route
                      index
                      element={<Navigate replace to="dashboard" />}
                    />
                    <Route path="dashboard" element={<Home />} />
                    <Route path="search" element={<SearchResult />} />
                    <Route path="saved" element={<Saved />} />
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </StorageProvider>
        </Sideprovider>
      </Swiperprovider>
    </Apiprovider>
  );
}

export default App;
