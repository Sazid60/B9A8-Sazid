
const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-4 mx-auto lg:mt-7 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="">Share Your Feedback With Us</div>
                    </div>
                    <div className="w-full">
                        <img src="/example-scene-1.png" alt="" className="p-6" />
                    </div>
                </div>
                <form noValidate="" className="space-y-3">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded border-2 border-black" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded border-2 border-black" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded border-2 border-black"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-[#23BE0A] text-white">Send Message</button>
                </form>
            </div>
            <div className="w-full">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-center">Here are some common questions about purchasing and reading our books.</p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg border border-black">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How can I purchase a book?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">You can purchase our books through our website or from major online retailers such as Amazon and Barnes & Noble.</p>
                        </details>
                        <details className="w-full  rounded-lg border border-black">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you offer digital versions of your books?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">Yes, we offer e-book versions of most of our titles. You can find them available for purchase on various e-book platforms.</p>
                        </details>
                        <details className="w-full border rounded-lg border-black">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What if I have a problem with my order?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">If you encounter any issues with your order, please contact our customer support team. We'll be happy to assist you and resolve any problems.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;