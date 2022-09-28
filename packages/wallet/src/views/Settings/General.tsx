import { Dispatch } from "react";

import { Config, ConfigAction, GatewayName } from "@/state/config";
import Label from "@/components/interface/form/Label";
import Select from "@/components/interface/form/Select";
import { BaseLayout } from "@/components/interface/layout/settingsLayout";

export type GeneralProps = {
    config: Config;
    dispatchConfig: Dispatch<ConfigAction>;
};

const options: [GatewayName, GatewayName][] = [
    ["testnet", "testnet"],
    ["arweave", "arweave"],
];

export default function General({ config, dispatchConfig }: GeneralProps) {
    return (
        <BaseLayout category="General">
            <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col">
                    <Label white className="mb-3">
                        Gateway
                    </Label>
                    <Select
                        options={options}
                        onChange={(gateway) => dispatchConfig({ type: "setGateway", gateway })}
                        value={config.gateway}
                    ></Select>
                </div>

                {/* <div className="flex flex-col"> */}
                {/*     <Label white className="mb-3"> */}
                {/*         Currency */}
                {/*     </Label> */}
                {/*     <Select */}
                {/*         options={[ */}
                {/*             ["USD", "USD"], */}
                {/*             ["EUR", "EUR"], */}
                {/*         ]} */}
                {/*         onChange={(currency) => { */}
                {/*             setCurrency(currency as Currency); */}
                {/*         }} */}
                {/*     ></Select> */}
                {/* </div> */}
            </div>

            {/* <Checkbox */}
            {/*     name="checked" */}
            {/*     register={register} */}
            {/*     control={control} */}
            {/*     label="My checkbox" */}
            {/* /> */}
        </BaseLayout>
    );
}
