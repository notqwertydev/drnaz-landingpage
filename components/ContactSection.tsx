// PortfolioSection.js
'use client'
import React from 'react';
import { useState } from 'react';



const ContactSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [type, setType] = useState('')
    const [subject, setSubject] = useState('')
    const [date, setDate] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            tel,
            type,
            subject,
            date

        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setTel('')
                setType('')
                setSubject('')
                setDate('')
            }
        })
    }

    return (
        <section id='contact' className="lg:p-8 overflow-hidden mt-16">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column 1: Form */}
                    <div className="py-3">
                        <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-2">
                            <span className="text-white">CONTACT </span>
                        </h1>
                        <section className="dark:bg-gray-900">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <form action="#" className="space-y-8">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Name</label>
                                        <input onChange={(e) => { setName(e.target.value) }} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john@doe.com" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Phone Number</label>
                                        <input onChange={(e) => { setTel(e.target.value) }} type="tel" id="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+961 3123321" required />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Type of Event</label>
                                        <select onChange={(e) => { setType(e.target.value) }} id="event-type" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                                            <option value="">Select an event type</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="birthday">Conferance</option>
                                            <option value="conference">Club</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                                        <input onChange={(e) => { setSubject(e.target.value) }} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us more about the event" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Event Date</label>
                                        <input onChange={(e) => { setDate(e.target.value) }} type="date" id="event-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                                    </div>

                                    <center><button onClick={(e)=>{handleSubmit(e)}} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button></center>
                                </form>
                            </div>
                        </section>
                    </div>

                    {/* Column 2: Image */}
                    <div className='flex items-center justify-center py-8 lg:py-16 px-3 mx-auto max-w-screen-md'>
                        <img className="" alt="Descriptive Alt Text" src="/Pictures/naz16.JPG" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
