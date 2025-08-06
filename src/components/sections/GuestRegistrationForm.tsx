import React from 'react';

const GuestRegistrationForm = () => {
    return (
        <section
            className="py-12 bg-cover bg-center"
            style={{ backgroundImage: 'url(\'/images/contact_form_bg.png\')' }}
        >
            <div className='max-w-[750px]! container'>
                <div className="bg-white md:py-[70px] py-[30px] md:px-[50px] px-[20px] rounded-[30px] shadow-lg  mx-auto">
                    <h2 className="sm:text-4xl text-3xl font-bold sm:mb-10 mb-5">Free Guest Registration Form</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] md:mb-[40px] mb-[20px]">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] md:mb-[40px] mb-[20px]">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] mb-[20px]">
                            <input
                                type="text"
                                placeholder="Title"
                                className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                            />
                            <input
                                type="text"
                                placeholder="Participation Type"
                                className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                                <span className="ml-2 text-gray-700 text-sm">I have read and accept the KVKK Privacy Notice.</span>
                            </label>
                        </div>
                        <div className="mb-6">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                                <span className="ml-2 text-gray-700 text-sm">I have read and agree to the Commercial Electronic Message Text.</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#01719D] text-white sm:p-[20px] py-[15px]! p-[15px] rounded-md hover:bg-[#01719D]/90 focus:outline-none focus:ring-2 focus:ring-[#01719D] focus:ring-offset-2 text-xl font-bold"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GuestRegistrationForm;