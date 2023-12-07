
import React from 'react'


export const Compart = () => {
    return (
        <section className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto mt-6 gap-10 ">

                <div className="flex flex-row -m-4 space-x-10" >
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-500 p-6 rounded-lg justify-center">
                            <img width={"400"} height={"400"} className="rounded w-full object-cover object-center mb-6" src="compart2.jpeg" alt="content" />
                            <h2 >MYID</h2>
                            <h2>MYID for Web 3.0</h2>
                            <h4>MYID aggregation is the integration of digital identities from multiple networks.This approach aids in situations requiring identity data, such as KYC, credit scores, or credentials.</h4>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img width={"400"} height={"400"} className="rounded w-fullobject-cover object-center mb-6" src="/compart1.jpeg" alt="content" />
                            <h2 >MYID</h2>
                            <h2>Technolgy Path</h2>
                            <h4>MyID facilitates creating and verifying digital identities, ensuring secure and efficient user interactions with online services. Its primary function is identity management in the digital realm. </h4>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="container bg-gray-100 p-6 rounded-lg">
                            <img width={"400"} height={"400"} className="rounded w-fullobject-cover object-center mb-6" src="compart2.jpeg" alt="content" />
                            <h2>MYID</h2>
                            <h2>Data in MYID</h2>
                            <h4>"MYID gathers user data from registries and services, including blockchain records (transactions, chain states), and social media APIs, ensuring comprehensive information collection and utilization."</h4>
                        </div>
                    </div>
                    {/* <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className=" container bg-gray-100 p-6 rounded-lg">
                            <img width={"400"} height={"400"} className="rounded w-full object-cover object-center mb-6" src="/roadmap.jpeg" alt="content" />
                            <h2>MYID</h2>
                            <h2>Data Aggregation</h2>
                            <h4>MYID processes and consolidates analyzed identity data, ensuring consistency, and computes an Identity Score by merging information from various platforms, offering accurate and reliable identity insights. </h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
