import React, { Suspense } from "react"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

type SuspenseProps = {
    children: React.ReactNode;
}

const Loading = () => {
    return <div>loading</div>
}

const SuspenseWrapper = ({children}: SuspenseProps) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default SuspenseWrapper;