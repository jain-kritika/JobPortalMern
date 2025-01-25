import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllJobs } from '@/redux/jobSlice';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const searchedQuery = useSelector((store) => store.js?.searchedQuery || ''); // Fallback to an empty string if undefined

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(
                    `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
                    { withCredentials: true } // Correct configuration object
                );

                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchAllJobs();
    }, [dispatch, searchedQuery]); // Include dependencies
};

export default useGetAllJobs;
