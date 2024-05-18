import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Dashboard = lazy(() => import('../view/Dashboard'));
const CreateProject = lazy(() => import('../view/project/CreateProject'));

function LoadingFallback() {
    return <div className="spinner-border text-success" role="status" />
}

function Routing() {
    const routes = [
        { path: '', element: <Dashboard /> },
        { path: 'createProject', element: <CreateProject /> },
        { path: '', element: <Dashboard /> },
    ];

    return (
        <div>
            <Routes>
                {routes?.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={
                            <Suspense fallback={<LoadingFallback />}>
                                {item.element}
                            </Suspense>
                        }
                    />
                ))}

            </Routes>
        </div>
    );
}

export default Routing;
