"use client"
import { Button } from '@/components/ui/button';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';

const SharetoSocial: React.FC = () => {
  const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  const shareUrl = window.location.href;
  const shareText = document.title;

  const handleShare = (platform: 'facebook' | 'twitter') => {
    let url = '';
    if (platform === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    } else if (platform === 'twitter') {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center gap-4">
      <div className="font-bold">Share on Social Media</div>
      <div className="flex items-center gap-2">
        <Button
          className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          size="icon"
          variant="ghost"
          onClick={() => handleShare('facebook')}
        >
          <FacebookOutlined className="text-2xl" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button
          className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          size="icon"
          variant="ghost"
          onClick={() => handleShare('twitter')}
        >
          <TwitterOutlined className="text-2xl" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
      </div>
    </div>
  );
};

export default SharetoSocial;
