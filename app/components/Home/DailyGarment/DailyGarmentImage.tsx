import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

import GarmentZoomModal from "src/components/Garment/GarmentZoomModal";

import { useModalContext } from "src/context/ModalContext";
import useResizeObserver from "src/hooks/useResizeObserver";
import useImageDimensions from "src/hooks/useImageDimensions";

interface HomeContentProps {
  mainImageUrl: string;
  garmentTitle: string;
}

const HomeContent: React.FC<HomeContentProps> = ({
  mainImageUrl,
  garmentTitle,
}) => {
  const { openModal, removeModal } = useModalContext();
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { maxHeight, maxWidth } = useImageDimensions({
    imageLoaded,
    dimensions,
  });
  const { ref: sizeRef, width: currentWidth } = useResizeObserver();

  const imgRef = React.useRef<HTMLImageElement>(null!);

  /* HANDLE IMAGE DIMENSIONS */

  const onLoad = () => {
    setDimensions({
      height: imgRef.current.naturalHeight,
      width: imgRef.current.naturalWidth,
    });
    setImageLoaded(true);
  };

  React.useEffect(() => {
    // console.log("IMAGE REF", imgRef);
    if (imgRef.current && imgRef.current.complete) {
      onLoad();
    }
  }, [imgRef]);

  const imageUrl = mainImageUrl ? mainImageUrl : "";
  const noImage = imageUrl === "" || imageUrl === undefined;

  const handleZoom = () => {
    const modal = (
      <GarmentZoomModal
        onClose={() => removeModal()}
        garmentTitle={garmentTitle}
        imageUrl={imageUrl}
        responsiveFullscreen={mediumScreen}
      />
    );

    openModal(modal);
  };

  // Image container can NOT be conditionally displayed (even if loading is slow)
  // because the imageRef cannot be used until img is rendered (don't forget!)
  return (
    <Styled.ImageCardContainer currentWidth={currentWidth}>
      <Styled.Card
        height={maxHeight ? maxHeight : 100}
        noImage={noImage}
        imageLoaded={imageLoaded}
        ref={sizeRef}
      >
        {noImage || !imageLoaded ? (
          <Skeleton
            variant="rectangular"
            width="calc((100vh - 160px) * 0.82)"
            height="calc(100vh - 160px)"
            sx={{
              bgcolor: "rgba(211, 217, 229, 0.5)",
              borderRadius: "8px",
            }}
          />
        ) : null}
        <Styled.DisplayedImage
          height={maxHeight ? maxHeight : 100}
          noImage={noImage}
          width={maxWidth}
          onClick={handleZoom}
        >
          <img
            ref={imgRef}
            src={imageUrl}
            alt={garmentTitle ? garmentTitle : "garment"}
            onLoad={onLoad}
          />
        </Styled.DisplayedImage>
      </Styled.Card>
    </Styled.ImageCardContainer>
  );
};

export default HomeContent;

// Styled Components
// =======================================================
let Styled: any;
Styled = {};

Styled.ImageCardContainer = styled.div((props: any) => {
  const t = props.theme;
  const currentWidth = props.currentWidth;
  return css`
    label: DailyGarment_CardContainer;
    display: flex;
    justify-content: center;

    ${t.mq.xl} {
      width: min(46%, calc(${currentWidth}px + 32px));
    }

    ${t.mq.xxl} {
      width: min(46%, calc(${currentWidth}px + 32px));
    }
  `;
});

Styled.Card = styled.div((props: any) => {
  const heightInVh = props.height / (props.height * 0.01);
  const display = props.noImage ? "none" : "flex";
  const shortScreen = props.height <= 800;
  const subtractMedium = shortScreen ? "40vh" : "414px";
  const t = props.theme;
  return css`
    label: Card;
    display: ${display};
    flex-direction: column;
    align-items: center;
    background-color: #d3d9e5;
    border-radius: 4px;
    width: auto;
    max-height: calc(${heightInVh}vh - 316px);
    max-width: min(500px, 95vw, 100%);
    position: relative;
    z-index: 0;

    ${t.mq.md} {
      max-height: max(calc(${heightInVh}vh - ${subtractMedium}), 378px);
      min-height: 378px;
    }

    ${t.mq.xl} {
      max-height: max(calc(${heightInVh}vh - 120px), 510px);
      min-height: 510px;
    }
  `;
});

Styled.DisplayedImage = styled.div((props: any) => {
  const t = props.theme;
  const heightInVh = props.height / (props.height * 0.01);
  const display = props.noImage ? "none" : "flex";
  const shortScreen = props.height <= 800;
  const subtractMedium = shortScreen ? "40vh" : "414px";
  return css`
    label: Garment_DisplayedImage;
    background-color: rgba(211, 217, 229, 0.5);
    display: ${display};
    position: relative;
    max-width: min(500px, 95vw, 100%);
    max-height: calc(${heightInVh}vh - 316px);
    border-radius: 4px;
    z-index: 1;

    ${t.mq.md} {
      max-height: max(calc(${heightInVh}vh - ${subtractMedium}), 378px);
      min-height: 378px;
    }

    ${t.mq.xl} {
      max-height: max(calc(${heightInVh}vh - 120px), 510px);
      min-height: 510px;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.005);
    }

    img {
      max-width: 95vw;
      max-height: calc(${heightInVh}vh - 316px);
      border-radius: 4px;

      ${t.mq.xs} {
        max-width: min(500px, 95vw, 100%);
      }

    ${t.mq.md} {
      max-height: max(calc(${heightInVh}vh - ${subtractMedium}), 378px);
      min-height: 378px;
    }

    ${t.mq.xl} {
      max-height: max(calc(${heightInVh}vh - 120px), 510px);
      min-height: 510px;
    }
  `;
});
