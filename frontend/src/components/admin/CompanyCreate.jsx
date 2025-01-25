import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        if (!companyName) {
            toast.error('Company name is required!');
            return;
        }
        
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            } else {
                toast.error('Failed to create company');
            }
        } catch (error) {
            // Check for detailed error response
            if (error.response) {
                console.log('Error Response:', error.response.data);
                toast.error(error.response?.data?.message || 'Something went wrong!');
            } else {
                console.log('Error:', error.message);
                toast.error('Network error or invalid response');
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <p className='font-bold text-2xl'>Your Company Name</p>
                    <p className='text-gray-500'>What would you like to give your company name? You can change this later!</p>
                </div>
                <Label>Company Name</Label>
                <Input 
                    type="text" 
                    className="my-2" 
                    placeholder="JobHunt , Microsoft etc." 
                    onChange={(e) => setCompanyName(e.target.value)} 
                    value={companyName}
                />

                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
