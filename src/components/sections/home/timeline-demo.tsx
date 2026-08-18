import React from "react";
import { Timeline } from "@/components/ui/timeline";
import PhraseAnimation from "@/components/common/phrase-reveal";
import {
  IconMessageChatbot,
  IconBrandWhatsapp,
  IconMail,
  IconHeadset,
  IconShoppingCart,
  IconHome,
  IconUserScan,
  IconShirt,
  IconSearch,
} from "@tabler/icons-react";

const WorkflowCard = ({
  icon: Icon,
  title,
  description,
  features,
  caseStudyBadge,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  caseStudyBadge?: string;
}) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between">
    <div>
      {caseStudyBadge && (
        <div className="mb-3 flex justify-start">
          <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-bold">
            {caseStudyBadge}
          </span>
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 leading-snug">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
      {features.map((feature, i) => (
        <span
          key={i}
          className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground"
        >
          {feature}
        </span>
      ))}
    </div>
  </div>
);

export function TimelineDemo() {
  const data = [
    {
      title: "Featured Case Studies",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Verified  Client  Outcomes" />
          </h3>
          <p className="mb-8 text-xs text-muted-foreground md:text-lg mt-1.5">
            <PhraseAnimation phrase="Real enterprise automation deployment results built by NewEra Automations." />
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <WorkflowCard
              icon={IconShirt}
              title="GT Atelier (London Slow Fashion)"
              description="Automated UK fashion influencer lead scraper & outreach. Scraped 439 quality leads, 189 verified emails, and delivered positive influencer responses in 7 days."
              features={["439 Leads", "189 Emails", "7 Days Delivery", "Google Sheets Approval"]}
              caseStudyBadge="London Case Study"
            />
            <WorkflowCard
              icon={IconSearch}
              title="Pradeep Kumar (SEO Consultant)"
              description="Dual inbox automation combining Gmail + Outlook with 24/7 smart auto-replies. Sent 1,800+ outreach emails on autopilot and saved 2-3 hours daily."
              features={["1,800+ Emails", "Dual Inbox (Gmail/Outlook)", "2-3h Saved Daily", "n8n Workflow"]}
              caseStudyBadge="SEO Consultant Case Study"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Lead Capture & Qualification",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Never  Lose  A  Lead  Again" />
          </h3>
          <p className="mb-8 text-xs text-muted-foreground md:text-lg mt-1.5">
            <PhraseAnimation phrase="Automated systems that capture, qualify, and route leads 24/7 — so your sales team only talks to people who are ready to buy." />
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <WorkflowCard
              icon={IconBrandWhatsapp}
              title="WhatsApp Lead Qualifier"
              description="AI agent that instantly responds to WhatsApp inquiries, asks qualifying questions, scores leads, and routes hot prospects directly to your sales team."
              features={["Auto-Response", "Lead Scoring", "CRM Sync", "24/7 Active"]}
            />
            <WorkflowCard
              icon={IconMail}
              title="Cold Email Infrastructure"
              description="Full-stack cold outreach system with domain warm-up, email verification, personalized sequences, and automated follow-ups that land in the inbox."
              features={["Domain Warm-up", "Email Verification", "Auto Follow-up", "Analytics"]}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Customer Operations & Vertical AI",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Support  That  Scales  Itself" />
          </h3>
          <p className="mb-8 text-xs text-muted-foreground md:text-lg mt-1.5">
            <PhraseAnimation phrase="From instant ticket resolution to abandoned cart recovery — let AI handle repetitive work while your team focuses on growth." />
          </p>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            <WorkflowCard
              icon={IconHeadset}
              title="AI Support Auto-Resolver"
              description="Intelligent support agent trained on your knowledge base. Resolves common queries instantly, escalates complex issues with full context."
              features={["Knowledge Base AI", "Smart Escalation", "Multi-Channel"]}
            />
            <WorkflowCard
              icon={IconShoppingCart}
              title="E-Commerce Cart Recovery"
              description="Multi-touch recovery system detecting abandoned carts and triggering personalized WhatsApp & email follow-ups."
              features={["Cart Detection", "WhatsApp Nudge", "Discount Engine"]}
            />
            <WorkflowCard
              icon={IconHome}
              title="Real Estate Booking Agent"
              description="Automated site visit scheduling, property matching, and follow-up sequences for real estate agencies."
              features={["Auto Scheduling", "Property Match", "Follow-ups"]}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip mt-10">
      <Timeline data={data} />
    </div>
  );
}
