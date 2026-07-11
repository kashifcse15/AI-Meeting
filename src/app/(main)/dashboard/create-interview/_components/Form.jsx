import { Input } from '@/components/ui/input'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { InterviewType } from '@/services/Constants'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Form = () => {
    const items = [
        { label: "5 Minutes", value: "5" },
        { label: "15 Minutes", value: "15" },
        { label: "30 Minutes", value: "30" },
        { label: "45 Minutes", value: "45" },
        { label: "60 Minutes", value: "60" },
    ]

    return (
        <div className='p-5 bg-white rounded-xl mt-5'>
            <div>
                <h2 className='text-sm font-bold'>Job Position</h2>
                <Input placeholder='Enter Job Position' className='mt-2' />
            </div>

            <div>
                <h2 className='mt-5 text-sm font-bold'>Job Description</h2>
                <Textarea placeholder='Enter Job Description' className='mt-2 h-[150px]' />
            </div>

            <div>
                <h2 className='mt-5 text-sm font-bold'>Interview Duration</h2>

                <Select items={items}>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {items.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
            <div>
                <h2 className='mt-5 text-sm font-bold'>Interview Type</h2>
                <div className='flex gap-3 flex-wrap'>
                    {InterviewType.map((type, index) => {
                        return (
                            <div key={index} className='flex gap-2 items-center mt-2 border border-gray-300 bg-blue-50 p-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>
                                <type.icon className="h-6 w-6" />
                                <span>{type.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Form