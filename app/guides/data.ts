interface Guide {
  id: string;
  title: string;
  description: string;
  icon: string;
  slideUrl?: string;
  videoUrl?: string;
}

export const GUIDES: Guide[] = [
  {
    id: 'ai-led-growth',
    title: "AI-Led Growth",
    description: "A comprehensive guide to leveraging AI for business growth strategies (June 2024)",
    icon: "document",
    slideUrl: "https://drive.google.com/file/d/1ii6gWtdzbh4MGBeBKcs6ndQ0f85dlbaW/preview",
    videoUrl: "https://www.loom.com/share/fdd3427009de44f8a0fe2eb5b48d3ad8"
  },
  {
    id: 'ai-marketing-conf',
    title: "AI x Marketing Conference",
    description: "Building an AI-Led Growth Engine - September 24, 2024",
    icon: "document",
    slideUrl: "https://docs.google.com/presentation/d/19pbOLQ-E3VAanfEjm6rba4WK1lTy58pVYMrJ8y_pPhA/embed"
  }
]; 