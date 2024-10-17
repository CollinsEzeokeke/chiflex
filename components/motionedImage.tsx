import Image, { ImageProps } from "next/image";
import { motion, MotionProps } from "framer-motion";

// Combine the types from Next.js Image and framer-motion props
type MotionImageProps = Omit<ImageProps, "ref"> & MotionProps;

// Create a motion-enhanced version of the Next.js Image component
const MotionImage: React.FC<MotionImageProps> = ({
  src,
  alt,
  fill,
  width,
  height,
  ...rest
}) => {
  // Create a motion-enhanced version of the Image component
  const MotionImageComponent = motion(Image);

  return (
    <MotionImageComponent
      src={src}
      alt={alt}
      fill={fill} // Correctly pass the layout prop
      width={width}
      height={height}
      {...rest} // Spread the rest of the props, including motion props
    />
  );
};

export default MotionImage;
