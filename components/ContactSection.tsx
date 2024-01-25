// PortfolioSection.js
'use client'
import React from 'react';
import { useState } from 'react';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { CalendarIcon } from 'lucide-react';

import { Calendar } from "@/components/ui/calendar"
import { cn } from '@/lib/utils';
import { format } from "date-fns"
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    })
    ,
    email: z.string().min(1, {
        message: "Email is required",
    })
    ,
    tel: z.string().min(1, {
        message: "Phone number is required",
    })
    ,
    type: z.string().min(1, {
        message: "Type of event is required",
    })
    ,
    subject: z.string().min(1, {
        message: "Subject is required",
    })
    ,
    date: z.date({
        errorMap: () => ({ message: "Date is required" }),
    })
})

const ContactSection = () => {

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            tel: "",
            type: "",
            subject: "",
            date: new Date(),

        },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.'
        setIsLoading(true)
        console.log(values)
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(() => {
            console.log('Response received')
            //alert and clear form

            alert("Thank you for contacting us. We will get back to you shortly.")
            form.reset()
            setIsLoading(false)



        })
    }


    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault()
    //     console.log('Sending')
    //     let data = {
    //         name,
    //         email,
    //         tel,
    //         type,
    //         subject,
    //         date

    //     }
    //     fetch('/api/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((res) => {
    //         //alert and clear form
    //     })
    // }

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
                            {/* <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
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
                            </div> */}
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-white'>Name</FormLabel>
                                                    <FormControl>
                                                        <Input className='text-white' placeholder="John Doe" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-white'>Email</FormLabel>
                                                    <FormControl>
                                                        <Input className='text-white' placeholder="John@doe.com" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="tel"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-white'>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input className='text-white' placeholder="+961 3123321" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />


                                        <FormField
                                            control={form.control}
                                            name="type"
                                            render={({ field }) => (
                                                <FormItem>


                                                    <FormLabel className='text-white'>Type of Event</FormLabel>



                                                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className=" text-muted-foreground h-12">
                                                                <SelectValue  defaultValue={field.value} placeholder="Select an event type" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>

                                                            <SelectItem value="wedding" >Wedding</SelectItem>
                                                            <SelectItem value="conferance">Conferance</SelectItem>
                                                            <SelectItem value="club">Club</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>


                                                        </SelectContent>
                                                    </Select>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            name="subject"
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="col-span-2 md:col-span-1">
                                                    <FormLabel className='text-white'>More Details</FormLabel>

                                                    <FormControl>
                                                        <Textarea className='text-white' placeholder=" Let us know more about the event" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />



                                        <FormField
                                            control={form.control}
                                            name="date"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className='text-white'>Event Date</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "w-[240px] pl-3 text-left text-white font-normal",
                                                                        !field.value && "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(field.value, "PPP")
                                                                    ) : (
                                                                        <span>Pick a date</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar

                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                disabled={(date) =>
                                                                    date > new Date() || date < new Date("1900-01-01")
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />


                                        <Button className='text-white' variant={"outline"} type="submit">Submit</Button>
                                    </form>
                                </Form>

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
