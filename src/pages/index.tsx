import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSdkContext } from "../contexts/SDKContext";
import { PrepareMintRequest } from "@rarible/sdk/build/types/nft/mint/prepare-mint-request.type";
import { toContractAddress, toItemId, toUnionAddress } from "@rarible/types";
import { PrepareTransferRequest } from "@rarible/sdk/build/types/nft/transfer/domain";

export default function Home() {
  const { sdk, wallet } = useSdkContext();

  return (
    <div className="relative flex p-4 mx-auto h-screen w-full ">Hello</div>
  );
}
