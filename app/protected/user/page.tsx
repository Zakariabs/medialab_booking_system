import React from 'react';

import HomePageUser from './HomePageUser';
interface PageProps {
    // Define your props here
}

const Page: React.FC<PageProps> = (props) => {
    // Add your component logic here

    return (
        <div>
            <HomePageUser />
        </div>
    );
};

export default Page;