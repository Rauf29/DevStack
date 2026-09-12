import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className='pt-10 pb-3 px-4 md:pt-24'>
            <div className='container mx-auto'>

                <div className='grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5'>

                    <div className='lg:col-span-2'>
                        <img src={logo} alt="" />
                        <p className="mt-4 max-w-md text-sm text-gray-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="mt-8 flex items-center gap-5 text-sm text-gray-700">
                            <a href="#" className="hover:text-brand">
                                GitHub
                            </a>

                            <a href="#" className="hover:text-brand">
                                Twitter
                            </a>

                            <a href="#" className="hover:text-brand">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase text-gray-900">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-gray-500">
                            <li>
                                <a href="#" className="hover:text-brand">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-brand">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-brand">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase text-gray-900">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-gray-500">
                            <li>
                                <a href="#" className="hover:text-brand">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-brand">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-brand">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase text-gray-900">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-gray-500">
                            <li>
                                <a href="#" className="hover:text-brand">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-brand">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>


                <div className="flex flex-col gap-4 border-t border-gray-200 py-7 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-brand">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-brand">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;