export interface showReelI {
  title: string;
  vimeoId: string;
  thumbnail: string;
  stats: {
    views: number;
    likes: number;
    comments: number;
    repost: number;
  };
}

function vimeoThumb(id: string) {
  return `https://vumbnail.com/${id}_large.jpg`;
}

export const showRealData: showReelI[] = [
  {
    title: "AI Lead Scoring Agent Pipeline",
    vimeoId: "912345678",
    thumbnail: vimeoThumb("912345678"),
    stats: {
      views: 145000,
      likes: 12400,
      comments: 320,
      repost: 890,
    },
  },
  {
    title: "Multi-Channel Parallel Outreach Engine",
    vimeoId: "912345679",
    thumbnail: vimeoThumb("912345679"),
    stats: {
      views: 128000,
      likes: 10900,
      comments: 240,
      repost: 670,
    },
  },
  {
    title: "Async Social Profile Extractor",
    vimeoId: "912345680",
    thumbnail: vimeoThumb("912345680"),
    stats: {
      views: 162000,
      likes: 14800,
      comments: 410,
      repost: 1120,
    },
  },
  {
    title: "Real-Time CRM & Database Sync",
    vimeoId: "912345681",
    thumbnail: vimeoThumb("912345681"),
    stats: {
      views: 115000,
      likes: 9800,
      comments: 190,
      repost: 540,
    },
  },
  {
    title: "24/7 AI Voice & Chat Support Agent",
    vimeoId: "912345682",
    thumbnail: vimeoThumb("912345682"),
    stats: {
      views: 198000,
      likes: 18400,
      comments: 530,
      repost: 1430,
    },
  },
];
