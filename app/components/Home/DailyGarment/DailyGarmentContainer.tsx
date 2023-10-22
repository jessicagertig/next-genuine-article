import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import DailyGarmentInfo from "@/app/components/Home/DailyGarment/AnimatedDailyGarmentInfo";
import DailyGarmentTitle from "@/app/components/Home/DailyGarment/AnimatedDailyGarmentTitle";

import { useDailyGarment } from "src/queryHooks/useGarments";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

interface HomeContentProps {
  windowHeight: number;
  windowWidth: number;
}

const HomeContent: React.FC<HomeContentProps> = ({ windowHeight }) => {
  const { data: garment } = useDailyGarment();

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const contentContainerRef = React.useRef<HTMLDivElement>(null!);

  const [addMargin, setAddMargin] = React.useState(false);

  React.useEffect(() => {
    // console.log("CONTENT REF", contentContainerRef);
    if (
      contentContainerRef?.current &&
      contentContainerRef.current.clientHeight
    ) {
      const hasBorders =
        contentContainerRef?.current?.clientHeight < windowHeight;
      const needsMargin = mediumScreen && !hasBorders;
      setAddMargin(needsMargin);
    } else {
      setAddMargin(false);
    }
  }, [contentContainerRef, mediumScreen, windowHeight]);

  /* FREEZE ANIMATIONS */
  const dataRef = useIntersectionObserver(contentContainerRef, {
    freezeOnceVisible: true,
  });

  const show = dataRef?.isIntersecting;


  // Image container can NOT be conditionally displayed (even if loading is slow)
  // because the imageRef cannot be used until img is rendered (don't forget!)
  return (
    <Styled.Container height={windowHeight}>
      <Styled.SubContainer height={windowHeight} ref={contentContainerRef}>
        <Styled.HomeContentContainer
          height={windowHeight}
          addMargin={addMargin}
        >
          <DailyGarmentTitle
            show={show}
            maxHeight={maxHeight ? maxHeight : 100}
          />
          <DailyGarmentInfo
            maxHeight={maxHeight ? maxHeight : 100}
            garment={garment}
            show={show}
          />
        </Styled.HomeContentContainer>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default HomeContent;

// Styled Components
// =======================================================
let Styled: any;
Styled = {};

Styled.Container = styled.div((props: any) => {
  const t = props.theme;
  const heightInVh = props.height / (props.height * 0.01);
  const shortMediumScreen = props.height <= 630; // and is between md and xl width
  return css`
    label: DailyGarment_Container;
    display: flex;
    width: 100%;
    height: ${heightInVh}vh;
    align-items: center;
    justify-content: center;
    background-color: #020b1c;

    ${t.mq.md} {
      min-height: ${shortMediumScreen ? "630px" : "unset"};
    };
  `;
});

Styled.SubContainer = styled.div((props: any) => {
  const t = props.theme;
  const heightInVh = props.height / (props.height * 0.01);
  const shortMediumScreen = props.height <= 630; // and is between md and xl width
  return css`
    label: DailyGarment_SubContainer;
    display: flex;
    width: 100%;
    height: min(${heightInVh}vh, 800px);
    align-items: center;
    justify-content: center;
    background-color: white;

    ${t.mq.md} {
      min-height: ${shortMediumScreen ? "630px" : "min(${heightInVh}vh, 800px)"};
    };

    ${t.mq.xl} {
      height: min(${heightInVh}vh, 800px);
    }
  `;
});

Styled.HomeContentContainer = styled.div((props: any) => {
  const t = props.theme;
  const shortScreen = props.height <= 800;
  const addPadding = props.addMargin;
  return css`
    label: DailyGarment_HomeContentContainer;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    max-width: 1500px;
    padding-bottom: ${addPadding ? "64px" : "0px"};

    ${t.mq.md} {
      height: ${shortScreen ? "100%" : "94%"};
      justify-content: ${shortScreen ? "space-between" : "flex-start"};
      ${t.pb(0)};
    }

    ${t.mq.xl} {
      height: 100%;
      padding-right: 2%;
      padding-left: 2%;
      flex-direction: row;
      justify-content: center;
    }

    ${t.mq.gxl} {
      padding-right: 5%;
      padding-left: 5%;
    }
  `;
});
