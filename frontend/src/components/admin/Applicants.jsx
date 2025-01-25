import React, { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector(store => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
        dispatch(setAllApplicants(res.data.job));  // Assuming res.data.job contains the applicants
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, [params.id, dispatch]);

  // Add default values or optional chaining to prevent errors when applicants are undefined
  const applicantCount = applicants?.applications?.length || 0;

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <p className='font-bold text-xl my-5'>Applicants {applicantCount}</p>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
