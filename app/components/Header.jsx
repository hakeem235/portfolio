import Link from "next/link";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-between items-center w-full  p-1 lg:px-3 py-4  bg-gray-50 dark:bg-gray-800">
      <div>
        <Link href="/">
          <p className="text-blue-600 font-extrabold text-3xl">
            AHMED<span className="text-black">HAKEEM</span>
          </p>
        </Link>
      </div>
      <ul className=" flex justify-center gap-3 text-sm items-center align-middle font-medium text-blue-600">
        <li className="hover:text-blue-900">
          <Link href="/web">Web Projects</Link>
        </li>
        <li  className="hover:text-blue-900">
          <Link href="/dataAn">Data Analytics Projects</Link>
        </li>
        <li className="hover:text-blue-900">
          <Link href="/mobile">Mobile App Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
