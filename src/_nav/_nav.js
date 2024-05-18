import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const _nav = [
    {
        name: 'Dashboard',
        to: '/',
        icon: <DashboardIcon />,
        sublist: null
    },
    {
        name: 'Project',
        to: null,
        icon: <FolderOutlinedIcon />,
        sublist: [
            {
                name: 'Create Project',
                to: '/createProject',
                icon: <ProductionQuantityLimitsIcon />
            },
            {
                name: 'Manage Project',
                to: '/',
                icon: <ManageAccountsIcon />
            },
        ]
    }

]

export default _nav