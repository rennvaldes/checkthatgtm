import Image from "next/image";
import { cn } from '@/lib/litebox-lib/utils/cn';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  highlightText?: string;
  smallCopy?: string;
  images?: ImageProps[];
  className?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  highlightText,
  smallCopy,
  images,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn(`bg-[#20233A] py-6 px-4 lg:px-10 lg:py-8`, className)}>
      {icon && (
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className="mb-4 lg:mb-[1.875rem]"
        />
      )}
      <h4 className="text-[#FDFDFF] text-[1.375rem] font-medium mb-4">
        {title}
      </h4>
      <p className="text-[#B4B4D0] font-elza text-sm lg:text-base lg:leading-relaxed mb-4">
        {description}
      </p>
      {highlightText && (
        <p className="font-elza text-[#33FF9D] text-base leading-relaxed mb-4">
          {highlightText}
        </p>
      )}
      {smallCopy && (
        <p className="text-[#9FA3BD] text-[0.75rem] lg:text-sm mb-4">
          {smallCopy}
        </p>
      )}
      {images && (
        <div className="flex gap-3  scale-[0.8] -translate-x-[10%] lg:scale-100 lg:-translate-x-0">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={40}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeatureCard;
