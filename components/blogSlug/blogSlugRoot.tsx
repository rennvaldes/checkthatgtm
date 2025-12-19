import React from "react";
import BlogSlugHeader from "./blogSlugHeader";
import BlogSlugContent from "./blogSlugContent";
import BlogSlugKeepReading from "./blogSlugKeepReading";
import { CtaSection } from "@/components/home/footer";

interface BlogSlugRootProps {
  articleData: any;
  currentUrl: string;
}

// New content sections mapped to preserve image positions
// Using proper markdown formatting to match original styling
const NEW_CONTENT_SECTIONS = [
  {
    // Section 1: Title and intro (before first image/video)
    text: `### TL;DR

- 2025 was our first full year operating as GrowthX
- We crossed $12M in revenue and became cash-flow positive by September
- We grew to 70+ people across strategy, content, engineering, design, product, and ops
- We helped category-leading companies turn content into measurable pipeline and revenue
- We scaled quickly while keeping quality and judgment intact

![Intro](/images/blog/intro.png)

## From an idea to a working company

GrowthX started from a practical observation:

Most growth programs struggle because they aren't designed to hold up over time.

Teams ship campaigns that look good but don't compound.
Metrics improve, but revenue doesn't follow.
Processes change every quarter, so nothing really gets better.

In 2025, we focused on getting the basics right.

That meant:

- building repeatable systems instead of isolated initiatives
- tying work directly to pipeline and revenue
- combining automation with experienced editorial and strategic oversight

The outcome was a profitable business in its first full year, built on work that clients could see and measure.`,
  },
  {
    // Section 2: After video (before "Working with teams")
    text: `## Working with teams that care about outcomes

This year, we partnered with companies including Ramp, Webflow, Baseten, Outreach, Superhuman, SentinelOne, Abnormal Security, Airbyte, Lovable, and Surge AI.

Our role went beyond producing content.

We helped teams set up:

- dedicated content properties (such as The Cash Flow Desk for Ramp)
- programmatic SEO programs
- structured editorial workflows with consistent senior review
- distribution tied into CRM systems and attribution models

In multiple cases, individual pieces of content generated six-figure pipeline impact.

That's the difference between content as activity and content as part of the revenue system.`,
  },
  {
    // Section 3: After second image
    text: `## Scaling without lowering the bar

One of our main internal goals this year was to increase volume without compromising standards.

In practice, that looked like:

- hundreds of high-quality articles shipped across accounts
- days where double-digit pieces went live for a single customer
- clear processes for briefing, drafting, review, optimization, and distribution

Performance data flows back into planning and editorial decisions.
Topics, formats, and approaches that work get repeated. Those that don't get adjusted or dropped.

One encouraging signal: GrowthX content increasingly being referenced by tools like Perplexity, which suggests the work holds up as a reliable source of information.`,
  },
  {
    // Section 4: After third image
    text: `## Community and conversations

Growth work doesn't happen in isolation.

This year we continued investing in in-person and small-group conversations through our CXO Breakfast Series. Our December event was the most attended of the year, with strong feedback and open discussion among operators.

We also expanded the AI-Led Growth Community, which is open and practical in nature. It's become a place for GTM leaders to compare notes, share what's working, and talk candidly about what isn't.

These conversations remain an important part of how we learn and improve.`,
  },
  {
    // Section 5: After fourth image
    text: `![Tech](/images/blog/tech.png)

## Platform and internal foundations

Behind the scenes, our product, engineering, and design teams focused on increasing reliability and capacity.

During 2025, we:

- improved system performance to support significantly higher throughput
- standardized internal workflows to reduce manual overhead
- introduced faster testing and release cycles, averaging 20+ production deployments per week

This work isn't always visible externally, but it's what allows us to operate consistently at scale.

More of this will become visible over time.`,
  },
  {
    // Section 6: Final section
    text: `![Closing](/images/blog/closing.png)

## What I'm most proud of

Looking back on the year, I'm proud that we:

- earned long-term trust from our clients
- delivered work we're comfortable putting our name on
- grew quickly without losing care for quality or people

We're using the end of the year to reflect and make improvements where needed.

The foundation is solid.
The direction is clear.

We're looking forward to building on this in 2026.

— Marcel`,
  },
];

/**
 * Extracts heading level from original text section to preserve styling
 */
