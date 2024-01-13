import Image from "next/image";

/*
 * This component fixes the following issue:
 * https://github.com/vercel/next.js/issues/58888
 */

// @ts-ignore
// eslint-disable-next-line jsx-a11y/alt-text
export const ImageWrapper = (props) => <Image {...props} />;
