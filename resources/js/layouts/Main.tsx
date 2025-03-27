

import { Link } from "@inertiajs/react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main({ children }: React.PropsWithChildren<{}>) {
  const [title, setTitle] = useState("Trang chủ");

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-3">
          <h3>Memu</h3>
          <ul>
            <li>
              <Link href="/" onMouseOver={() => setTitle("Home")} onMouseOut={() => setTitle("Trang chủ")}>Home</Link>
            </li>
            <li>
              <Link href="/product" onMouseOver={() => setTitle("Product")} onMouseOut={() => setTitle("Trang chủ")}>Product</Link>
            </li>
            <li>
              <Link href="/user" onMouseOver={() => setTitle("User")} onMouseOut={() => setTitle("Trang chủ")}>User</Link>
            </li>
            <li>
              <Link href="/Category" onMouseOver={() => setTitle("Category")} onMouseOut={() => setTitle("Trang chủ")}>Category</Link>
            </li>
          </ul>
        </div>
        <div className="col-9">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
