import {cn} from "@/utils/cn";

export const CardContainer = ({
                                  children,
                                  className,
                                  containerClassName,
                              }: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div
            className={cn(
                "flex overflow-x-visible overflow-y-visible",
                containerClassName
            )}
        >
            <div
                className={cn(
                    "flex relative space-x-4",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export const CardItem = ({
                             as: Tag = "div",
                             children,
                             className,
                             ...rest
                         }: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <Tag
            className={cn("w-20 flex-shrink-0 border-4 border-white rounded-2xl", className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};