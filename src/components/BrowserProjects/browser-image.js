import React from 'react';
import Image from 'next/image';
import CastleImage from '@/assets/screenshots/CastlePlaceHolder.png';

const BrowserImage = ({ Align, projectName, image }) => {
    // Determine justifyContent based on Align prop
    const justifyContent = Align === 'Left' ? 'flex-start' : 'flex-end';

    return (
        <div style={{ backgroundColor: 'black', width: '60%', display: 'flex', justifyContent: justifyContent }}>
            <div style={{ width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: 'red', width: '100%' }}>This is the Nav Bar</div>
                <Image
                    src={CastleImage}
                    alt='Test'
                    layout='responsive'
                    width={1280}
                    height={720}
                    objectFit='contain'
                    style={{ width: '100%', height: 'auto', minWidth: '320px', minHeight: '180px', maxHeight: '360px', maxWidth: '640px' }}
                />
            </div>
        </div>
    );
};

export default BrowserImage;