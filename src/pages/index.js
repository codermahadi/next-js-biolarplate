import React from 'react';
import Link from 'next/link';

export default function Detail(){

    return (
        <><div>{people.map((item, i) => (
            <div key={i}>
                <Link as={`/${item.v}/${item.name}`} href="/[vehicle]/[bruno]">    
                <a>{item.v} - {item.name}</a>
                </Link>
                </div>
        ))}
    </div>
    </>
    )
}
