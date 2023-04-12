import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import ErrorFallback from "components/error/error-fallback";
import React from "react";

const ErroBoundaryWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const fallback = (fallbackProps: FallbackProps) => (
    <ErrorFallback {...fallbackProps} />
  );

  return <ErrorBoundary fallbackRender={fallback}>{children}</ErrorBoundary>;
};

export default ErroBoundaryWrapper;
