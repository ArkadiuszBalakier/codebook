import { useEffect, useState } from "react";
import { DashbaordCart } from "./components/DashboardCart";
import { DashbaordEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";

export const DashboardPage = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const data = await getUserOrders();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length &&
          orders.map((order) => <DashbaordCart key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashbaordEmpty />}</section>
    </main>
  );
};
