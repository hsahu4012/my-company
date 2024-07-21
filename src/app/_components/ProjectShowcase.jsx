"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const ProjectShowcase = () => {
    const industries = [
        { name: 'Social media', icon: '📱' },
        { name: 'Fitness and sport', icon: '🏋️' },
        { name: 'Bank', icon: '🏦' },
        { name: 'Construction', icon: '🏗️' },
        { name: 'Game projects', icon: '🎮' },
        { name: 'Education', icon: '🎓' },
        { name: 'Auto, transport', icon: '🚗' },
        { name: 'Medicine, health', icon: '🏥' },
        { name: 'Restaurants, food delivery', icon: '🍽️' },
        { name: 'Marketplaces', icon: '🛒' },
        { name: 'AR technology', icon: '🕶️' },
        { name: 'TV series', icon: '📺' },
        { name: 'Startups', icon: '🚀' },
        { name: 'Religion', icon: '🕌' },
        { name: 'Online courses', icon: '💻' },
    ];
    const projects = [
        {
            num: 1,
            title: "Project 1",
            description: "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.",
            details: "Business analysis | iOS | Android | QA | UI/UX Design",
            location: "India",
            industry: "Real Estate",
            growth: "400%",
            activeUsers: "+ 200,000",
            appStoreImage: "/images/appstore.png",
            googlePlayImage: "/images/googleplay.png",
            phoneImage: "/images/phone.png"
        },
        {
            num: 2,
            title: "Project 2",
            description: "Developed a comprehensive fitness tracking application, integrating real-time workout monitoring, nutrition logging, and personalized fitness plans. Enhancing user engagement through interactive challenges and progress tracking.",
            details: "Health & Fitness | iOS | Android | Backend Development | UI/UX Design",
            location: "USA",
            industry: "Health & Fitness",
            growth: "350%",
            activeUsers: "+ 150,000",
            appStoreImage: "/images/appstore.png",
            googlePlayImage: "/images/googleplay.png",
            phoneImage: "/images/health.png"
        },
        {
            num: 3,
            title: "Project 3",
            description: "Designed an intuitive e-commerce platform with advanced search capabilities, secure payment options, and a user-friendly interface. Streamlined order management and enhanced customer service features.",
            details: "E-commerce | Web | Backend Development | UI/UX Design | Security",
            location: "UK",
            industry: "Retail",
            growth: "500%",
            activeUsers: "+ 300,000",
            appStoreImage: "/images/appstore.png",
            googlePlayImage: "/images/googleplay.png",
            phoneImage: "/images/retail.png"
        },
        {
            num: 4,
            title: "Project 4",
            description: "Created a robust project management tool featuring task tracking, team collaboration, and progress reporting. Optimized workflow management and integrated real-time notifications for improved team productivity.",
            details: "Project Management | Web | API Integration | UI/UX Design | Agile",
            location: "Canada",
            industry: "Software",
            growth: "600%",
            activeUsers: "+ 250,000",
            appStoreImage: "/images/appstore.png",
            googlePlayImage: "/images/googleplay.png",
            phoneImage: "/images/phone.png"
        },
    ];


    const [selectedProject, setSelectedProject] = useState(1);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">
                Developed more than <span className="text-green-500">100</span> projects in{' '}
                <span className="text-green-500">15</span> industries
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span className="text-2xl">{industry.icon}</span>
                        <span>{industry.name}</span>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Projects we are proud of</h2>
            <p className="mb-6">
                Our software development company is truly proud of the wonderful clients we have
                worked with. We enjoy a long-term partnership
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 space-x-3 mb-8">
                {projects.map((project) => (
                    <button
                        key={project.num}
                        className={`px-4 py-2 border rounded ${selectedProject === project.num ? 'bg-blue-500 text-white' : 'hover:underline'}`}
                        onClick={() => setSelectedProject(project.num)}
                    >
                        Project {project.num}
                    </button>
                ))}
            </div>

            {projects.map((project) => (
                selectedProject === project.num && (
                    <div key={project.num} className="bg-gray-100 p-6 rounded-lg flex flex-wrap flex-col md:flex-row">
                        <div className="w-full md:w-1/2 pr-4">
                            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <p className="mb-4">{project.details}</p>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-yellow-500">📍</span>
                                <span>{project.location}</span>
                                <span className="text-yellow-500 ml-4">🏠</span>
                                <span>{project.industry}</span>
                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                                <div>
                                    <div className="font-bold text-2xl">{project.growth}</div>
                                    <div>User Growth</div>
                                </div>
                                <div>
                                    <div className="font-bold text-2xl">{project.activeUsers}</div>
                                    <div>Active Users</div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <Image src={project.appStoreImage} alt="App Store" height={200} width={200} />
                                <Image src={project.googlePlayImage} alt="Google Play" height={200} width={200} />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src={project.phoneImage} alt="Project Phone" height={450} width={450} />
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default ProjectShowcase;