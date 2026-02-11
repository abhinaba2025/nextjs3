import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronRight, Heart, MessageCircle, Bookmark } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import { useState } from 'react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-indigo-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`
    };
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{post.category}</span>
              </div>

              <span className="inline-block px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <p className="font-semibold text-white">{post.author.name}</p>
                    <p className="text-sm text-white/60">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_80px] gap-8">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              {/* Excerpt */}
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium border-l-4 border-indigo-600 pl-6">
                {post.excerpt}
              </p>

              {/* Content */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-strong:text-slate-900 dark:prose-strong:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Written by</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{post.author.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{post.author.role}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Passionate writer and expert in {post.category.toLowerCase()}. Sharing insights and inspiration to help you live your best life.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar - Share Buttons */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
                  } shadow-lg`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    isSaved 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600'
                  } shadow-lg`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
                <div className="w-12 h-px bg-slate-300 dark:bg-slate-600 mx-auto" />
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="lg:hidden mt-8 flex justify-center gap-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              } shadow-lg`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shadow-lg">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isSaved ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              } shadow-lg`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-lg"
            >
              <Twitter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-indigo-600 font-medium">{relatedPost.category}</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-2">{relatedPost.readTime}</p>
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
      <section className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto flex justify-between">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
          <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
            <Share2 className="w-5 h-5" />
            Share Article
          </button>
        </div>
      </section>
    </div>
  );
}
