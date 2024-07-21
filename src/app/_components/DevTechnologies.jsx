import React from 'react';

const FullDevelopmentCycle = () => {
    const webTechnologies = [
        'PHP', 'Javascript', 'Node.JS', 'Web Socket', 'Socket.io', 'Vue.js',
        'Nuxt', 'MySQL', 'Laravel', 'GO lang', 'django', 'Python'
    ];

    const mobileTechnologies = [
        'Swift', 'Kotlin', 'Alamofire', 'Firebase', 'CoreData', 'Room', 'Realm',
        'Coroutine', 'RxJava', 'RxSwift', 'Unit Test', 'Navigation'
    ];

    const developmentServices = [
        'iOS development',
        'Android development',
        'Web development',
        'UI/UX design',
        'Testing',
        'Launch',
        'IT consulting'
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Full development cycle</h2>
                    <p className="mb-6 text-gray-600">We use proven technologies</p>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Web</h3>
                        <p className="text-gray-700">
                            {webTechnologies.join(' / ')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Mobile</h3>
                        <p className="text-gray-700">
                            {mobileTechnologies.join(' / ')}
                        </p>
                    </div>
                </div>

                <div className="md:w-1/3 mt-8 md:mt-0">
                    {developmentServices.map((service, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer hover:underline">
                            <span className="text-gray-700">{service}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullDevelopmentCycle;