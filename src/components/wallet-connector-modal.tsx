import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const formatAddress = (address: string = "") => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const WalletConnectorModal = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const buttonText = isConnected ? formatAddress(address) : "Connect Wallet";
  const title = isConnected ? "Your Account" : "Connect Wallet";
  const description = isConnected
    ? "Manage your account and connect another wallet"
    : "Select your preferred wallet to connect to the platform";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {isConnected ? (
          <div>Your address: {address} is connected to this app</div>
        ) : (
          connectors.map((connector) => {
            return (
              <Button
                variant="secondary"
                className="p-2"
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {connector.name}
              </Button>
            );
          })
        )}

        {isConnected && (
          <Button className="w-full" onClick={() => disconnect()}>
            Disconnect
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnectorModal;
