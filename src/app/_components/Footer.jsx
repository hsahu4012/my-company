import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Footer */}
            <div className="bg-gray-900 text-white p-8 rounded-lg">
                <div className="flex justify-center  items-center mb-4">
                    <Image src="/images/footer-logo.png" alt="My Company Logo" height={113} width={290} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <p className="font-light">Contact nums</p>
                        <p className="font-bold">+91 0000000000</p>
                    </div>
                    <div>
                        <p className="font-light">Email</p>
                        <p className="font-bold">demo@gmail.com</p>
                    </div>
                    <div>
                        <p className="font-light">Address</p>
                        <p className="font-bold">Mumbai, India</p>
                    </div>
                    <div>
                        <p className="font-light">Leave a request</p>
                        <p className="font-bold">Leave a request</p>
                    </div>
                </div>
                <p className="mt-4 text-center text-sm">We work throughout the world</p>
            </div>
        </div>
    )
}

export default Footer