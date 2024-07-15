import Swal from "sweetalert2";

const BookingRow = ({ booking }) => {
    const { _id, price, img, service, date } = booking;
    
    const handleDelete = id => {
        const procced = Swal.fire({
            title: 'success!',
            text: 'Are you sure you want delete',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          if(procced){
            fetch(``)
            .then(res => res.json())
            .then(data => console.log(data))
          }
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={(), => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded-xl">
                        {
                            img && <img src={img} />
                        }
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;