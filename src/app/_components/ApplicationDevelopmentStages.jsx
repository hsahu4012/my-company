import Image from 'next/image';
import React from 'react';

const AppDevelopmentStages = () => {
    const stages = [
        {
            title: 'Analysis',
            description: 'We craft precise technical specs, aligning with your business, technology, and user requirements.',
            icon: '📋',
        },
        {
            title: 'Design',
            description: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
            icon: '🎨',
        },
        {
            title: 'Development',
            description: 'We create an extensible architecture, write clean and stable code. We integrate with customer technologies.',
            icon: '💻',
        },
        {
            title: 'Testing',
            description: 'We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.',
            icon: '🧪',
        },
        {
            title: 'Launching',
            description: 'We design the application page and publish it in the App Store and Google Play stores.',
            icon: '🚀',
        },
        {
            title: 'Support',
            description: 'We monitor the stability of the application, update it for new devices and versions of iOS and Android.',
            icon: '🛠️',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8" id="cases">
            <h2 className="text-3xl font-bold mb-8">Application Development Stages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="grid grid-cols-1 gap-8">
                    {stages.slice(0, 3).map((stage, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg">
                            <div className="text-3xl mb-3">{stage.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                            <p className="text-sm text-gray-600">{stage.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/images/mobile-app.png"
                        alt="App Screenshot"
                        height={564}
                        width={440}
                        className="max-w-full h-auto"
                    />
                </div>
                <div className="grid grid-cols-1 gap-8">
                    {stages.slice(3).map((stage, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg">
                            <div className="text-3xl mb-3">{stage.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                            <p className="text-sm text-gray-600">{stage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppDevelopmentStages;