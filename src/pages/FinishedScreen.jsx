import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../utils/callingapi.js";
export default function FinishedScreen() {
  // c'est un exemple d'utilisation de react query on traite le isLoading et le cas d'erreur il faut rajouter des composant pour une experiance utilisateur optimal
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getUser,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </ul>
  );
}
