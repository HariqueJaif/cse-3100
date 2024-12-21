import { useEffect, useState } from 'react';

const availableCats = [
  { name: "Whiskers", age: 2, breed: "Sphynx" },
  { name: "Mittens", age: 3, breed: "Sphynx" },
  { name: "Shadow", age: 1, breed: "Peterbald" },
  { name: "Pumpkin", age: 4, breed: "Peterbald" },
  { name: "Luna", age: 2, breed: "Birman" },
  { name: "Simba", age: 5, breed: "Birman" },
  { name: "Cleo", age: 3, breed: "Abyssinian" },
  { name: "Oliver", age: 4, breed: "Abyssinian" },
  { name: "Max", age: 2, breed: "Persian" },
  { name: "Chloe", age: 6, breed: "Persian" },
  { name: "Daisy", age: 1, breed: "Bengal" },
  { name: "Oscar", age: 3, breed: "Bengal" },
  { name: "Milo", age: 4, breed: "Siamese" },
  { name: "Bella", age: 2, breed: "Siamese" },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '', // Handle case where image may not exist
        }));
        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;

    if (searchTerm) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    setFilteredCats(filtered);
  }, [searchTerm, selectedBreed, cats]);

  return (
    <section className="text-center mt-4">
  
      <div className="header-container" style={{ padding: '0 20px' }}>
        <h2>Available Cats</h2>
        <p>Meet our adorable cats looking for their forever home!</p>
      </div>

      {/* Filters */}
      <div className="filters">
        {/* Search by name */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter by breed */}
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          {Array.from(new Set(availableCats.map((cat) => cat.breed))).map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      {/* Cat list */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
