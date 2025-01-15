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
import Logo from '../../../../../assets/logos/primaryLogo.png'
import { Link, useNavigate } from "react-router-dom";
import WorkerSidebar from "../Worker/WorkerSidebar";
import BuyerSidebar from "../Buyer/BuyerSidebar";
import AdminSidebar from "../Admin/AdminSidebar";
import useRole from "@/Hooks/useRole";
import Loading from "@/Components/Shared/LoadingSpinner/Loading";
import useAuth from "@/Hooks/useAuth";
import toast from "react-hot-toast";

export function Sidebar() {
   const { logOut } = useAuth();
   const navigate = useNavigate();

   const [role, isLoading] = useRole();

   if (isLoading) return <Loading></Loading>

   const handleLogOut = async () => {
      await logOut();
      toast.success('You have logged out successfully')
      navigate('/login')
   }
   return (
      <div>
         
         <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl bg-  shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
               <Link to='/'><img className="w-52" src={Logo} alt="" /></Link>
            </div>
            <List>
               {/* worker */}
               {
                  role.role === 'worker' && <WorkerSidebar></WorkerSidebar>
               }
               {/* buyer */}
               {
                  role.role === 'buyer' && <BuyerSidebar></BuyerSidebar>
               }
               {/* Admin */}
               {
                  role.role === 'admin' && <AdminSidebar></AdminSidebar>
               }
            

               {/* common */}
               <ListItem>
                  <ListItemPrefix>
                     <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Profile
               </ListItem>
               <ListItem
                  onClick={handleLogOut}
               >
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