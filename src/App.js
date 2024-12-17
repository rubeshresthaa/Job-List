import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./UI/RootLayout";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";
import ApplyForm from "./components/applyForm/ApplyForm";
import Favourites from "./components/Favourites";


function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootLayout />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'favourite',
        element:<Favourites />
      },
      {
        path:'job/:id',
        element:<JobDetails />
      },
      {
        path:"applyform",
        element:<ApplyForm />
      }
    ]
  }])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
