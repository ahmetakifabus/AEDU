import { WATERMARK_TEXT } from '@/constants/config';

interface WatermarkProps {
  className?: string;
}

export default function Watermark({ className }: WatermarkProps) {
  return (
    <span className={`watermark ${className || ''}`}>
      {WATERMARK_TEXT}
    </span>
  );
}
