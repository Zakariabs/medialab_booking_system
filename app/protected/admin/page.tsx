
import React from 'react';
import HomeAdmin from './HomeAdmin';

interface PageProps {
    // Define your props here
}



const Page: React.FC<PageProps> = () => {
    // Add your component logic here

    return (
        <div>
            <HomeAdmin />
        </div>
    );
};

export default Page;