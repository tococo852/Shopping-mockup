import { useState } from "react";
import styled from "styled-components";
import CategorySidebar from "./components/CategorySidebar";
import ProductDisplay from "./components/ProductDisplay";

// Container: Grid layout
const CatalogLayout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 1.5rem;
  width: 100%;
  min-height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Sidebar styling
const Sidebar = styled.aside`
  border-right: 1px solid #ccc; 
  padding-right: 1rem;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
  }
`;

// Content / Product area styling
const Content = styled.main`
  padding-left: 1rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ProductCatalog = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <CatalogLayout>
      <Sidebar>
        <CategorySidebar
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </Sidebar>

      <Content>
        <ProductDisplay
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          categoryFilter={categoryFilter}
        />
      </Content>
    </CatalogLayout>
  );
};

export default ProductCatalog;
