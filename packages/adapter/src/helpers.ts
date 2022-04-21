import { version } from "package.json";

import Transaction from "arweave/node/lib/transaction";
import { Base64 } from "js-base64";

import * as api from "@/api";

const arsnapTags = [
    { name: "Signing-Client", value: "ArSnap" },
    { name: "Signing-Client-Version", value: version },
];

/**
 * Sign a transaction with the current active wallet.
 * @param tx - The transaction to sign
 */
export async function signTx(tx: Transaction): Promise<void> {
    const owner = await api.getActivePublicKey();

    tx.setOwner(owner);

    arsnapTags.forEach((tag) => {
        tx.addTag(tag.name, tag.value);
    });

    const dataToSign = await tx.getSignatureData();
    const dataSigned = new Uint8Array(Object.values(await api.signBytes(dataToSign, 32)));
    const id = await crypto.subtle.digest("SHA-256", dataSigned);

    tx.setSignature({
        id: Base64.fromUint8Array(new Uint8Array(id), true),
        owner,
        signature: Base64.fromUint8Array(dataSigned, true),
    });
}
