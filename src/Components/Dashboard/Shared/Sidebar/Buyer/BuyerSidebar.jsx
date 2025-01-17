import { BanknotesIcon, BriefcaseIcon, DocumentCheckIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Chip, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react';
import { Landmark } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const BuyerSidebar = () => {
   return (
      <div>
         <Link to='/dashboard'>
            <ListItem>
               <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
               </ListItemPrefix>
               Buyer Home
            </ListItem>
         </Link>

         <Link to='/dashboard/add-task'>
            <ListItem>
               <ListItemPrefix>
                  <BriefcaseIcon className="h-5 w-5" />
               </ListItemPrefix>
               Add New Tasks
            </ListItem>
         </Link>

         <Link to='/dashboard/my-tasks'>
            <ListItem>
               <ListItemPrefix>
                  <DocumentCheckIcon className="h-5 w-5" />
               </ListItemPrefix>
               My Tasks
            </ListItem>
         </Link>

         <Link to='/dashboard/purchase-coin'>
            <ListItem>
               <ListItemPrefix>
                  <BanknotesIcon className="h-5 w-5" />
               </ListItemPrefix>
               Purchase Coin
            </ListItem>
         </Link>

         <Link to='/dashboard/payment-history'>
            <ListItem>
               <ListItemPrefix>
                  <Landmark className="h-5 w-5" />
               </ListItemPrefix>
               Payment history
            </ListItem>
         </Link>
      </div>
   );
};

export default BuyerSidebar;