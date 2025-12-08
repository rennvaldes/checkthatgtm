import { cx } from "@/lib/classnames";
import { VideoRoot } from "@/components/home/video/videoRoot";
import { HeroPlayIcon } from "@/components/home/assets/assetsIcons";

interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className }: HeroVideoProps) {
  return (
    <section
      className={cx(
        "w-full p-5 shadow-[inset_0_0_0_.5px_rgba(0,0,0,0.1),0_0_0_.5px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <VideoRoot
        src="/growthx-vid-compressed.mp4"
        className="w-[calc(100vw-40px)]"
        aspectRatio="21/9"
        playButton={<HeroPlayIcon />}
      />
    </section>
  );
}
