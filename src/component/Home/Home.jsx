import React, { useState, useEffect } from 'react';
import { data } from '../../Data/data';
import Card from '../card/Card';
import styles from './Home.module.css';
import bannerImage from '../../assets/bigBanner.png';

const shuffleArray = (array) => {
    // Using Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Home = ({ searchQuery }) => {
    const [shuffledData, setShuffledData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Shuffle the data array when the component mounts
        setShuffledData(shuffleArray(data));
    }, []);

    useEffect(() => {
        // Filter products based on search query
        const filtered = shuffledData.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, shuffledData]);

    return (
        <div className={styles.home}>
            <h1 style={{ textAlign: 'center', backgroundColor: '#3f83f2' }}>Welcome to the Home Page</h1>
            <div className={styles.image}>
                <img src={bannerImage} alt="MY Image" />
            </div>

            <div className={styles.cardcontainer}>
                {filteredProducts.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;






