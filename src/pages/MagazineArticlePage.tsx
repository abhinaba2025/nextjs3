import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronRight, Heart, Bookmark, ArrowUp } from 'lucide-react';
import { magazineArticles } from '../data/magazines';
import { useState, useEffect } from 'react';

export default function MagazineArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const article = magazineArticles.find(a => a.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The magazine article you're looking for doesn't exist.</p>
          <Link to="/magazine" className="text-amber-500 hover:underline">← Back to Magazine</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = magazineArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`
    };
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen min-h-[700px]">
        <div className="absolute inset-0">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-5xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/magazine" className="hover:text-white">Magazine</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-amber-500">{article.category}</span>
              </div>

              <span className="inline-block px-4 py-1 bg-amber-500 text-black text-sm font-bold mb-6">
                {article.category.toUpperCase()}
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-4xl">
                {article.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
                {article.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-8 text-white/70">
                <div className="flex items-center gap-4">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500"
                  />
                  <div>
                    <p className="font-semibold text-white text-lg">{article.author.name}</p>
                    <p className="text-white/60">{article.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    {article.issue}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/50">
            <span className="text-sm mb-2">Scroll to read</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="w-6 h-6 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="relative">
        {/* Side Actions - Desktop */}
        <div className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                isSaved 
                  ? 'bg-amber-500 text-black' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-amber-500'
              }`}
            >
              <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <div className="w-14 h-px bg-slate-300 dark:bg-slate-600" />
            <button
              onClick={() => handleShare('facebook')}
              className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
            >
              <Facebook className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="w-14 h-14 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
            >
              <Twitter className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="w-14 h-14 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Lead Paragraph */}
            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 leading-relaxed mb-12 font-serif italic">
              {article.excerpt}
            </p>

            {/* Dropcap styling for first paragraph */}
            <style>{`
              .magazine-content p:first-of-type::first-letter {
                float: left;
                font-size: 4rem;
                line-height: 1;
                padding-right: 0.75rem;
                padding-top: 0.25rem;
                font-weight: bold;
                color: #f59e0b;
              }
            `}</style>

            {/* Content */}
            <div 
              className="magazine-content prose prose-xl dark:prose-invert max-w-none 
                prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-white 
                prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-lg
                prose-a:text-amber-500 hover:prose-a:text-amber-600 
                prose-strong:text-slate-900 dark:prose-strong:text-white 
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 dark:prose-blockquote:bg-amber-900/10 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300
                prose-lead:text-xl prose-lead:text-slate-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Image Gallery */}
            {article.images && article.images.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {article.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-3">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-amber-500"
                />
                <div>
                  <p className="text-amber-500 text-sm font-bold tracking-wider mb-1">WRITTEN BY</p>
                  <h3 className="text-2xl font-bold text-white mb-2">{article.author.name}</h3>
                  <p className="text-amber-500 font-medium mb-4">{article.author.role}</p>
                  <p className="text-slate-400">
                    Award-winning writer specializing in {article.category.toLowerCase()}. 
                    Contributing to ShopNex Magazine since 2020 with insightful features and in-depth analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Mobile Share Buttons */}
          <div className="xl:hidden mt-12 flex justify-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isLiked ? 'bg-red-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isSaved ? 'bg-amber-500 text-black' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
              More in {article.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/magazine/${relatedArticle.slug}`}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img
                          src={relatedArticle.coverImage}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-amber-500 text-sm font-bold tracking-wider mb-2">
                          {relatedArticle.category.toUpperCase()}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                          {relatedArticle.subtitle}
                        </p>
                        <span className="text-slate-500 text-sm">{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 px-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto flex justify-between">
          <button
            onClick={() => navigate('/magazine')}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Magazine
          </button>
          <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">
            <Share2 className="w-5 h-5" />
            Share Article
          </button>
        </div>
      </section>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-amber-500 text-black rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
