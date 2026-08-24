export interface UserData {
  id: string;
  name: string;
  avatar: string;
  message: string;
  role: string;
  stats?: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
  };
  vimeoId?: string;
}

// Client testimonials & Real Case Studies for NewEra Automations
export const userData: UserData[] = [
  {
    id: "gt-atelier",
    name: "GT Atelier (London)",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=GT+Atelier&backgroundColor=c93a2a",
    message:
      "Yes please send over some info :) — We got 439 verified UK fashion leads and positive influencer responses in just 7 days of deployment. The automated hashtag scraper and AI lead classification saved us 30+ hours per week.",
    role: "Slow Fashion Brand, London UK",
    stats: {
      label1: "Leads Generated",
      val1: "439",
      label2: "Time to Deliver",
      val2: "7 Days",
    },
  },
  {
    id: "pradeep-kumar",
    name: "Pradeep Kumar",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Pradeep+Kumar&backgroundColor=0284c7",
    message:
      "NewEra built an n8n workflow that combined my Gmail and Outlook inboxes with automated cold outreach and 24/7 smart auto-replies. It saved me 2-3 hours daily and delivered over 1,800 emails on complete autopilot.",
    role: "SEO Consultant, India",
    stats: {
      label1: "Emails Sent",
      val1: "1,800+",
      label2: "Daily Time Saved",
      val2: "2-3 Hours",
    },
  },
];
