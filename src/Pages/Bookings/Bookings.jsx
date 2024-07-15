import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user && user.email) {
            const url = `http://localhost:5000/bookings?email=${user.email}`;

            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setBookings(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        } else {
            setLoading(false); // Stop loading if user is not available
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Please log in to view your bookings.</div>;
    }

    return (
        <div>
            <h2 className="text-4xl text-center font-medium py-2 border-y border-2 p-6">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Food Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                            ></BookingRow>)
                            }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;
