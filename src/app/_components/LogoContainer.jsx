import Image from "next/image";
import React from "react";

const LogoContainer = () => {
    return (
        <div className="container w-[90%] border rounded-lg" >
            <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                {/* img */}
                <Image
                    src="/images/image 10.png"
                    alt="A row of black letters on a gray background"
                    className="w-full h-auto rounded-lg shadow-md"
                    height={10000}
                    width={10000}
                />
                <Image
                    src="/images/image 10.png"
                    alt="A row of black letters on a gray background"
                    className="w-full h-auto rounded-lg shadow-md"
                    height={10000}
                    width={10000}
                />
                <Image
                    src="/images/image 10.png"
                    alt="A row of black letters on a gray background"
                    className="w-full h-auto rounded-lg shadow-md"
                    height={10000}
                    width={10000}
                />
                <Image
                    src="/images/image 10.png"
                    alt="A row of black letters on a gray background"
                    className="w-full h-auto rounded-lg shadow-md"
                    height={10000}
                    width={10000}
                />
                <Image
                    src="/images/image 10.png"
                    alt="A row of black letters on a gray background"
                    className="w-full h-auto rounded-lg shadow-md"
                    height={10000}
                    width={10000}
                />
                <Image
                    src="/images/image 10.png"
                    alt="A row of black letters on a gray background"
                    className="w-full h-auto rounded-lg shadow-md"
                    height={10000}
                    width={10000}
                />

            </div>

        </div>
    );
};

export default LogoContainer;