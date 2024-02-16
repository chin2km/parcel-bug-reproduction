import React from 'react'

const LazyComponentB = React.lazy(() => import('./ComponentB').then(module => ({ default: module.ComponentB })))

export const ComponentA = () => {
    return (
        <React.Suspense fallback="LOADING B">
            <h1>
                Component A
            </h1>
            <h1>
                <LazyComponentB />
            </h1>
        </React.Suspense>
    )
}
