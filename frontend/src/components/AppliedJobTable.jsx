import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Badge } from './components/ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
  // Get the state from Redux
  const { allAppliedJobs = [] } = useSelector((store) => store.job); // Default to an empty array if undefined

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            allAppliedJobs.length === 0 ? (
              // Display a message if no jobs have been applied to
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  You haven't applied to any job yet!
                </TableCell>
              </TableRow>
            ) : (
              // Map through the list of applied jobs
              allAppliedJobs.map((appliedJob) => (
                <TableRow key={appliedJob._id}>
                  <TableCell>{appliedJob?.createdAt?.split('T')[0]}</TableCell>
                  <TableCell>{appliedJob.job?.title || 'N/A'}</TableCell>
                  <TableCell>{appliedJob.job?.company?.name || 'N/A'}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className={`${
                        appliedJob?.status === 'rejected'
                          ? 'bg-red-400'
                          : appliedJob.status === 'pending'
                          ? 'bg-gray-400'
                          : 'bg-green-400'
                      }`}
                    >
                      {appliedJob.status?.toUpperCase() || 'N/A'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
