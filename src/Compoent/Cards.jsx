import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Cards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [view, setView] = useState('grid');
    useEffect(() => {
        setLoading(true);
        const fetchCards = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setCards(data);
                console.log(data);

                setError('');
            }
            catch (error) {
                setError('Failed to fetch cards');
            } finally {
                const timeout = setTimeout(() => {
                    setLoading(false);
                }, 1000);
                return () => clearTimeout(timeout);
            }
        }
        fetchCards();
    }, [])
    const cardsPerPage = 6;
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    const handlePrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    const removeCard = (id) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 border-t-transparent"></div>
            </div>
        ); s
    }

    return (
        <>
            <div className='min-h-screen flex  items-center justify-1 bg-gray-200 static'>
                <div className='flex flex-col '>
                    <Link to="/feedback">
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 hover:shadow-lg cursor-alias'>
                            Give Feedback
                        </button>
                    </Link>
                    <br />
                    <div className="flex mb-4">
                        <button
                            onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 hover:shadow-lg cursor-alias">
                            Toggle View
                        </button>
                    </div>
                </div>
                <div className=' bg-teal-300 p-6 w-full flex-1 overflow-y-auto ' >

                    <div className={`flex flex-wrap justify-center mt-10 bg-gray-100 ${view === 'grid' ? 'grid grid-cols-3 gap-4' : 'block'}`}>

                        {cards && cards.filter((_, index) => index >= startIndex && index < endIndex).map((card) => (
                            <div key={card.id} className={`relative ${view === 'grid' ? 'max-w-sm w-full overflow-hidden shadow-lg m-4' : 'w-full max-w-3xl p-4'}`}>
                                <button
                                    onClick={() => removeCard(card.id)}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 hover:bg-red-700 transition duration-300">
                                    x

                                </button>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{card.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {card.body}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className="flex justify-center mt-4 gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className='bg-gray-300 px-4 py-2 rounded disabled:opacity-50'>
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            className='bg-gray-300 px-4 py-2 rounded disabled:opacity-50'>
                            Next
                        </button>


                    </div>
                </div>

            </div>



        </>
    )

}

export default Cards
