"use client";

// basic
import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import Spinner from "@/components/Spinner";

// interface
import { IAuthLinkProps } from "@/types";

const AuthLink: React.FC<IAuthLinkProps> = ({
  classNameParagraph,
  contentParagraph,
  classNameLink,
  contentLink,
  route,
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => () => setLoading(false), []);

  return (
    <p className={classNameParagraph}>
      {contentParagraph}{" "}
      <Link
        onClick={() => setLoading(true)}
        href={route}
        className={classNameLink}
      >
        {contentLink}
        {isLoading && <Spinner display="inline-block" />}
      </Link>
    </p>
  );
};

export default AuthLink;
