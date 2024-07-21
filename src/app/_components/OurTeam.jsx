import Image from 'next/image';
import React from 'react';

const OurTeam = () => {

    return (
        <div className="container mx-auto gap-5 py-8 bg-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Our team</h2>
                    <p className="mb-4">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
                    <div className="flex justify-between mb-4">
                        <div>
                            <p className="text-3xl font-bold">28</p>
                            <p>team members</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">+100</p>
                            <p>projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">7 years</p>
                            <p>in IT sphere</p>
                        </div>
                    </div>
                    <p className="text-sm">All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It&apos;s expensive but worth it!</p>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <Image src="/images/ourteam.png" alt="Our Team" className="rounded-lg shadow-lg" height={400} width={600} />
                </div>
            </div>
        </div>
    );
};

export default OurTeam;