import { BanknotesIcon, BriefcaseIcon, DocumentCheckIcon, HomeIcon, UsersIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import { Chip, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
   return (
      <div>
         <Link to='/'>
            <ListItem>
               <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
               </ListItemPrefix>
               Admin Home
            </ListItem>
         </Link>
         <ListItem>
            <ListItemPrefix>
               <UsersIcon className="h-5 w-5" />
            </ListItemPrefix>
            Manage Users
         </ListItem>
         <ListItem>
            <ListItemPrefix>
               <ClipboardDocumentListIcon className="h-5 w-5" />
            </ListItemPrefix>
            Manage Tasks
         </ListItem>
      </div>
   );
};

export default AdminSidebar;