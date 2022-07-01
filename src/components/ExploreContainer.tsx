import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default ExploreContainer;
