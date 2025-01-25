import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
    const navigate = useNavigate();
    const daysAgoFunction=(mongodbTime)=>{
        const createdAt=new Date(mongodbTime);
        const currentTime=new Date();
        const timeDifference=currentTime-createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    // const jobId = "randomstringdsb"
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt)==0 ? "Today" :`${daysAgoFunction(job?.createdAt)} days ago` }</p>
                <Button className="rounded-full" variant="outline" size="icon"><Bookmark />
                </Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} alt="Company Logo" />
                    </Avatar>
                </Button>
                <div>
                    <p className='font-medium text-lg'>{job?.company?.name}</p>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <p className='font-bold text-lg my-2'>{job?.title}</p>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save for Later</Button>
            </div>
        </div>
    );
};

export default Job;
