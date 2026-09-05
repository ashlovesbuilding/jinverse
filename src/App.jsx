import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Teachings from './pages/Teachings.jsx'
import Tirthankaras from './pages/Tirthankaras.jsx'
import History from './pages/History.jsx'
import Texts from './pages/Texts.jsx'
import Articles from './pages/Articles.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import ArticleEditor from './pages/ArticleEditor.jsx'
import Reels from './pages/Reels.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/tirthankaras" element={<Tirthankaras />} />
          <Route path="/history" element={<History />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/editor" element={<ArticleEditor />} />
          <Route path="/article-editor" element={<ArticleEditor />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
