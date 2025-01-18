import { BanknotesIcon, BriefcaseIcon, DocumentCheckIcon, HomeIcon, UsersIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import { Chip, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
   return (
      <div>
         <Link to='/dashboard/admin-home'>
            <ListItem>
               <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
               </ListItemPrefix>
               Admin Home
            </ListItem>
         </Link>

         <Link to='/dashboard/manage-users'>
            <ListItem>
               <ListItemPrefix>
                  <UsersIcon className="h-5 w-5" />
               </ListItemPrefix>
               Manage Users
            </ListItem>
         </Link>

         <Link to='/dashboard/manage-tasks'>
            <ListItem>
               <ListItemPrefix>
                  <ClipboardDocumentListIcon className="h-5 w-5" />
               </ListItemPrefix>
               Manage Tasks
            </ListItem>
         </Link>
      </div>
   );
};

export default AdminSidebar;