import Link from 'next/link';
import Image from 'next/image';
//
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='/logos/logo-green-flash-1-ligne.svg'
          width={230}
          height={40}
        />
      </div>
      <Link href='/'>
        <a>HOME</a>
      </Link>
      <Link href='auth/signin'>
        <a>Sign In</a>
      </Link>
      {/* <Link>
        <a>See Users</a>
      </Link>
      <Link>
        <a>Stories</a>
      </Link> */}
    </nav>
  );
};

export default Navbar;
