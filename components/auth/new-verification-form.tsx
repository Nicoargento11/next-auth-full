"use client";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormSucces } from "../form-succes";
import { FormError } from "../form-error";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [succes, setSucces] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (error || succes) return;
    if (!token) {
      setError("Missing token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSucces(data.succes);
        setError(data.error);
      })
      .catch(() => {
        setError("something went wrong!");
      });
  }, [token, error, succes]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center justify-center w-full">
        {!succes && !error && <BeatLoader />}
        <FormSucces message={succes} />
        {!succes && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
