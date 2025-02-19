

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
   {
      goal: 400,
   },
   {
      goal: 300,
   },
   {
      goal: 200,
   },
   {
      goal: 300,
   },
   {
      goal: 200,
   },
   {
      goal: 278,
   },
   {
      goal: 189,
   },
   {
      goal: 239,
   },
   {
      goal: 300,
   },
   {
      goal: 200,
   },
   {
      goal: 278,
   },
   {
      goal: 189,
   },
   {
      goal: 349,
   },
]

export default function CredentialsDrawer() {
   const [goal, setGoal] = React.useState(350)

   function onClick(adjustment) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)))
   }

   return (
      <Drawer>
         <DrawerTrigger asChild>
            <Button variant="outline">Users Credentials</Button>
         </DrawerTrigger>
         <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
               <DrawerHeader>
                  <DrawerTitle>Copy Paste Credentials to Check User Role</DrawerTitle>
                  <DrawerTitle><span className="text-lg text-black">Admin Email: shahreza.dev@gmail.com</span></DrawerTitle>
                  <DrawerTitle><span className="text-lg text-black">Admin Password: HappyCoding01</span></DrawerTitle>
                  <DrawerTitle><span className="text-lg text-black">Buyer Password: martin@gary.com</span></DrawerTitle>
                  <DrawerTitle><span className="text-lg text-black">Buyer Password: Shann007</span></DrawerTitle>
                  <DrawerTitle><span className="text-lg text-black">Worker Email: john@david.com</span></DrawerTitle>
                  <DrawerTitle><span className="text-lg text-black">Worker Password: Shann007</span></DrawerTitle>
               </DrawerHeader>
               <div></div>
               <DrawerFooter>
                  <DrawerClose asChild>
                     <button  className="btn bg-primary-dark hover:bg-secondary-dark">Close</button>
                  </DrawerClose>
               </DrawerFooter>
            </div>
         </DrawerContent>
      </Drawer>
   )
}
