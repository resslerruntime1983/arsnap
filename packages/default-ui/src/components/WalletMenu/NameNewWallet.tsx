import Button from "@/components/interface/Button";
import {
    ExportWallet,
    OnFileBrowserEvent,
    OnWalletMenuEvent,
    RenameWallet,
} from "@/components/WalletMenu/WalletMenu";
import { NamedAddress } from "@/utils/types";

type NameNewWalletProps = {
    origin: "imported" | "created";
    wallet: NamedAddress;
    onGoBack: () => void;
    onEvent: OnWalletMenuEvent<RenameWallet | ExportWallet>;
    onFileBrowserEvent: OnFileBrowserEvent;
};

export default function NameNewWallet({
    origin,
    wallet,
    onGoBack,
    onEvent,
    onFileBrowserEvent,
}: NameNewWalletProps) {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            <label>Name your wallet</label>
            <input
                onBlur={(e) => {
                    onEvent({
                        event: "renameWallet",
                        name: e.target.value,
                        address: wallet.address,
                    });
                    e.stopPropagation();
                }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                defaultValue={wallet.name}
            />

            {origin === "created" && (
                <Button
                    onClick={async () => {
                        onFileBrowserEvent("opened");
                        await onEvent({ event: "exportWallet", address: wallet.address });
                        onFileBrowserEvent("closed");
                    }}
                >
                    Download Wallet
                </Button>
            )}

            <Button
                onClick={(e) => {
                    onGoBack();
                    e.stopPropagation();
                }}
            >
                See Wallets
            </Button>
        </div>
    );
}
