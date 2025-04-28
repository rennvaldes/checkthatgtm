interface VideoEmbedProps {
  url: string;
  title: string;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
  const getEmbedUrl = (url: string) => {
    // Handle Loom
    if (url.includes('loom.com')) {
      const videoId = url.split('/').pop()?.split('?')[0];
      return `https://www.loom.com/embed/${videoId}`;
    }

    // Handle YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be')
        ? url.split('/').pop()
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  };

  return (
    <div className="relative w-full pt-[56.25%]">
      <iframe
        src={getEmbedUrl(url)}
        title={title}
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        frameBorder="0"
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  );
}
