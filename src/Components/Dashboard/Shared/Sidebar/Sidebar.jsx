import {
   Card,
   Typography,
   List,
   ListItem,
   ListItemPrefix,
   ListItemSuffix,
   Chip,
} from "@material-tailwind/react";
import {
   PresentationChartBarIcon,
   ShoppingBagIcon,
   UserCircleIcon,
   Cog6ToothIcon,
   InboxIcon,
   PowerIcon,
   HomeIcon,
   BriefcaseIcon,
   DocumentCheckIcon,
   BanknotesIcon
} from "@heroicons/react/24/solid";
import Logo from '../../../../assets/logos/primaryLogo.png'
import { Link } from "react-router-dom";

export function Sidebar() {
   return (
      <div>
         <Card className="h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl bg-  shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
               <img className="w-52" src={Logo} alt="" />
            </div>
            {/* worker */}
            <List>
               <Link to='/'>
                  <ListItem>
                     <ListItemPrefix>
                        <HomeIcon className="h-5 w-5" />
                     </ListItemPrefix>
                     Home
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


               <ListItem>
                  <ListItemPrefix>
                     <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Profile
               </ListItem>
               <ListItem>
                  <ListItemPrefix>
                     <Cog6ToothIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Settings
               </ListItem>
               <ListItem>
                  <ListItemPrefix>
                     <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log Out
               </ListItem>
            </List>
         </Card>
      </div>
   );
}