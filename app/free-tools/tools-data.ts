import {
  DocumentTextIcon,
  FilmIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export const heroIcons = {
  'text': DocumentTextIcon,
  'camera-movie': FilmIcon,
  'sparkles': MagnifyingGlassIcon,
} as const;

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof heroIcons;
  videoUrl?: string;
  iframeUrl?: string;
}

export const TOOLS: Tool[] = [
  {
    id: 'keyword-intent-outline',
    title: "Keyword → Intent + Outline",
    description: "Transform keywords into search intent analysis and content outlines for SEO-optimized content creation.",
    icon: "text",
    videoUrl: "https://assets.super.so/de237c1b-7392-43a5-bf0c-f491a81e4bcc/videos/e7aa4ce8-b79f-49ce-9963-801dd06e66e0/AI_workflow_-_search_intent_and_outline.mp4",
    iframeUrl: "https://app.airops.com/public_apps/7e65c021-89fb-4e1e-a740-be6b7f558f13/run"
  },
  {
    id: 'tv-movie-rewriter',
    title: "Movie Character Rewriter",
    description: "Transform your favorite characters with AI. Reimagine iconic scenes and dialogues with a fresh perspective.",
    icon: "camera-movie",
    videoUrl: "https://assets.super.so/de237c1b-7392-43a5-bf0c-f491a81e4bcc/videos/d18ec9af-664b-41fc-bb04-8ccafe6434fd/tv-movie-rewrite-workflow.mp4",
    iframeUrl: "https://app.airops.com/public_apps/55890aad-b3ec-4d59-a095-00539e0839c2/run"
  },
  {
    id: 'seo-page-analyzer',
    title: "SEO Page Analyzer",
    description: "Analyze any webpage or URL for SEO optimization opportunities and get actionable recommendations.",
    icon: "sparkles",
    videoUrl: "https://assets.super.so/de237c1b-7392-43a5-bf0c-f491a81e4bcc/videos/ceabaaa7-b9f2-40c4-81da-68bdc6ea8a7f/2024-05-17_-_Keyword_URL_to_SEO_analysis.mp4",
    iframeUrl: "https://app.airops.com/public_apps/57f58bf6-8e7a-4111-bfa3-b94d6d6d4594/run"
  }
];
