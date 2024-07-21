import React from 'react';

const ProjectDiscussion = () => {
    return (
        <div className="container flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 w-[90%]">
            <div className="text-white">
                <h2 className="text-4xl font-bold mb-2">Let&apos;s discuss<br />Your project</h2>
                <p className="text-lg">
                    Let&apos;s figure out how to create an effective application,<br />
                    its cost and terms of its development
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 w-120">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                            <input type="text" id="fullName" name="fullName" defaultValue="My Name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                    🇮🇳
                                </span>
                                <input type="tel" id="phoneNumber" name="phoneNumber" defaultValue="+91 000000000" className="px-3 py-2 border border-gray-300 rounded-md overflow-hidden" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business name</label>
                            <input type="text" id="businessName" name="businessName" defaultValue="ABC Technologies PVT LTD" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-1">Business mail</label>
                            <input type="email" id="businessEmail" name="businessEmail" defaultValue="demoaccount@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
                        Discuss the project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectDiscussion;