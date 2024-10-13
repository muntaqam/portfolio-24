import React, { useState } from 'react';

function SocialLinks() {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setMessage(`${text} copied!`);
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 2000);
        });
    };

    return (
        <div className="flex justify-center space-x-4 pt-24 pr-80">
            {/* Social Icons */}
            <a href="https://github.com/muntaqam" className="text-slate-400 hover:text-white cursor-pointer">
                <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/muntaqam/" className="text-slate-400 hover:text-white cursor-pointer">
                <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.goodreads.com/user/show/7973694-maahi" className="text-slate-400 hover:text-white cursor-pointer">
                <i className="fab fa-goodreads fa-lg"></i>
            </a>

            {/* Email Icon */}
            <button
                onClick={() => copyToClipboard("youremail@example.com")} // Replace with your actual email
                className="text-slate-400 hover:text-white cursor-pointer"
            >
                <i className="fas fa-envelope fa-lg"></i>
            </button>

            {/* Phone Icon */}
            <button
                onClick={() => copyToClipboard("+1234567890")} // Replace with your actual phone number
                className="text-slate-400 hover:text-white cursor-pointer"
            >
                <i className="fas fa-phone fa-lg"></i>
            </button>

            {/* Pop-Up Message */}
            {visible && (
                <div className="absolute bg-gray-800 text-white p-2 rounded mt-2">
                    {message}
                </div>
            )}
        </div>
    );
}

export default SocialLinks;
