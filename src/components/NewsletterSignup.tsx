import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useNavigate } from 'react-router-dom';

const NewsletterSignup: React.FC = () => {
    // The URL provided by the user
    // "https://app.us13.list-manage.com/subscribe/post?u=de88f1c586737f979a45c9980&amp;id=f42376d97a&amp;f_id=006945e1f0"
    // Replace '&amp;' with '&'
    const url = "https://app.us13.list-manage.com/subscribe/post?u=de88f1c586737f979a45c9980&id=f42376d97a&f_id=006945e1f0";

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    );
};

interface CustomFormProps {
    status: "error" | "success" | "sending" | null;
    message: string | Error | null;
    onValidated: (data: any) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ status, message, onValidated }) => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        birthMonth: '',
        birthDay: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'success') {
            setFormData({
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                birthMonth: '',
                birthDay: ''
            });
            navigate('/thank-you');
        }
    }, [status, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.email && formData.email.indexOf("@") > -1) {
            onValidated({
                EMAIL: formData.email,
                FNAME: formData.firstName,
                LNAME: formData.lastName,
                PHONE: formData.phone,
                "BIRTHDAY[month]": formData.birthMonth,
                "BIRTHDAY[day]": formData.birthDay
            });
        }
    };

    return (
        <section className="py-20 bg-neutral-deep relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12">

                    {/* Text Content */}
                    <div className="text-center mb-10 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Mail className="w-4 h-4 text-primary" />
                            </span>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                                Stay Connected
                            </span>
                        </div>
                        <h2 className="serif-heading text-3xl md:text-4xl text-white mb-4">
                            Join the Inner Circle
                        </h2>
                        <p className="text-neutral-200/80 font-light leading-relaxed">
                            Receive exclusive insights on leadership, faith, and purpose directly to your inbox. No spam, just value.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="relative space-y-4"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                            disabled={status === 'sending'}
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                            disabled={status === 'sending'}
                                        />
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                name="birthMonth"
                                                value={formData.birthMonth}
                                                onChange={handleChange}
                                                placeholder="Birth Month (MM)"
                                                pattern="[0-9]*"
                                                maxLength={2}
                                                className="w-1/2 bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-center"
                                                disabled={status === 'sending'}
                                            />
                                            <input
                                                type="text"
                                                name="birthDay"
                                                value={formData.birthDay}
                                                onChange={handleChange}
                                                placeholder="Day (DD)"
                                                pattern="[0-9]*"
                                                maxLength={2}
                                                className="w-1/2 bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-center"
                                                disabled={status === 'sending'}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address *"
                                                className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                                required
                                                disabled={status === 'sending'}
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                                disabled={status === 'sending'}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full bg-primary hover:bg-white hover:text-primary text-white py-3 px-6 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed mt-auto h-[50px]"
                                        >
                                            {status === 'sending' ? (
                                                <>
                                                    <span>Joining...</span>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Subscribe</span>
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="text-center mt-4">
                                    {status === "error" && (
                                        <div
                                            className="text-red-400 text-sm mt-3"
                                            dangerouslySetInnerHTML={{ __html: String(message) }}
                                        />
                                    )}

                                    {status === "success" && (
                                        <div className="text-green-400 text-sm mt-3">
                                            Redirecting...
                                        </div>
                                    )}

                                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-6">
                                        We respect your privacy. Unsubscribe anytime.
                                    </p>
                                </div>
                            </motion.form>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;