function extractHeadingLevel(text: string): { level: number; hasHeading: boolean } {
  const headingMatch = text.match(/^(#{1,6})\s+/m);
  if (headingMatch) {
    return { level: headingMatch[1].length, hasHeading: true };
  }
  return { level: 2, hasHeading: false };
}

/**
 * Preserves styling patterns from original content when mapping new content
 */
function preserveOriginalStyling(originalText: string, newText: string): string {
  // Extract heading level from original
  const originalHeading = extractHeadingLevel(originalText);
  
  // If original had a heading, check if new text needs heading level adjustment
  if (originalHeading.hasHeading) {
    // Find first heading in new text
    const newHeadingMatch = newText.match(/^(#{1,6})\s+(.+)$/m);
    if (newHeadingMatch && newHeadingMatch[1].length !== originalHeading.level) {
      // Adjust heading level to match original
      const headingPrefix = '#'.repeat(originalHeading.level);
      newText = newText.replace(/^(#{1,6})\s+(.+)$/m, `${headingPrefix} $2`);
    }
  }

  // Preserve list formatting style (check if original used - or *)
  const originalListStyle = originalText.match(/^[\s]*([-*])\s/m);
  const newListStyle = newText.match(/^[\s]*([-*])\s/m);
  
  if (originalListStyle && newListStyle && originalListStyle[1] !== newListStyle[1]) {
    // Convert list style to match original
    const oldChar = newListStyle[1];
    const newChar = originalListStyle[1];
    newText = newText.replace(new RegExp(`^([\\s]*)${oldChar}\\s`, 'gm'), `$1${newChar} `);
  }

  return newText;
}

/**
 * Maps new content to original content structure, preserving images, videos, and styling
 * This function splits content by images/videos and maps new text sections to corresponding positions
 */
function mapContentWithImages(originalContent: string): string {
  if (!originalContent) return NEW_CONTENT_SECTIONS.map(s => s.text).join('\n\n');

  // Extract all media blocks from original content (images and videos)
  // Images: markdown ![alt](url) or HTML <img>
  // Videos: links with video extensions or HTML <video> tags
  const imageRegex = /(!\[([^\]]*)\]\(([^)]+)\)|<img[^>]*>)/g;
  const videoRegex = /(<video[^>]*>[\s\S]*?<\/video>|\[([^\]]+)\]\(([^)]+\.(mp4|webm|ogg|mov))\))/gi;
  
  const media: Array<{ match: string; index: number; type: 'image' | 'video' }> = [];
  let match;
  
  // Extract images
  while ((match = imageRegex.exec(originalContent)) !== null) {
    media.push({
      match: match[0],
      index: match.index,
      type: 'image',
    });
  }
  
  // Extract videos
  while ((match = videoRegex.exec(originalContent)) !== null) {
    media.push({
      match: match[0],
      index: match.index,
      type: 'video',
    });
  }

  // Sort media by position in content
  media.sort((a, b) => a.index - b.index);

  // If no media found, return new content as-is
  if (media.length === 0) {
    return NEW_CONTENT_SECTIONS.map(s => s.text).join('\n\n');
  }

  // Split original content into sections separated by media
  const sections: Array<{ text: string; media?: string; mediaType?: 'image' | 'video' }> = [];
  let currentIndex = 0;

  media.forEach((item) => {
    // Text before this media
    const textBefore = originalContent.substring(currentIndex, item.index).trim();
    if (textBefore || sections.length === 0) {
      sections.push({ text: textBefore || '' });
    }
    // Add the media
    sections.push({ text: '', media: item.match, mediaType: item.type });
    currentIndex = item.index + item.match.length;
  });

  // Add remaining text after last media
  const textAfter = originalContent.substring(currentIndex).trim();
  if (textAfter) {
    sections.push({ text: textAfter });
  }

  // Map new content sections to original structure, preserving media and styling
  // Each text section gets replaced with corresponding new content, media stays in place
  const result: string[] = [];
  let newContentIndex = 0;

  sections.forEach((section) => {
    if (section.media) {
      // Preserve media (image or video) in its original position
      result.push(section.media);
    } else {
      // Replace text section with new content, preserving original styling
      if (newContentIndex < NEW_CONTENT_SECTIONS.length) {
        let newSection = NEW_CONTENT_SECTIONS[newContentIndex].text;
        
        // Preserve styling from original section if it exists
        if (section.text) {
          newSection = preserveOriginalStyling(section.text, newSection);
        }
        
        if (newSection.trim()) {
          result.push(newSection);
        }
        newContentIndex++;
      } else if (section.text) {
        // If we run out of new sections, keep original text
        result.push(section.text);
      }
    }
  });

  // Add any remaining new content sections that didn't get mapped
  while (newContentIndex < NEW_CONTENT_SECTIONS.length) {
    result.push(NEW_CONTENT_SECTIONS[newContentIndex].text);
    newContentIndex++;
  }

  return result.filter(s => s.trim()).join('\n\n');
}

export default function BlogSlugRoot({
  articleData,
  currentUrl,
}: BlogSlugRootProps) {
  // Check if this is the GrowthX 2025 Year in Review post
  const isYearReviewPost =
    articleData?.title?.includes("2025") &&
    (articleData?.title?.includes("Year") || articleData?.title?.includes("Building Real Growth"));

  // Process content to map new text while preserving images
  let processedContent = articleData.content;
  let displayTitle = articleData.title;

  // Override content for Year in Review post
  if (isYearReviewPost) {
    displayTitle = "GrowthX 2025: Building Real Growth";
    processedContent = mapContentWithImages(articleData.content);
  }

  const displayData = {
    ...articleData,
    title: displayTitle,
    content: processedContent,
  };

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-start pt-[122px] md:pt-0"
    >
      <BlogSlugHeader isLoading={false} data={displayData} />
      <BlogSlugContent
        isLoading={false}
        content={displayData.content}
        currentUrl={currentUrl}
      />
      <BlogSlugKeepReading relatedArticles={articleData.related_articles} />
      <CtaSection />
    </main>
  );
}
