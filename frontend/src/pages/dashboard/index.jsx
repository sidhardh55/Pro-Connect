import { getAllPosts } from '@/config/redux/action/postAction';
import { getAboutUser } from '@/config/redux/action/authAction';
import { useRouter } from 'next/router'
import {React,useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import UserLayout from '@/layout/UserLayout';

export default function Dashboard() {

    const router = useRouter();
    
    useEffect(() => {
        if(localStorage.getItem("token") === null) {
            router.push("/login")
    }
    })

    const dispatch = useDispatch();

    const authState = useSelector((state) => state.auth);

    const [isTokenThere,setIsTokenThere] = useState(false);

    useEffect(() => {
      if(localStorage.getItem('token') === null ) {
        router.push("/login")
      }    

      setIsTokenThere(true);
    })


    useEffect(() => {

      if(isTokenThere) {
        dispatch(getAllPosts());
        dispatch(getAboutUser({token : localStorage.getItem("token")}))
      }

    }, [isTokenThere])

  return (
    
    <UserLayout>
       {/* {authState.profileFetched && <div> 
          Hey {authState.user.userId.name} 
        </div> } */}

        <div className="container">
            <div className="homeContainer">
              <div className="homeContainer_leftBar">

              </div>

              <div className="homeContainer_leftBar">
                
              </div>
            </div>
        </div>
    </UserLayout>
  )
}
