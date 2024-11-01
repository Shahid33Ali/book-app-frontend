import { useAuth } from "../context/AuthContext";
import { useGetOrderByEmailQuery } from "../redux/features/orders/ordersApi";

const Order = () => {
  const { currentUser } = useAuth();
  const { data, isLoading, isError } = useGetOrderByEmailQuery(
    currentUser.email
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>There is an error</div>;
  }
  return (
    <div className="conatiner mx-auto p-6">
      <div className="text-2xl font-semibold">Your Orders</div>
      {data.length === 0 ? (
        <div>No orders</div>
      ) : (
        <div>
          {data.map((order, i) => (
            <div key={order._id} className="border-b mb-4 pb-4">
              <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                # {i + 1}
              </p>
              <h2 className="font-bold">Order ID: {order._id}</h2>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">
                Total Price: Rs. {order.totalPrice}
              </p>
              <h3 className="font-semibold mt-2">Address:</h3>
              <p>
                {" "}
                {order.address.city}, {order.address.state},{" "}
                {order.address.country}, {order.address.zipcode}
              </p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order.productsId.map((productId) => (
                  <li key={productId}>{productId}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
