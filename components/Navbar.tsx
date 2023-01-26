import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [navbar, setNavbar] = useState({
    backgroundColor: 'transparent',
    textColor: 'white',
  });

  const handleOpen = (): void => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY > 90) {
        setNavbar({
          backgroundColor: 'white',
          textColor: 'black',
        });
      } else {
        setNavbar({
          backgroundColor: 'transparent',
          textColor: 'white',
        });
      }
    };
    window.addEventListener('scroll', changeNavbar);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-20 w-full ease-in duration-300"
      style={{
        backgroundColor: navbar.backgroundColor,
      }}
    >
      <div className="max-w-5xl m-auto text-white flex justify-between items-center p-4">
        <Link href="/">
          <h1
            className="text-4xl font-bold"
            style={{ color: navbar.textColor }}
          >
            Captur
          </h1>
        </Link>
        <ul
          className="hidden sm:flex gap-5"
          style={{ color: navbar.textColor }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile button */}
        <div className="sm:hidden z-20">
          {open ? (
            <AiOutlineClose size={20} onClick={handleOpen} />
          ) : (
            <div style={{ color: navbar.textColor }}>
              <AiOutlineMenu size={20} onClick={handleOpen} />
            </div>
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            open
              ? 'sm:hidden absolute inset-0 flex justify-center items-center h-screen w-full text-center bg-black/90 ease-in duration-300'
              : 'sm:hidden absolute top-0 bottom-0 left-[100%] right-0 flex justify-center items-center h-screen w-full text-center bg-black/90 ease-in duration-300'
          }
        >
          <ul className="flex flex-col gap-5 text-4xl font-bold">
            <li className="hover:text-gray-500">
              <Link href="/" onClick={handleOpen}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/#gallery" onClick={handleOpen}>
                Gallery
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/portfolio" onClick={handleOpen}>
                Work
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/contact" onClick={handleOpen}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
