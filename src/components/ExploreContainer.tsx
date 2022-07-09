import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default ExploreContainer;
