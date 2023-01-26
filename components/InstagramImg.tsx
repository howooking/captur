import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramImg({
  image,
}: {
  image: number;
}): JSX.Element {
  return (
    <div>
      <Image
        src={`/ig-img-${image}.jpeg`}
        alt="instaImg"
        width={800}
        height={600}
      />
    </div>
  );
}
