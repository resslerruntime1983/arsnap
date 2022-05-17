import { HTMLAttributes } from "react";

type LabelProps = HTMLAttributes<HTMLLabelElement> & {
    white?: boolean;
    children: string;
};

/**
 * Default ArSnap label.
 */
export default function Label({ white, children, className, ...props }: LabelProps) {
    const colorClass = white ? "text-white" : "text-purple-dark";

    return (
        <label
            className={[
                "text-[11px] leading-none font-semibold tracking-wider uppercase",
                colorClass,
                className ?? "",
            ].join(" ")}
            {...props}
        >
            {children}
        </label>
    );
}