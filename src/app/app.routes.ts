import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Layout } from './Pages/layout/layout';
import { BatchMaster } from './Pages/batch-master/batch-master';
import { Dashboard } from './Pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path:'',
        component:Login,
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'batch',
                component:BatchMaster
            },
            {
                path:'dashboard',
                component:Dashboard
            }
        ]
    }
];
