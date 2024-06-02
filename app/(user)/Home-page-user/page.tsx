import React from 'react';
import Link from 'next/link';

export default function MaterialPage() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/Inventory" >
                            Inventory
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1>Material Page</h1>
        </div>
    );
}
