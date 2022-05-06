import Api from "@/graphql/api";
import { IncomingTransactionsQuery, OutgoingTransactionsQuery } from "@/graphql/arweave";

export type TransactionDirection = "in" | "out";

export type Transaction = {
    id: string;
    direction: TransactionDirection;
    amount: string;
    timestamp: number;
};

export type Transactions = Transaction[];

function gqlToTransaction(
    gqlTxs: IncomingTransactionsQuery | OutgoingTransactionsQuery,
    direction: TransactionDirection,
) {
    const transactions: Transaction[] = gqlTxs.transactions.edges.map(({ cursor, node }) => ({
        id: node.id,
        direction,
        amount: node.quantity.ar,
        timestamp: node.block?.timestamp ?? 0,
    }));

    return transactions;
}

export default async function getTransactions(address: string): Promise<Transactions> {
    const outgoings = gqlToTransaction(
        await Api.outgoingTransactions({ address, limit: 10 }),
        "out",
    );
    const incomings = gqlToTransaction(
        await Api.incomingTransactions({ address, limit: 10 }),
        "in",
    );

    return outgoings.concat([...incomings]).sort((a, b) => b.timestamp - a.timestamp);
}