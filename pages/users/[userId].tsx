import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

function UserDetails() {
    const router = useRouter();
    const params = useParams();

    console.log(router, params);
    

    return (
        <div>
            <h1 className='text-3xl'>User Detail page {params?.userId}</h1>
            <button onClick={() => router.back()}>Back</button>
        </div>
    );
}

export default UserDetails