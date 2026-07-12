import Button from '@/app/components/button'
import { Input } from '@/components/ui/input'
import {CircleCheck, Clock, Clock10Icon, CopyIcon, ListCollapse, Mail,MessageCircle,Send,Copy, Plus, ArrowLeft, BriefcaseBusiness} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {toast} from 'sonner'

const InterviewLink = ({ interview_id, formData, questionCount }) => {
    const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview_id;
    const GetInterviewURL = () => {
        return url;
    }
    const onCopyLink=async()=>{
        await navigator.clipboard.writeText(url);
        toast.success("Interview link copied successfully!");
    }
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <div className='w-[50px] h-[50px]'>
                <CircleCheck className="text-green-500 w-20 h-20" />
            </div>
            <h2 className='font-bold text-lg mt-10'>Your AI Interview is Ready !</h2>
            <p className='mt-3'>Share this link with your candidates to start the interview process</p>

            <div className="w-full mt-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">
                            Interview Link
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Share this link with the candidate to start the interview.
                        </p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 border border-emerald-200">
                        ⏳ Expires in 30 Days
                    </span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Input
                        className="h-11 flex-1 rounded-xl border-gray-300 bg-white text-gray-700 cursor-crosshair"
                        defaultValue={GetInterviewURL()}
                        readOnly
                    />

                    <button onClick={()=>onCopyLink() }
                        className="flex h-11 items-center justify-center gap-2 cursor-grab rounded-xl bg-blue-600 px-6 font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95"
                    >
                        <CopyIcon className="h-4 w-4 " />
                        Copy Link
                    </button>
                </div>
                <div className="mt-5 flex gap-4">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">{formData?.duration} min</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2">
                        <ListCollapse className="h-5 w-5 text-green-600" />
                        <span className="font-medium">{questionCount} Questions</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2">
                        <BriefcaseBusiness className="h-5 w-5 text-red-600" />
                        <span className="font-medium">Role : {formData?.jobPosition}</span>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        Share Via
                    </h2>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                        <button className="flex flex-col items-center justify-center cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md">
                            <Mail className="mb-2 h-7 w-7 text-red-500" />
                            <span className="text-sm font-medium">Email</span>
                        </button>

                        <button className="flex flex-col items-center justify-center cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md">
                            <Send className="mb-2 h-7 w-7 text-sky-500" />
                            <span className="text-sm font-medium">Telegram</span>
                        </button>

                        <button className="flex flex-col items-center cursor-pointer justify-center rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md">
                            <MessageCircle className="mb-2 h-7 w-7 text-green-500" />
                            <span className="text-sm font-medium">WhatsApp</span>
                        </button>

                        <button onClick={()=>onCopyLink() }
                            className="flex flex-col items-center justify-center cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
                        >
                            <Copy className="mb-2 h-7 w-7 text-indigo-500" />
                            <span className="text-sm font-medium">Copy Link</span>
                        </button>

                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">

                    <Link href="/dashboard">
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl cursor-pointer border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:shadow-sm sm:w-auto">
                            <ArrowLeft className="h-5 w-5" />
                            Back to Dashboard
                        </button>
                    </Link>

                    <Link href="/dashboard/create-interview">
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 sm:w-auto cursor-pointer">
                            <Plus className="h-5 w-5" />
                            Create New Interview
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default InterviewLink