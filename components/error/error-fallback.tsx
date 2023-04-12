import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({error}: FallbackProps) => {
    return <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl font-semibold">Something went wrong :(</h1>
    </div> 
}

export default ErrorFallback;