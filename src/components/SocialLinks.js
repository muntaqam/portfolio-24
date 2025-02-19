import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../ToastifyCustom.css';

function SocialLinks() {

    const email = "munma980@gmail.com";
    const phone = "3479638176";


    const copyToClipboard = (text, message) => {
        navigator.clipboard.writeText(text).then(() => {
            // Use toast without the default icon and with a custom one
            toast.success(
                <div>
                    🔗 {" " + message}
                </div>,
                {
                    icon: false,
                }
            );
        });
    };

    return (
        // --mobile view <div className="flex justify-center space-x-4 pt-24 pr-80">
        <div className="flex justify-center space-x-4 mt-6 lg:pt-24 lg:pr-80">
            {/* Social Icons */}
            <a href="https://github.com/muntaqam" className="text-slate-400 hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/muntaqam/" className="text-slate-400 hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.goodreads.com/user/show/7973694-maahi" className="text-slate-400 hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-goodreads fa-lg"></i>
            </a>

            {/* Email Icon */}
            <button
                onClick={() => copyToClipboard(email, "Email copied!")} // Pass email and message
                className="text-slate-400 hover:text-white cursor-pointer "
            >
                <i className="fas fa-envelope fa-lg"></i>
            </button>

            {/* Phone Icon */}
            <button
                onClick={() => copyToClipboard(phone, "Phone number copied!")} // Pass phone and message
                className="text-slate-400 hover:text-white cursor-pointer "

            >
                <i className="fas fa-phone fa-lg"></i>
            </button>


            {/* Toast Container */}
            <ToastContainer

                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
                style={{ zIndex: 9999 }}

            />
        </div>
    );
}

export default SocialLinks;
