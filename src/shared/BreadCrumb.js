import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";

export const BreadCrumb = () => {
  const { title } = useSelector((state) => state.title);
  const { search } = useSelector((state) => state.search);

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {(title && (
          <>
            <Breadcrumb.Item>Movie</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        )) ||
          (search && <Breadcrumb.Item>Results for "{search}"</Breadcrumb.Item>)}
      </Breadcrumb>
      <hr style={{ heigth: "0.1rem" }} />
    </Container>
  );
};
