import { useEffect, useRef, useState } from 'react';

import { Card } from '../../components/Card.tsx';
import { ShimmerCard } from '../../components/ShimmerCard.tsx';
import { FeedsPageProps } from '../../ts/types.ts';

export const FeedsUsingApiObserver = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<FeedsPageProps[]>([]);

  const fetchPostData = async () => {
    setTimeout(async () => {
      const response = await fetch('https://meme-api.com/gimme/9');
      const newPosts = await response.json();
      setPosts((prev) => [...prev, ...newPosts.memes]);
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([event]) => {
        if (event.isIntersecting) {
          fetchPostData();
        }
      },
      {
        root: null,
        // rootMargin: '100px',
        threshold: 1.0,
      },
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="feeds_container"
      className="h-full w-full overflow-auto flex flex-wrap justify-center items-center gap-4 mt-4"
    >
      {posts?.map((post: FeedsPageProps, index) => (
        <Card
          key={`${post.title}-${index}`}
          postLink={post.postLink}
          title={post.title}
          url={post.url}
          author={post.postLink}
        />
      ))}

      <div ref={loadingRef}></div>
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  );
};
