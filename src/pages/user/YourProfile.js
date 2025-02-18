import image from "../../assets/desktopimage.jpg";
import { useAuth0 } from "@auth0/auth0-react";
export const YourProfile = () => {
    const { isAuthenticated,user } = useAuth0();
    console.log(user);
  return (
   <>
  {isAuthenticated &&
<div class="mt-12 flex flex-wrap items-center  justify-center  ">
            <div class="container lg:w-3/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
              
                <div class="flex justify-center px-5">
                    <img class="h-32 w-32 bg-white p-2 rounded-full" src= {user.picture} alt="" />
                  
                </div>
                <div class=" ">
                    <div class="text-center px-14">
                        <h2 class="text-gray-800 text-3xl font-bold">{user.name}</h2>
                       <p>{user.email}</p>
            
                    </div>
                    <hr class="mt-6" />
                    <div class="flex  bg-gray-50 ">
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span class="font-semibold">UserId : </span> 21332</p>
                        </div>
                        <div class="border"></div>
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span class="font-semibold">OrganizationId :</span> 342433</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
}
   </>
  )
}


