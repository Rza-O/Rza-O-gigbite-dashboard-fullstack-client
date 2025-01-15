import { BanknotesIcon, BriefcaseIcon, DocumentCheckIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Chip, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const WorkerSidebar = () => {
   return (
      <div>
         <Link to='/'>
            <ListItem>
               <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
               </ListItemPrefix>
               Worker Home
            </ListItem>
         </Link>
         <ListItem>
            <ListItemPrefix>
               <BriefcaseIcon className="h-5 w-5" />
            </ListItemPrefix>
            Tasklist
         </ListItem>
         <ListItem>
            <ListItemPrefix>
               <DocumentCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Submission
         </ListItem>
         <ListItem>
            <ListItemPrefix>
               <BanknotesIcon className="h-5 w-5" />
            </ListItemPrefix>
            Withdrawals
            <ListItemSuffix>
               <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
         </ListItem>
      </div>
   );
};

export default WorkerSidebar;