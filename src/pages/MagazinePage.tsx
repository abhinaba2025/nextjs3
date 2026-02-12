import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { magazineArticles, magazineCategories } from '../data/magazines';

export default function MagazinePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = magazineArticles.filter(article => {
    return selectedCategory === 'All' || article.category === selectedCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const featuredArticles = magazineArticles.filter(article => article.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Hero Section - Magazine Style */}
      <section className="relative bg-black overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left - Featured Image */}
          <div className="relative h-[50vh] lg:h-[80vh]">
            {featuredArticles[0] && (
              <Link to={`/magazine/${featuredArticles[0].slug}`}>
                <img
                  src={featuredArticles[0].coverImage}
                  alt={featuredArticles[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden" />
                <div className="absolute bottom-8 left-8 right-8 lg:hidden">
                  <span className="inline-block px-4 py-1 bg-amber-500 text-black text-sm font-bold mb-4">
                    FEATURED
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {featuredArticles[0].title}
                  </h2>
                  <p className="text-white/70 text-sm">
                    {featuredArticles[0].subtitle}
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* Right - Text */}
          <div className="hidden lg:flex flex-col justify-center p-12 bg-black">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h1 className="text-6xl font-black text-white tracking-tight mb-2">
                  SHOP<span className="text-amber-500">NEX</span>
                </h1>
                <p className="text-white/50 text-lg tracking-widest">MAGAZINE</p>
              </div>

              {featuredArticles[0] && (
                <Link to={`/magazine/${featuredArticles[0].slug}`} className="group block">
                  <span className="inline-block px-4 py-1 bg-amber-500 text-black text-sm font-bold mb-4">
                    FEATURED STORY
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                    {featuredArticles[0].title}
                  </h2>
                  <p className="text-xl text-white/70 mb-6">
                    {featuredArticles[0].subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-white/50">
                    <span>{featuredArticles[0].issue}</span>
                    <span>•</span>
                    <span>{featuredArticles[0].readTime}</span>
                  </div>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Stories */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Top Stories
            </h2>
            <span className="text-amber-500 font-bold tracking-widest">
              JANUARY 2024
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/magazine/${article.slug}`}>
                  <div className="relative h-80 overflow-hidden mb-6">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold">
                        {article.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>By {article.author.name}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-y border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 overflow-x-auto pb-2">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
              Browse by:
            </span>
            {magazineCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === category
                    ? 'text-amber-500 border-b-2 border-amber-500 pb-1'
                    : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid - Magazine Layout */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {currentArticles.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 gap-12">
                {currentArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/magazine/${article.slug}`}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={article.coverImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-amber-500 text-sm font-bold tracking-wider mb-2">
                            {article.category.toUpperCase()}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-3">
                            <img
                              src={article.author.avatar}
                              alt={article.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="text-sm">
                              <p className="text-slate-900 dark:text-white font-medium">{article.author.name}</p>
                              <p className="text-slate-500">{article.issue}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-50 hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-amber-500 text-black'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-50 hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black" />
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop"
            alt="Magazine"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Subscribe to Our Magazine
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Get exclusive stories, in-depth features, and curated content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/50 text-sm mt-4">
              Free subscription. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Previous Issues
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['December 2023', 'November 2023', 'October 2023', 'September 2023'].map((issue, index) => (
              <motion.div
                key={issue}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden mb-3">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <span className="text-4xl font-black text-white mb-1">NEX</span>
                    <span className="text-amber-500 text-xs tracking-widest">MAGAZINE</span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white/70 text-sm">{issue}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors" />
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {issue}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
