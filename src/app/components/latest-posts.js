"use client"

import { useEffect, useState } from 'react';
import LatestPost from './LatestPost';
import { categories } from '../utils/data';

const LatestPosts = ({ blogPage=false, posts=[], displayFilter=true }) => {
  const [filter, setFilter] = useState('all');
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const handleFilterClick = (e) => {
    setFilter(e.target.dataset.value)
  }
  useEffect(() => {
    if(filter && filter !== 'all') {
      const filteredPosts = posts.filter(({ frontmatter: { categories }}) => {
        return categories.find((category) => category.toLowerCase() === filter.toLowerCase())
      });
      setPostsToDisplay(filteredPosts);
    } else {
      setPostsToDisplay(posts)
    }
  }, [filter, posts])

  return (
    <>
      {displayFilter && (
        <div className="custom-container">
          <div>
            <h4 className="text-[4rem] capitalize font-bold">Categories</h4>
            <p className="text-[2rem]">Choose from the categories below to see your preferences</p>
          </div>
          <div className="flex flex-wrap gap-x-[2.5rem] gap-y-[2rem] mt-10">
          <span key="all" className={`lg:w-[22.2rem] rounded-full flex items-center justify-center lg:h-[7.2rem] text-[1.4rem] lg:text-[1.6rem] uppercase border cursor-pointer ${filter === 'all' ? 'border-[#D5A100] text-[#D5A100]' : 'text-[#5C5C5C] border-[#5C5C5C]'} py-4 px-8`} data-value="all" onClick={handleFilterClick}>all</span>
            {categories.map((tag) => (
              <span key={tag} className={`lg:min-w-[22.2rem] rounded-full flex items-center justify-center lg:h-[7.2rem] text-[1.4rem] lg:text-[1.6rem] uppercase border cursor-pointer ${filter === tag ? 'border-[#D5A100] text-[#D5A100]' : 'text-[#5C5C5C] border-[#5C5C5C]'} py-4 px-8`} data-value={tag} onClick={handleFilterClick}>{tag}</span>
            ))}
          </div>
        </div>
      )}
      <div className="custom-container pt-[4rem]">
            {filter === 'all' && (
              <>
                <h3 className="h3 text-[4rem] capitalize font-bold">Latest Posts</h3>
                <h6 className="text-[2rem]">Here are our latest posts so far.</h6>
              </>
            )}
          <div className={`grid grid-cols-1 md:grid-cols-2 md:p-0 mt-8 ${blogPage ? 'lg:grid-cols-3' : ''} gap-16`}>
          {   
            postsToDisplay.map(({ slug, frontmatter }) => {
              const { title, tag, date, cover_image, subtitle } = frontmatter;
              return <LatestPost key={slug} title={title} tag={tag} date={date} coverImage={cover_image} slug={slug} subtitle={subtitle} square={true} />
            })
          }
          
        </div>
      </div>
    </>
  );
};

export default LatestPosts;

