import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "./Spinner";
import ImagesCarousel from "./ImagesCarousel";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(15);

  useEffect(() => {
    axios
      .get("https://dattebayo-api.onrender.com/characters")
      .then((response) => {
        setCharacters(response.data.characters);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(characters.length / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ninja ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Blood Type</th>
          </tr>
        </thead>
        <tbody>
          {currentCharacters.map((character) => (
            <tr key={character.id}>
              <td>{character.id}</td>
              <td className="d-flex justify-content-center">
                {character.images && character.images.length > 0 ? (
                  <ImagesCarousel images={character.images} />
                ) : (
                  "No images available"
                )}
              </td>
              <td>{character.name}</td>
              <td>{character.personal.sex}</td>
              <td>{character.personal.bloodType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Characters;
