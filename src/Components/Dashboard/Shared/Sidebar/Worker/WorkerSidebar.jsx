import { BanknotesIcon, BriefcaseIcon, DocumentCheckIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Chip, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const WorkerSidebar = () => {
   return (
      <div>
         <Link to='/dashboard/worker-home'>
            <ListItem>
               <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
               </ListItemPrefix>
               Worker Home
            </ListItem>
         </Link>
         
         <Link to='/dashboard/tasks-list'>
            <ListItem>
               <ListItemPrefix>
                  <BriefcaseIcon className="h-5 w-5" />
               </ListItemPrefix>
               Tasklist
            </ListItem>
         </Link>

         <Link to='/dashboard/my-submissions'>
            <ListItem>
               <ListItemPrefix>
                  <DocumentCheckIcon className="h-5 w-5" />
               </ListItemPrefix>
               My Submission
            </ListItem>
         </Link>

         <Link to='/dashboard/withdrawals'>
            <ListItem>
               <ListItemPrefix>
                  <BanknotesIcon className="h-5 w-5" />
               </ListItemPrefix>
               Withdrawals
               {/* <ListItemSuffix>
                  <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
               </ListItemSuffix> */}
            </ListItem>
         </Link>
      </div>
   );
};

export default WorkerSidebar;