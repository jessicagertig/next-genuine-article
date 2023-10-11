import "@emotion/react";
import { SerializedStyles } from "@emotion/react";

type SpacingKeys = string | "auto" | "px";
type RoundedKeys = "xs" | "sm" | "md";
type TextHeadingKeys = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

declare module "@emotion/react" {
  export interface Theme {
    b: Function;
    l: Function;
    m: Function;
    mb: Function;
    ml: Function;
    mq: { [key: string]: string };
    mr: Function;
    mt: Function;
    mx: Function;
    my: Function;
    p: Function;
    pb: Function;
    pl: Function;
    pr: Function;
    pt: Function;
    px: Function;
    py: Function;
    r: Function;
    rounded: { [key in RoundedKeys]: SerializedStyles };
    space: { [key: SpacingKeys]: string };
    t: Function;
  }
}
