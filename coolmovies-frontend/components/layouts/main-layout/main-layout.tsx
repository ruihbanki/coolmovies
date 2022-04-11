import { StyledRoot, classes } from "./main-layout.styles";
import MainLayoutHeader from "./header";

interface MainLayout {
  children?: React.ReactNode;
}

const MainLayout = (props: MainLayout) => {
  const { children } = props;
  return (
    <StyledRoot className={classes.root}>
      <div className={classes.header}>
        <MainLayoutHeader />
      </div>
      <div className={classes.content}>{children}</div>
    </StyledRoot>
  );
};

export default MainLayout;
