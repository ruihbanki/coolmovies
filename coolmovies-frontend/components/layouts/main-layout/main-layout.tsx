import { StyledRoot, classes } from "./main-layout.styles";
import MainLayoutHeader from "./header";

interface MainLayout {
  children?: React.ReactNode;
  contentBackgroundImage?: string;
}

const MainLayout = (props: MainLayout) => {
  const { children, contentBackgroundImage } = props;
  return (
    <StyledRoot
      className={classes.root}
      contentBackgroundImage={contentBackgroundImage}
    >
      <div className={classes.header}>
        <MainLayoutHeader />
      </div>
      <div className={classes.content}>{children}</div>
    </StyledRoot>
  );
};

export default MainLayout;
