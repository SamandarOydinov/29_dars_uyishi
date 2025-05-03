import Link from 'next/link';
import React from 'react';

function Sidebar() {
    return (
        <div className='w-[240px] bg-white text-black h-[100vh] p-4'>
            <p>Sidebar</p>
            <div className='flex flex-col gap-3'>
                <Link href='/'>Home</Link>
                <Link href='/helloFolder/hello'>HelloFolder hello</Link>
                <Link href='/users/1'>Users user</Link>
            </div>
        </div>
    );
}

export default Sidebar;