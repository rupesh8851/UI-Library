import { useEffect, useState } from 'react';

import { Card } from '../../components/Card.tsx';
import { ShimmerCard } from '../../components/ShimmerCard.tsx';
import { FeedsPageProps } from '../../ts/types.ts';
import { useDebounceCallback } from '../../utils.ts';

export const FeedsUsingProperty = () => {
  const [posts, setPosts] = useState<FeedsPageProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPostData = async () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch('https://meme-api.com/gimme/9');
      const newPosts = await response.json();
      setPosts((prev) => [...prev, ...newPosts.memes]);
      setLoading(false);
    }, 500);
  };

  const { debounce } = useDebounceCallback({ cb: fetchPostData });

  useEffect(() => {
    debounce();
    const element = document.getElementById('feeds_container');
    if (!element) return;

    element.addEventListener('scroll', () => {
      if (element.clientHeight + element.scrollTop >= element.scrollHeight) {
        debounce();
      }
    });
    return () => document.removeEventListener('scroll', debounce);
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
      {loading &&
        Array(6)
          .fill(0)
          .map((_, i) => <ShimmerCard key={i} />)}
    </div>
  );
};
