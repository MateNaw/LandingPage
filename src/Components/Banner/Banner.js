import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { BannerList } from "./BannerList";

export default function Banner() {
  return (
    <section id="home">
       <div className="slider">
            <BannerList />
        </div>
    </section>
  );
}
