import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (

<div className='header'>

<div className='logo'>
    <Image src='/Images/heroimg.png'alt='logo'width={200}height={150}/>
</div>

<div className='nav'>
    <ul>
        <li>
            <Link href={'/'}>Home</Link>
        </li>

        <li>
            <Link href={'/Shop'}>Shop</Link>
        </li>


        <li>
            <Link href={'/Contact'}>Contact</Link>
        </li>


        <li>
            <Link href={'/About'}>About</Link>
        </li>




    </ul>
</div>


</div>

      )
}

export default Navbar
